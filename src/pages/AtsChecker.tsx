import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Upload, FileText, Sparkles, ArrowLeft, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { setSEO } from "@/lib/seo";
import mammoth from "mammoth";

type AtsReport = {
  score: number;
  verdict: string;
  keywordMatch: number;
  formatting: number;
  clarity: number;
  strengths: string[];
  weaknesses: string[];
  suggestions: string[];
  missingKeywords: string[];
};

const AtsChecker = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState("");
  const [resumeText, setResumeText] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [parsing, setParsing] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [report, setReport] = useState<AtsReport | null>(null);

  useEffect(() => {
    setSEO({
      title: "Free AI ATS Resume Score Checker | Resumly",
      description: "Upload your resume and instantly check its ATS score with AI. Get keyword analysis, formatting feedback, and improvement tips.",
      path: "/ats-checker",
      type: "website",
    });
  }, []);

  const extractPdfText = async (file: File): Promise<string> => {
    const pdfjs: any = await import("pdfjs-dist");
    pdfjs.GlobalWorkerOptions.workerSrc = (
      await import("pdfjs-dist/build/pdf.worker.min.mjs?url")
    ).default;
    const buf = await file.arrayBuffer();
    const pdf = await pdfjs.getDocument({ data: buf }).promise;
    let text = "";
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      text += content.items.map((it: any) => it.str).join(" ") + "\n";
    }
    return text;
  };

  const imageToDataUrl = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const url = URL.createObjectURL(file);
      const img = new Image();
      img.onload = () => {
        const max = 2000;
        const scale = Math.min(1, max / Math.max(img.width, img.height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.round(img.width * scale);
        canvas.height = Math.round(img.height * scale);
        canvas.getContext("2d")!.drawImage(img, 0, 0, canvas.width, canvas.height);
        URL.revokeObjectURL(url);
        resolve(canvas.toDataURL("image/jpeg", 0.85));
      };
      img.onerror = () => {
        URL.revokeObjectURL(url);
        reject(new Error("Could not read this image. Try a JPG or PNG photo."));
      };
      img.src = url;
    });

  const handleFile = async (file: File) => {
    setReport(null);
    setFileName(file.name);
    setParsing(true);
    setResumeImage("");
    try {
      let text = "";
      const lower = file.name.toLowerCase();
      if (file.type.startsWith("image/") || /\.(jpe?g|png|webp)$/.test(lower)) {
        if (file.size > 15 * 1024 * 1024) throw new Error("Image is too large (max 15MB).");
        const dataUrl = await imageToDataUrl(file);
        setResumeImage(dataUrl);
        setResumeText("");
        toast({ title: "Photo loaded", description: `${file.name} is ready to analyze.` });
        return;
      }
      if (lower.endsWith(".pdf")) {
        text = await extractPdfText(file);
      } else if (lower.endsWith(".docx")) {
        const buf = await file.arrayBuffer();
        const result = await mammoth.extractRawText({ arrayBuffer: buf });
        text = result.value;
      } else if (lower.endsWith(".txt")) {
        text = await file.text();
      } else {
        throw new Error("Unsupported file. Please upload PDF, DOCX, TXT or a photo (JPG/PNG).");
      }
      if (!text || text.trim().length < 50) {
        throw new Error("Could not read enough text from your file. Try a different format.");
      }
      setResumeText(text);
      toast({ title: "Resume loaded", description: `${file.name} is ready to analyze.` });
    } catch (e: any) {
      toast({ title: "Failed to read file", description: e.message, variant: "destructive" });
      setFileName("");
      setResumeText("");
      setResumeImage("");
    } finally {
      setParsing(false);
    }
  };

  const handleAnalyze = async () => {
    if (!resumeText && !resumeImage) {
      toast({ title: "Upload a resume first", variant: "destructive" });
      return;
    }
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      toast({ title: "Please sign in", description: "Sign in to run an AI ATS analysis." });
      navigate("/auth?redirect=/ats-checker");
      return;
    }
    setAnalyzing(true);
    setReport(null);
    try {
      const { data, error } = await supabase.functions.invoke("ats-check", {
        body: resumeImage ? { resumeImage, jobDescription } : { resumeText, jobDescription },
      });
      if (error) throw error;
      if ((data as any)?.error) throw new Error((data as any).error);
      setReport(data as AtsReport);
    } catch (e: any) {
      toast({ title: "Analysis failed", description: e.message || "Please try again.", variant: "destructive" });
    } finally {
      setAnalyzing(false);
    }
  };

  const scoreColor = (n: number) =>
    n >= 80 ? "text-emerald-500" : n >= 60 ? "text-amber-500" : "text-destructive";

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Button variant="ghost" onClick={() => navigate("/")} className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back
          </Button>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" /> AI-Powered ATS Analysis
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Check Your <span className="text-gradient">ATS Score</span>
            </h1>
            <p className="text-muted-foreground">Upload your resume and get instant AI feedback.</p>
          </motion.div>

          <div className="space-y-6">
            <div
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-border rounded-xl p-8 text-center cursor-pointer hover:border-primary transition-colors bg-card/50"
            >
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.docx,.txt"
                className="hidden"
                onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
              />
              {parsing ? (
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                  <Loader2 className="w-8 h-8 animate-spin" />
                  <span>Reading your file…</span>
                </div>
              ) : fileName ? (
                <div className="flex flex-col items-center gap-2">
                  <FileText className="w-8 h-8 text-primary" />
                  <span className="font-medium">{fileName}</span>
                  <span className="text-xs text-muted-foreground">Click to change</span>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-2 text-muted-foreground">
                  <Upload className="w-8 h-8" />
                  <span className="font-medium text-foreground">Upload your resume</span>
                  <span className="text-xs">PDF, DOCX or TXT — up to ~5MB</span>
                </div>
              )}
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">
                Paste a job description (optional, improves accuracy)
              </label>
              <Textarea
                rows={4}
                placeholder="Paste the job description here…"
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
              />
            </div>

            <Button
              variant="hero"
              size="lg"
              className="w-full"
              onClick={handleAnalyze}
              disabled={!resumeText || analyzing}
            >
              {analyzing ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Analyzing…
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 mr-2" /> Check ATS Score
                </>
              )}
            </Button>
          </div>

          {report && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-10 space-y-6"
            >
              <div className="p-6 rounded-2xl border border-border bg-card text-center">
                <p className="text-sm text-muted-foreground mb-1">Overall ATS Score</p>
                <p className={`text-6xl font-extrabold ${scoreColor(report.score)}`}>{report.score}</p>
                <p className="text-muted-foreground mt-2">{report.verdict}</p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { label: "Keyword Match", val: report.keywordMatch },
                  { label: "Formatting", val: report.formatting },
                  { label: "Clarity & Impact", val: report.clarity },
                ].map((m) => (
                  <div key={m.label} className="p-4 rounded-xl border border-border bg-card">
                    <p className="text-xs text-muted-foreground mb-1">{m.label}</p>
                    <p className={`text-2xl font-bold mb-2 ${scoreColor(m.val)}`}>{m.val}</p>
                    <Progress value={m.val} />
                  </div>
                ))}
              </div>

              {report.strengths?.length > 0 && (
                <div className="p-5 rounded-xl border border-border bg-card">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" /> Strengths
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
                    {report.strengths.map((s, i) => <li key={i}>{s}</li>)}
                  </ul>
                </div>
              )}

              {report.weaknesses?.length > 0 && (
                <div className="p-5 rounded-xl border border-border bg-card">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-amber-500" /> Weaknesses
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
                    {report.weaknesses.map((s, i) => <li key={i}>{s}</li>)}
                  </ul>
                </div>
              )}

              {report.suggestions?.length > 0 && (
                <div className="p-5 rounded-xl border border-border bg-card">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-primary" /> Suggestions
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
                    {report.suggestions.map((s, i) => <li key={i}>{s}</li>)}
                  </ul>
                </div>
              )}

              {report.missingKeywords?.length > 0 && (
                <div className="p-5 rounded-xl border border-border bg-card">
                  <h3 className="font-semibold mb-3">Missing Keywords</h3>
                  <div className="flex flex-wrap gap-2">
                    {report.missingKeywords.map((k, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        {k}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="text-center pt-4">
                <Button variant="hero" size="lg" onClick={() => navigate("/builder")}>
                  Build a Better Resume
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AtsChecker;
