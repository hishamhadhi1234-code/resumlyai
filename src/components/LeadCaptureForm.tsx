import { useState } from "react";
import { Download, Loader2, Mail, CheckCircle2 } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const leadSchema = z.object({
  name: z
    .string()
    .trim()
    .nonempty({ message: "Please enter your name" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
});

const TIPS: { heading: string; points: string[] }[] = [
  {
    heading: "1. Make it ATS-readable first",
    points: [
      "Use a single-column layout — no tables, text boxes or columns.",
      "Stick to standard section names: Summary, Skills, Experience, Education, Projects.",
      "Save as PDF unless the application form asks for DOCX.",
      "Keep fonts simple (Calibri, Arial, Inter) at 10–12pt.",
    ],
  },
  {
    heading: "2. Mirror the job description",
    points: [
      "Copy the 8–10 skills the job post repeats and use the same wording.",
      "Write tools by their exact names: 'MS Excel', 'Python', 'Figma', 'SQL'.",
      "Add a short Skills line at the top so keywords are found in 5 seconds.",
    ],
  },
  {
    heading: "3. Turn duties into results",
    points: [
      "Formula: Action verb + what you did + number or outcome.",
      "Weak: 'Worked on college website.'",
      "Strong: 'Built a 6-page college website in React, cutting page load time by 40%.'",
      "No numbers yet? Use scale: team size, hours saved, users, marks, batch rank.",
    ],
  },
  {
    heading: "4. Fresher-specific wins",
    points: [
      "Projects and internships go above Education if they are relevant.",
      "Add 2–3 lines per project: problem, tools, result.",
      "Include certifications with the issuing body and year.",
      "One page only. Two pages only after 5+ years of experience.",
    ],
  },
  {
    heading: "5. Before you hit Apply",
    points: [
      "Proofread aloud — typos are the #1 avoidable rejection.",
      "File name: Firstname_Lastname_Role.pdf",
      "Match your resume headline to your LinkedIn headline.",
      "Run an ATS score check and fix anything under 80.",
    ],
  },
];

const buildTipsPdf = async () => {
  const { default: jsPDF } = await import("jspdf");
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const marginX = 56;
  const pageHeight = doc.internal.pageSize.getHeight();
  const maxWidth = doc.internal.pageSize.getWidth() - marginX * 2;
  let y = 64;

  const ensureSpace = (needed: number) => {
    if (y + needed > pageHeight - 56) {
      doc.addPage();
      y = 64;
    }
  };

  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.text("Resumly — AI Resume Tips", marginX, y);
  y += 22;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.text("20 quick fixes that get fresher resumes past ATS software in India.", marginX, y);
  y += 30;

  TIPS.forEach((section) => {
    ensureSpace(40);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.text(section.heading, marginX, y);
    y += 18;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    section.points.forEach((p) => {
      const lines = doc.splitTextToSize(`•  ${p}`, maxWidth - 10);
      ensureSpace(lines.length * 15 + 4);
      doc.text(lines, marginX + 8, y);
      y += lines.length * 15 + 2;
    });
    y += 12;
  });

  ensureSpace(40);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("Build your ATS-friendly resume free: resumlyai.lovable.app/builder", marginX, y);

  doc.save("Resumly-AI-Resume-Tips.pdf");
};

interface LeadCaptureFormProps {
  sourceSlug?: string;
  heading?: string;
  description?: string;
}

const LeadCaptureForm = ({
  sourceSlug,
  heading = "Get the free AI Resume Tips PDF",
  description = "20 quick fixes that get fresher resumes past ATS software. Sign in with your email to unlock the download — it takes a few seconds and it's free.",
}: LeadCaptureFormProps) => {
  const [session, setSession] = useState<Session | null>(null);
  const [mode, setMode] = useState<"signup" | "signin">("signup");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [checkEmail, setCheckEmail] = useState(false);
  const [done, setDone] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    return () => sub.subscription.unsubscribe();
  }, []);

  const saveLeadAndDownload = async (leadName: string, leadEmail: string) => {
    const { error } = await supabase.from("resume_tip_leads").insert({
      name: leadName || leadEmail.split("@")[0],
      email: leadEmail,
      source_slug: sourceSlug ?? null,
    });
    if (error) throw error;
    await buildTipsPdf();
    setDone(true);
    toast({
      title: "Your tips PDF is downloading",
      description: "Look for Resumly-AI-Resume-Tips.pdf in your downloads.",
    });
  };

  const handleAuthSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = authSchema.safeParse({ name, email, password });
    if (!parsed.success) {
      toast({
        title: "Check your details",
        description: parsed.error.issues[0].message,
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      if (mode === "signup") {
        const { data, error } = await supabase.auth.signUp({
          email: parsed.data.email,
          password: parsed.data.password,
          options: { emailRedirectTo: window.location.href },
        });
        if (error) throw error;
        if (!data.session) {
          setCheckEmail(true);
          toast({
            title: "Confirm your email",
            description: "We sent you a link. Open it and your download unlocks right away.",
          });
          return;
        }
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email: parsed.data.email,
          password: parsed.data.password,
        });
        if (error) throw error;
      }
      await saveLeadAndDownload(parsed.data.name ?? "", parsed.data.email);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Please try again in a moment.";
      toast({ title: "Couldn't complete that", description: message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const handleSignedInDownload = async () => {
    setLoading(true);
    try {
      await saveLeadAndDownload(
        session?.user.user_metadata?.name ?? "",
        session?.user.email ?? "",
      );
    } catch {
      toast({
        title: "Download failed",
        description: "Please try again in a moment.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mt-14 rounded-xl border border-border bg-card p-8">
      <div className="flex items-start gap-3 mb-4">
        <span className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
          <Mail className="w-5 h-5" />
        </span>
        <div>
          <h2 className="text-2xl font-bold">{heading}</h2>
          <p className="text-muted-foreground mt-1">{description}</p>
        </div>
      </div>

      {done ? (
        <div className="flex items-center gap-2 text-primary font-medium">
          <CheckCircle2 className="w-5 h-5" />
          Done! Your AI Resume Tips PDF has been downloaded.
        </div>
      ) : checkEmail ? (
        <div className="rounded-lg bg-muted/50 border border-border p-4">
          <p className="font-medium flex items-center gap-2">
            <Mail className="w-4 h-4 text-primary" /> Check your inbox
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            We emailed a confirmation link to <span className="font-medium">{email}</span>. Open it,
            and you'll come straight back here to download your tips.
          </p>
        </div>
      ) : session ? (
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <p className="text-sm text-muted-foreground flex-1">
            Signed in as <span className="font-medium text-foreground">{session.user.email}</span> —
            your download is unlocked.
          </p>
          <Button variant="hero" onClick={handleSignedInDownload} disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 mr-1 animate-spin" /> Preparing…
              </>
            ) : (
              <>
                <Download className="w-4 h-4 mr-1" /> Download the PDF
              </>
            )}
          </Button>
        </div>
      ) : (
        <>
          <form onSubmit={handleAuthSubmit} className="space-y-3 max-w-md">
            {mode === "signup" && (
              <div>
                <Label htmlFor="lead-name">Your name</Label>
                <Input
                  id="lead-name"
                  placeholder="Priya Sharma"
                  value={name}
                  maxLength={100}
                  autoComplete="name"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            )}
            <div>
              <Label htmlFor="lead-email">Email</Label>
              <Input
                id="lead-email"
                type="email"
                placeholder="you@email.com"
                value={email}
                maxLength={255}
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="lead-password">Password</Label>
              <div className="relative">
                <Input
                  id="lead-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="At least 8 characters"
                  value={password}
                  minLength={8}
                  maxLength={72}
                  autoComplete={mode === "signup" ? "new-password" : "current-password"}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <Button type="submit" variant="hero" className="w-full" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-1 animate-spin" /> Please wait…
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 mr-1" />
                  {mode === "signup" ? "Create account & download" : "Sign in & download"}
                </>
              )}
            </Button>
          </form>

          <p className="text-sm text-muted-foreground mt-3">
            {mode === "signup" ? "Already have an account?" : "New to Resumly?"}{" "}
            <button
              type="button"
              className="text-primary font-medium hover:underline"
              onClick={() => setMode(mode === "signup" ? "signin" : "signup")}
            >
              {mode === "signup" ? "Sign in instead" : "Create a free account"}
            </button>
          </p>

          <ul className="mt-5 grid sm:grid-cols-3 gap-3 text-xs text-muted-foreground">
            <li className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-primary flex-shrink-0" /> Your password is
              encrypted — we never see it
            </li>
            <li className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-primary flex-shrink-0" /> No card, no charges, cancel
              anytime
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" /> No spam — only free
              career resources
            </li>
          </ul>
        </>
      )}
    </section>
  );
};

export default LeadCaptureForm;
