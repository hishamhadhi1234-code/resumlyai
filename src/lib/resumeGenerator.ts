import { ResumeData, GeneratedResume, Experience } from "@/types/resume";

const actionVerbs = [
  "Developed", "Spearheaded", "Implemented", "Optimized", "Engineered",
  "Architected", "Streamlined", "Orchestrated", "Designed", "Delivered",
];

function enhanceDescription(desc: string, role: string): string {
  if (!desc.trim()) return desc;
  const verb = actionVerbs[Math.floor(Math.random() * actionVerbs.length)];
  const clean = desc.replace(/^(I |We |My )/i, "");
  if (/^\d/.test(clean) || /^[A-Z][a-z]+ed /.test(clean)) return clean;
  return `${verb} ${clean.charAt(0).toLowerCase()}${clean.slice(1)}`;
}

function generateSummary(data: ResumeData): string {
  const skills = data.skills.split(",").slice(0, 3).map(s => s.trim()).join(", ");
  const years = data.experience.length > 0 ? `with ${data.experience.length}+ experience${data.experience.length > 1 ? "s" : ""}` : "";
  return `Results-driven ${data.targetRole || "professional"} ${years} skilled in ${skills || "various technologies"}. Proven ability to deliver high-impact solutions and drive measurable outcomes. Passionate about leveraging technology to solve complex problems and create value.`;
}

function suggestSkills(data: ResumeData): string[] {
  const roleSkills: Record<string, string[]> = {
    "software": ["Git", "Agile/Scrum", "CI/CD", "REST APIs", "System Design"],
    "data": ["SQL", "Python", "Tableau", "Statistical Analysis", "Machine Learning"],
    "marketing": ["SEO", "Google Analytics", "Content Strategy", "Social Media", "A/B Testing"],
    "design": ["Figma", "Adobe XD", "User Research", "Wireframing", "Prototyping"],
    "default": ["Communication", "Problem Solving", "Team Collaboration", "Time Management", "Leadership"],
  };
  const key = Object.keys(roleSkills).find(k => data.targetRole.toLowerCase().includes(k)) || "default";
  const existing = data.skills.toLowerCase();
  return roleSkills[key].filter(s => !existing.includes(s.toLowerCase())).slice(0, 4);
}

function calculateScore(data: ResumeData): { score: number; suggestions: string[] } {
  let score = 40;
  const suggestions: string[] = [];

  if (data.fullName) score += 5;
  if (data.email) score += 5;
  if (data.phone) score += 5;
  if (data.targetRole) score += 5;
  else suggestions.push("Add a target job role to help ATS matching");

  if (data.skills.split(",").length >= 5) score += 10;
  else suggestions.push("Add at least 5 relevant skills for better ATS scoring");

  if (data.experience.length >= 2) score += 10;
  else suggestions.push("Add more work experience entries for a stronger resume");

  if (data.projects.length >= 1) score += 5;
  else suggestions.push("Include projects to showcase practical skills");

  if (data.education.length >= 1) score += 5;
  else suggestions.push("Add your educational background");

  if (data.experience.some(e => /\d/.test(e.description))) score += 5;
  else suggestions.push("Add measurable results (numbers/percentages) in experience descriptions");

  if (data.jobDescription) score += 5;
  else suggestions.push("Paste a job description to get AI-optimized content matching");

  return { score: Math.min(score, 100), suggestions };
}

export function generateResume(data: ResumeData): GeneratedResume {
  const summary = generateSummary(data);
  const suggestedSkillsList = suggestSkills(data);
  const { score, suggestions } = calculateScore(data);

  const enhancedExperience: Experience[] = data.experience.map(exp => ({
    ...exp,
    description: enhanceDescription(exp.description, data.targetRole),
  }));

  return {
    ...data,
    summary,
    suggestedSkills: suggestedSkillsList,
    score,
    suggestions,
    enhancedExperience,
  };
}
