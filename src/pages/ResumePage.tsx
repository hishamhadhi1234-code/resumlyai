import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ArrowLeft, CheckCircle, AlertCircle, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GeneratedResume } from "@/types/resume";

const ResumePage = () => {
  const navigate = useNavigate();
  const [resume, setResume] = useState<GeneratedResume | null>(null);
  const resumeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("resumly-resume");
    if (stored) setResume(JSON.parse(stored));
    else navigate("/builder");
  }, [navigate]);

  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    if (!resumeRef.current) return;
    setDownloading(true);
    try {
      const [{ default: html2canvas }, { default: jsPDF }] = await Promise.all([
        import("html2canvas"),
        import("jspdf"),
      ]);
      const canvas = await html2canvas(resumeRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
      });
      const imgData = canvas.toDataURL("image/jpeg", 0.95);
      const pdf = new jsPDF({ unit: "pt", format: "a4", orientation: "portrait" });
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = pageWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 0;
      pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      const safeName = (resume?.fullName || "resume").replace(/[^a-z0-9]+/gi, "_");
      pdf.save(`${safeName}_resume.pdf`);
    } finally {
      setDownloading(false);
    }
  };

  if (!resume) return null;

  const allSkills = [
    ...resume.skills.split(",").map(s => s.trim()).filter(Boolean),
    ...resume.suggestedSkills,
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Score & suggestions sidebar */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-1 space-y-6">
              <div className="p-6 rounded-2xl border border-border bg-gradient-card">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" /> Resume Score
                </h3>
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="42" fill="none" stroke="hsl(var(--muted))" strokeWidth="8" />
                    <circle cx="50" cy="50" r="42" fill="none" stroke="url(#scoreGrad)" strokeWidth="8"
                      strokeDasharray={`${resume.score * 2.64} 264`} strokeLinecap="round" />
                    <defs>
                      <linearGradient id="scoreGrad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="hsl(230, 80%, 56%)" />
                        <stop offset="100%" stopColor="hsl(270, 60%, 58%)" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold">{resume.score}</span>
                  </div>
                </div>
                <p className="text-center text-sm text-muted-foreground">
                  {resume.score >= 80 ? "Excellent!" : resume.score >= 60 ? "Good, but can improve" : "Needs improvement"}
                </p>
              </div>

              {resume.suggestions.length > 0 && (
                <div className="p-6 rounded-2xl border border-border bg-gradient-card">
                  <h3 className="font-semibold mb-3">Suggestions</h3>
                  <ul className="space-y-2">
                    {resume.suggestions.map((s, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <AlertCircle className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {resume.suggestedSkills.length > 0 && (
                <div className="p-6 rounded-2xl border border-border bg-gradient-card">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" /> AI-Suggested Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {resume.suggestedSkills.map(s => (
                      <span key={s} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">{s}</span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-col gap-3">
                <Button variant="hero" onClick={handleDownload} disabled={downloading} className="w-full">
                  <Download className="w-4 h-4 mr-2" /> {downloading ? "Generating PDF..." : "Download PDF"}
                </Button>
                <Button variant="outline" onClick={() => navigate("/builder")} className="w-full">
                  <ArrowLeft className="w-4 h-4 mr-2" /> Edit Resume
                </Button>
              </div>
            </motion.div>

            {/* Resume preview */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="lg:col-span-2">
              <div className="bg-background border border-border rounded-2xl shadow-md p-8 md:p-12" ref={resumeRef}>
                <div style={{ marginBottom: 16 }}>
                  <h1 style={{ fontSize: 24, fontWeight: 800, marginBottom: 4 }}>{resume.fullName}</h1>
                  <div className="contact" style={{ fontSize: 13, color: "#555" }}>
                    {[resume.email, resume.phone, resume.location].filter(Boolean).join(" • ")}
                  </div>
                  {resume.targetRole && (
                    <div style={{ fontSize: 14, color: "#4361ee", fontWeight: 600 }}>{resume.targetRole}</div>
                  )}
                </div>

                {resume.summary && (
                  <div>
                    <h2 style={{ fontSize: 14, textTransform: "uppercase", letterSpacing: 1, color: "#4361ee", borderBottom: "2px solid #4361ee", paddingBottom: 4, margin: "20px 0 12px" }}>Professional Summary</h2>
                    <p style={{ fontSize: 14, color: "#333" }}>{resume.summary}</p>
                  </div>
                )}

                {allSkills.length > 0 && (
                  <div>
                    <h2 style={{ fontSize: 14, textTransform: "uppercase", letterSpacing: 1, color: "#4361ee", borderBottom: "2px solid #4361ee", paddingBottom: 4, margin: "20px 0 12px" }}>Skills</h2>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {allSkills.map(s => (
                        <span key={s} style={{ background: "#eef1ff", color: "#4361ee", padding: "3px 10px", borderRadius: 4, fontSize: 12 }}>{s}</span>
                      ))}
                    </div>
                  </div>
                )}

                {resume.enhancedExperience.some(e => e.company || e.role) && (
                  <div>
                    <h2 style={{ fontSize: 14, textTransform: "uppercase", letterSpacing: 1, color: "#4361ee", borderBottom: "2px solid #4361ee", paddingBottom: 4, margin: "20px 0 12px" }}>Experience</h2>
                    {resume.enhancedExperience.filter(e => e.company || e.role).map(exp => (
                      <div key={exp.id} style={{ marginBottom: 12 }}>
                        <h3 style={{ fontSize: 15, fontWeight: 600 }}>{exp.role}{exp.company ? ` at ${exp.company}` : ""}</h3>
                        {(exp.fromDate || exp.toDate) && <div style={{ fontSize: 13, color: "#666" }}>{exp.fromDate ? format(new Date(exp.fromDate), "MMM yyyy") : ""} – {exp.toDate ? format(new Date(exp.toDate), "MMM yyyy") : "Present"}</div>}
                        {exp.description && <p style={{ fontSize: 13, color: "#444", marginTop: 4 }}>{exp.description}</p>}
                      </div>
                    ))}
                  </div>
                )}

                {resume.projects.some(p => p.name) && (
                  <div>
                    <h2 style={{ fontSize: 14, textTransform: "uppercase", letterSpacing: 1, color: "#4361ee", borderBottom: "2px solid #4361ee", paddingBottom: 4, margin: "20px 0 12px" }}>Projects</h2>
                    {resume.projects.filter(p => p.name).map(proj => (
                      <div key={proj.id} style={{ marginBottom: 12 }}>
                        <h3 style={{ fontSize: 15, fontWeight: 600 }}>{proj.name}</h3>
                        {proj.description && <p style={{ fontSize: 13, color: "#444", marginTop: 2 }}>{proj.description}</p>}
                        {proj.technologies && <p style={{ fontSize: 12, color: "#888", fontStyle: "italic", marginTop: 2 }}>{proj.technologies}</p>}
                      </div>
                    ))}
                  </div>
                )}

                {resume.education.some(e => e.institution) && (
                  <div>
                    <h2 style={{ fontSize: 14, textTransform: "uppercase", letterSpacing: 1, color: "#4361ee", borderBottom: "2px solid #4361ee", paddingBottom: 4, margin: "20px 0 12px" }}>Education</h2>
                    {resume.education.filter(e => e.institution).map(edu => (
                      <div key={edu.id} style={{ marginBottom: 12 }}>
                        <h3 style={{ fontSize: 15, fontWeight: 600 }}>{edu.degree}</h3>
                        <div style={{ fontSize: 13, color: "#666" }}>{edu.institution}{edu.year ? ` • ${edu.year}` : ""}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResumePage;
