import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2, ArrowRight, ArrowLeft, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ResumeData, Experience, Project, Education } from "@/types/resume";
import { generateResume } from "@/lib/resumeGenerator";

const emptyExp: () => Experience = () => ({ id: crypto.randomUUID(), company: "", role: "", duration: "", description: "" });
const emptyProj: () => Project = () => ({ id: crypto.randomUUID(), name: "", description: "", technologies: "" });
const emptyEdu: () => Education = () => ({ id: crypto.randomUUID(), institution: "", degree: "", year: "" });

const Builder = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [data, setData] = useState<ResumeData>({
    fullName: "", email: "", phone: "", location: "", targetRole: "", skills: "",
    experience: [emptyExp()], projects: [emptyProj()], education: [emptyEdu()], jobDescription: "",
  });

  const update = (field: keyof ResumeData, value: string) => setData({ ...data, [field]: value });

  const updateExp = (id: string, field: keyof Experience, value: string) => {
    setData({ ...data, experience: data.experience.map(e => e.id === id ? { ...e, [field]: value } : e) });
  };
  const updateProj = (id: string, field: keyof Project, value: string) => {
    setData({ ...data, projects: data.projects.map(p => p.id === id ? { ...p, [field]: value } : p) });
  };
  const updateEdu = (id: string, field: keyof Education, value: string) => {
    setData({ ...data, education: data.education.map(e => e.id === id ? { ...e, [field]: value } : e) });
  };

  const handleGenerate = () => {
    const result = generateResume(data);
    sessionStorage.setItem("resumly-resume", JSON.stringify(result));
    navigate("/resume");
  };

  const steps = [
    {
      title: "Personal Details",
      content: (
        <div className="space-y-4">
          <Input placeholder="Full Name" value={data.fullName} onChange={e => update("fullName", e.target.value)} />
          <Input placeholder="Email" type="email" value={data.email} onChange={e => update("email", e.target.value)} />
          <Input placeholder="Phone" value={data.phone} onChange={e => update("phone", e.target.value)} />
          <Input placeholder="Location (e.g., Mumbai, India)" value={data.location} onChange={e => update("location", e.target.value)} />
          <Input placeholder="Target Job Role (e.g., Frontend Developer)" value={data.targetRole} onChange={e => update("targetRole", e.target.value)} />
          <Input placeholder="Skills (comma-separated)" value={data.skills} onChange={e => update("skills", e.target.value)} />
        </div>
      ),
    },
    {
      title: "Experience",
      content: (
        <div className="space-y-6">
          {data.experience.map((exp) => (
            <div key={exp.id} className="p-4 rounded-xl border border-border space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Experience Entry</span>
                {data.experience.length > 1 && (
                  <button onClick={() => setData({ ...data, experience: data.experience.filter(e => e.id !== exp.id) })}>
                    <Trash2 className="w-4 h-4 text-destructive" />
                  </button>
                )}
              </div>
              <Input placeholder="Company" value={exp.company} onChange={e => updateExp(exp.id, "company", e.target.value)} />
              <Input placeholder="Role" value={exp.role} onChange={e => updateExp(exp.id, "role", e.target.value)} />
              <Input placeholder="Duration (e.g., Jan 2023 - Present)" value={exp.duration} onChange={e => updateExp(exp.id, "duration", e.target.value)} />
              <Textarea placeholder="Description" rows={3} value={exp.description} onChange={e => updateExp(exp.id, "description", e.target.value)} />
            </div>
          ))}
          <Button variant="outline" onClick={() => setData({ ...data, experience: [...data.experience, emptyExp()] })}>
            <Plus className="w-4 h-4 mr-1" /> Add Experience
          </Button>
        </div>
      ),
    },
    {
      title: "Projects",
      content: (
        <div className="space-y-6">
          {data.projects.map((proj) => (
            <div key={proj.id} className="p-4 rounded-xl border border-border space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Project Entry</span>
                {data.projects.length > 1 && (
                  <button onClick={() => setData({ ...data, projects: data.projects.filter(p => p.id !== proj.id) })}>
                    <Trash2 className="w-4 h-4 text-destructive" />
                  </button>
                )}
              </div>
              <Input placeholder="Project Name" value={proj.name} onChange={e => updateProj(proj.id, "name", e.target.value)} />
              <Textarea placeholder="Description" rows={2} value={proj.description} onChange={e => updateProj(proj.id, "description", e.target.value)} />
              <Input placeholder="Technologies used" value={proj.technologies} onChange={e => updateProj(proj.id, "technologies", e.target.value)} />
            </div>
          ))}
          <Button variant="outline" onClick={() => setData({ ...data, projects: [...data.projects, emptyProj()] })}>
            <Plus className="w-4 h-4 mr-1" /> Add Project
          </Button>
        </div>
      ),
    },
    {
      title: "Education & Job Match",
      content: (
        <div className="space-y-6">
          {data.education.map((edu) => (
            <div key={edu.id} className="p-4 rounded-xl border border-border space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Education Entry</span>
                {data.education.length > 1 && (
                  <button onClick={() => setData({ ...data, education: data.education.filter(e => e.id !== edu.id) })}>
                    <Trash2 className="w-4 h-4 text-destructive" />
                  </button>
                )}
              </div>
              <Input placeholder="Institution" value={edu.institution} onChange={e => updateEdu(edu.id, "institution", e.target.value)} />
              <Input placeholder="Degree" value={edu.degree} onChange={e => updateEdu(edu.id, "degree", e.target.value)} />
              <Input placeholder="Year (e.g., 2024)" value={edu.year} onChange={e => updateEdu(edu.id, "year", e.target.value)} />
            </div>
          ))}
          <Button variant="outline" onClick={() => setData({ ...data, education: [...data.education, emptyEdu()] })}>
            <Plus className="w-4 h-4 mr-1" /> Add Education
          </Button>
          <div className="pt-4 border-t border-border">
            <label className="text-sm font-medium mb-2 block">Match Resume with Job Description (optional)</label>
            <Textarea
              placeholder="Paste the job description here to optimize your resume..."
              rows={4}
              value={data.jobDescription}
              onChange={e => update("jobDescription", e.target.value)}
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">
              Build Your <span className="text-gradient">Resume</span>
            </h1>
            <p className="text-muted-foreground">Step {step + 1} of {steps.length}</p>
          </motion.div>

          {/* Progress bar */}
          <div className="flex gap-2 mb-8">
            {steps.map((_, i) => (
              <div key={i} className={`h-1.5 flex-1 rounded-full transition-colors ${i <= step ? "bg-gradient-primary" : "bg-muted"}`} />
            ))}
          </div>

          <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
            <h2 className="text-xl font-semibold mb-4">{steps[step].title}</h2>
            {steps[step].content}
          </motion.div>

          <div className="flex justify-between mt-8">
            <Button variant="outline" onClick={() => setStep(s => s - 1)} disabled={step === 0}>
              <ArrowLeft className="w-4 h-4 mr-1" /> Back
            </Button>
            {step < steps.length - 1 ? (
              <Button variant="hero" onClick={() => setStep(s => s + 1)}>
                Next <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            ) : (
              <Button variant="hero" onClick={handleGenerate}>
                <Sparkles className="w-4 h-4 mr-1" /> Generate Resume
              </Button>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Builder;
