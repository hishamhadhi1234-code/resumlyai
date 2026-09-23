import { corsHeaders } from "https://esm.sh/@supabase/supabase-js@2.95.0/cors";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.95.0";
import { createOpenAI } from "npm:@ai-sdk/openai";
import { streamText, Output, NoObjectGeneratedError } from "npm:ai";
import { z } from "npm:zod";

const RUN_ID_HEADER = "X-Lovable-AIG-Run-ID";

const tipsSchema = z.object({
  matchScore: z.number(),
  summary: z.string(),
  missingKeywords: z.array(z.string()),
  tips: z.array(
    z.object({
      title: z.string(),
      why: z.string(),
      action: z.string(),
      priority: z.enum(["high", "medium", "low"]),
    }),
  ),
  rewrittenBullets: z.array(z.object({ before: z.string(), after: z.string() })),
  sectionAdvice: z.array(z.object({ section: z.string(), advice: z.string() })),
});

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const authHeader = req.headers.get("Authorization");
    if (!authHeader?.startsWith("Bearer ")) return json({ error: "Unauthorized" }, 401);

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? "",
      { global: { headers: { Authorization: authHeader } } },
    );
    const { data: claimsData, error: authErr } = await supabase.auth.getClaims(
      authHeader.replace("Bearer ", ""),
    );
    if (authErr || !claimsData?.claims) return json({ error: "Unauthorized" }, 401);

    const { resumeText, jobDescription } = await req.json();
    if (!resumeText || typeof resumeText !== "string" || resumeText.trim().length < 50) {
      return json({ error: "Please paste at least a few lines of your resume content." }, 400);
    }
    if (!jobDescription || typeof jobDescription !== "string" || jobDescription.trim().length < 30) {
      return json({ error: "Please paste the target job description." }, 400);
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) return json({ error: "AI is not configured." }, 500);

    const incomingRunId = req.headers.get(RUN_ID_HEADER)?.trim() || undefined;
    let runId = incomingRunId;
    const gatewayFetch: typeof fetch = async (input, init) => {
      const headers = new Headers(init?.headers);
      if (runId && !headers.has(RUN_ID_HEADER)) headers.set(RUN_ID_HEADER, runId);
      const res = await fetch(input, { ...init, headers });
      runId = res.headers.get(RUN_ID_HEADER)?.trim() || runId;
      return res;
    };

    const lovable = createOpenAI({
      baseURL: "https://ai.gateway.lovable.dev/v1",
      apiKey: LOVABLE_API_KEY,
      headers: {
        "Lovable-API-Key": LOVABLE_API_KEY,
        "X-Lovable-AIG-SDK": "vercel-ai-sdk",
      },
      fetch: gatewayFetch,
    });

    const result = streamText({
      model: lovable.responses("openai/gpt-6-astra"),
      output: Output.object({ schema: tipsSchema }),
      system:
        "You are an expert ATS and resume coach for the Indian job market. Give honest, specific, actionable advice tailored to the exact job description. Never invent experience the candidate does not have; suggest how to phrase what they do have. Keep each tip under 40 words. Return at most 8 tips, 5 rewritten bullets, 4 section notes and 12 missing keywords.",
      prompt: `Compare this resume to the target job description and produce personalized ATS improvement tips.

RESUME:
"""
${resumeText.slice(0, 12000)}
"""

TARGET JOB DESCRIPTION:
"""
${jobDescription.slice(0, 6000)}
"""

matchScore is a 0-100 estimate of how well this resume would pass an ATS screen for this role.`,
      providerOptions: {
        openai: {
          forceReasoning: true,
          reasoningEffort: "low",
          reasoningSummary: "auto",
          store: false,
          include: ["reasoning.encrypted_content"],
        },
      },
      abortSignal: req.signal,
    });

    const output = await result.output;
    const headers: Record<string, string> = {};
    if (runId) headers[RUN_ID_HEADER] = runId;
    return new Response(JSON.stringify(output), {
      headers: { ...corsHeaders, "Content-Type": "application/json", ...headers },
    });
  } catch (e) {
    if ((e as Error)?.name === "AbortError") return new Response(null, { status: 499 });
    if (NoObjectGeneratedError.isInstance(e)) {
      console.error("ats-tips schema failure:", e.text);
      return json({ error: "The AI response was incomplete. Please try again." }, 502);
    }
    const msg = String((e as Error)?.message ?? e);
    console.error("ats-tips error:", msg);
    if (msg.includes("429")) return json({ error: "Too many requests. Please try again in a moment." }, 429);
    if (msg.includes("402")) return json({ error: "AI credits exhausted. Please add credits to your workspace." }, 402);
    return json({ error: "An unexpected error occurred. Please try again." }, 500);
  }
});
