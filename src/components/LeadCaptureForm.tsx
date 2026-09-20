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
  description = "20 quick fixes that get fresher resumes past ATS software. Enter your details and the PDF downloads instantly.",
}: LeadCaptureFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = leadSchema.safeParse({ name, email });
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
      const { error } = await supabase.from("resume_tip_leads").insert({
        name: parsed.data.name,
        email: parsed.data.email,
        source_slug: sourceSlug ?? null,
      });
      if (error) throw error;

      await buildTipsPdf();
      setDone(true);
      toast({
        title: "Your tips PDF is downloading",
        description: "Check your downloads folder for Resumly-AI-Resume-Tips.pdf",
      });
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again in a moment.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mt-14 rounded-xl border border-border bg-card p-8">
      <div className="flex items-start gap-3 mb-3">
        <span className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
          <Mail className="w-5 h-5" />
        </span>
        <div>
          <h2 className="text-2xl font-bold">{heading}</h2>
          <p className="text-muted-foreground mt-1">{description}</p>
        </div>
      </div>

      {done ? (
        <div className="flex items-center gap-2 text-primary font-medium mt-4">
          <CheckCircle2 className="w-5 h-5" />
          Sent! Your AI Resume Tips PDF has been downloaded.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid sm:grid-cols-[1fr_1fr_auto] gap-3 mt-5">
          <Input
            placeholder="Your name"
            value={name}
            maxLength={100}
            onChange={(e) => setName(e.target.value)}
            aria-label="Your name"
            required
          />
          <Input
            type="email"
            placeholder="you@email.com"
            value={email}
            maxLength={255}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Your email address"
            required
          />
          <Button type="submit" variant="hero" disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 mr-1 animate-spin" /> Sending…
              </>
            ) : (
              <>
                <Download className="w-4 h-4 mr-1" /> Get free tips
              </>
            )}
          </Button>
        </form>
      )}
      <p className="text-xs text-muted-foreground mt-3">
        No spam. We only email you free resume and job-search resources.
      </p>
    </section>
  );
};

export default LeadCaptureForm;
