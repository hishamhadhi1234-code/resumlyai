import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Sparkles,
  Loader2,
  Target,
  Lightbulb,
  Wand2,
  ListChecks,
  AlertCircle,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { setSEO } from "@/lib/seo";

type Tip = {
  title: string;
  why: string;
  action: string;
  priority: "high" | "medium" | "low";
};

type TipsReport = {
  matchScore: number;
  summary: string;
  missingKeywords: string[];
  tips: Tip[];
  rewrittenBullets: { before: string; after: string }[];
  sectionAdvice: { section: string; advice: string }[];
};

const priorityStyles: Record<Tip["priority"], string> = {
  high: "bg-destructive/10 text-destructive",
  medium: "bg-primary/10 text-primary",
  low: "bg-muted text-muted-foreground",
};

const AtsTips = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [resumeText, setResumeText] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState<TipsReport | null>(null);

  useEffect(() => {
    setSEO({
      title: "AI ATS Improvement Tips for Your Target Job | Resumly",
      description:
        "Paste your resume and a target job description to get personalized, AI-generated ATS improvement tips, missing keywords and rewritten bullet points.",
      path: "/ats-tips",
      type: "website",
    });
  }, []);

  const handleGenerate = async () => {
    if (resumeText.trim().length < 50) {
      toast({
        title: "Add your resume content",
        description: "Paste at least a few lines of your resume.",
        variant: "destructive",
      });
      return;
    }
    if (jobDescription.trim().length < 30) {
      toast({
        title: "Add the job description",
        description: "Paste the job you are targeting so tips can be personalized.",
        variant: "destructive",
      });
      return;
    }

    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (!session) {
      toast({ title: "Please sign in", description: "Sign in to generate personalized tips." });
      navigate("/auth?redirect=/ats-tips");
      return;
    }

    setLoading(true);
    setReport(null);
    try {
      const { data, error } = await supabase.functions.invoke("ats-tips", {
        body: { resumeText, jobDescription },
      });
      if (error) throw error;
      if ((data as { error?: string })?.error) throw new Error((data as { error: string }).error);
      setReport(data as TipsReport);
      window.__lovableEvents?.track?.("project.ats_tips_generated");
    } catch (e) {
      toast({
        title: "Could not generate tips",
        description: (e as Error).message || "Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-16 max-w-4xl">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mb-4" aria-label="Go back">
          <ArrowLeft className="h-4 w-4 mr-2" /> Back
        </Button>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Personalized AI ATS Improvement Tips
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Paste your resume content and the job description you are applying for. AI compares the
            two and tells you exactly what to fix so your resume passes the ATS screen.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="resume-content" className="text-sm font-medium mb-2 block">
              Your resume content
            </label>
            <Textarea
              id="resume-content"
              value={resumeText}
              onChange={(e) => setResumeText(e.target.value)}
              placeholder="Paste your full resume text here — summary, skills, experience, education, projects…"
              className="min-h-[220px]"
            />
          </div>
          <div>
            <label htmlFor="job-description" className="text-sm font-medium mb-2 block">
              Target job description
            </label>
            <Textarea
              id="job-description"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Paste the job posting you want to apply for — responsibilities, required skills, qualifications…"
              className="min-h-[220px]"
            />
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center gap-2">
          <Button size="lg" onClick={handleGenerate} disabled={loading} className="w-full sm:w-auto">
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Generating your tips…
              </>
            ) : (
              <>
                <Sparkles className="h-4 w-4 mr-2" /> Get my ATS improvement tips
              </>
            )}
          </Button>
          {loading && (
            <p className="text-xs text-muted-foreground">
              This can take up to a minute while the AI reads both documents.
            </p>
          )}
        </div>

        {report && (
          <motion.section
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 space-y-6"
          >
            <div className="rounded-xl border border-border p-6">
              <div className="flex items-center gap-2 mb-2">
                <Target className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">Match score</h2>
              </div>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-4xl font-bold">{Math.round(report.matchScore)}</span>
                <span className="text-muted-foreground">/ 100</span>
              </div>
              <Progress value={Math.max(0, Math.min(100, report.matchScore))} className="mb-4" />
              <p className="text-muted-foreground">{report.summary}</p>
            </div>

            {report.missingKeywords.length > 0 && (
              <div className="rounded-xl border border-border p-6">
                <div className="flex items-center gap-2 mb-3">
                  <AlertCircle className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-semibold">Missing keywords</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {report.missingKeywords.map((k) => (
                    <span key={k} className="px-3 py-1 rounded-full bg-muted text-sm">
                      {k}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {report.tips.length > 0 && (
              <div className="rounded-xl border border-border p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Lightbulb className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-semibold">Your improvement tips</h2>
                </div>
                <ul className="space-y-4">
                  {report.tips.map((tip, i) => (
                    <li key={i} className="border-l-2 border-primary/40 pl-4">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="font-semibold">{tip.title}</h3>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full capitalize ${priorityStyles[tip.priority]}`}
                        >
                          {tip.priority} priority
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{tip.why}</p>
                      <p className="text-sm font-medium">Do this: {tip.action}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {report.rewrittenBullets.length > 0 && (
              <div className="rounded-xl border border-border p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Wand2 className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-semibold">Rewritten bullet points</h2>
                </div>
                <div className="space-y-4">
                  {report.rewrittenBullets.map((b, i) => (
                    <div key={i} className="grid gap-2 md:grid-cols-2">
                      <p className="text-sm text-muted-foreground line-through">{b.before}</p>
                      <p className="text-sm font-medium">{b.after}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {report.sectionAdvice.length > 0 && (
              <div className="rounded-xl border border-border p-6">
                <div className="flex items-center gap-2 mb-4">
                  <ListChecks className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-semibold">Section-by-section advice</h2>
                </div>
                <ul className="space-y-3">
                  {report.sectionAdvice.map((s, i) => (
                    <li key={i}>
                      <span className="font-semibold">{s.section}: </span>
                      <span className="text-muted-foreground">{s.advice}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="text-center">
              <Button size="lg" onClick={() => navigate("/builder")}>
                Apply these tips in the resume builder
              </Button>
            </div>
          </motion.section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default AtsTips;
