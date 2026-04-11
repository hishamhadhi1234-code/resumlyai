export interface Experience {
  id: string;
  company: string;
  role: string;
  fromDate: string;
  toDate: string;
  description: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  year: string;
}

export interface ResumeData {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  targetRole: string;
  skills: string;
  experience: Experience[];
  projects: Project[];
  education: Education[];
  jobDescription: string;
}

export interface GeneratedResume extends ResumeData {
  summary: string;
  suggestedSkills: string[];
  score: number;
  suggestions: string[];
  enhancedExperience: Experience[];
}
