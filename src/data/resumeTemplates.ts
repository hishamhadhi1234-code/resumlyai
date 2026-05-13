export type TemplateAccent =
  | "blue"
  | "purple"
  | "emerald"
  | "rose"
  | "amber"
  | "slate"
  | "indigo"
  | "teal"
  | "sky";

export type ResumeTemplate = {
  slug: string;
  name: string;
  tagline: string;
  description: string; // long-form for detail page (1-2 paragraphs)
  bestFor: string[];
  features: string[];
  keywords: string[]; // for meta keywords / on-page mention
  accent: TemplateAccent;
  layout: "single" | "two-column" | "header-band" | "minimal";
  // SEO
  metaTitle: string;
  metaDescription: string;
};

export const RESUME_TEMPLATES: ResumeTemplate[] = [
  {
    slug: "simple",
    name: "Simple",
    tagline: "Clean, no-fuss layout that always passes ATS",
    description:
      "The Simple template is a single-column, black-on-white resume layout designed for maximum readability and 100% ATS compatibility. No graphics, no columns, no fancy fonts — just well-spaced sections that recruiters and applicant tracking systems can parse instantly.",
    bestFor: ["Freshers", "Entry-level roles", "Government jobs", "Conservative industries"],
    features: ["Single-column layout", "ATS-friendly", "Black & white", "Print-ready", "Free"],
    keywords: ["simple resume template", "basic resume format", "free resume template"],
    accent: "slate",
    layout: "single",
    metaTitle: "Simple Resume Template — Free, ATS-Friendly | Resumly",
    metaDescription:
      "Free simple resume template — clean single-column layout, ATS-friendly, no graphics. Build a basic, recruiter-approved resume in minutes with Resumly.",
  },
  {
    slug: "ats",
    name: "ATS",
    tagline: "Built and tested for applicant tracking systems",
    description:
      "The ATS template uses standard section headings, parsable fonts, and a flat structure that scores 95+ on every major applicant tracking system including Workday, Greenhouse, Lever, and Taleo. Every element has been validated against real ATS parsers.",
    bestFor: ["Corporate jobs", "Tech roles", "Anyone applying through job portals"],
    features: ["95+ ATS score", "Standard headings", "Plain text fallback", "Keyword optimized"],
    keywords: ["ats resume template", "ats friendly resume", "ats resume format"],
    accent: "blue",
    layout: "single",
    metaTitle: "ATS Resume Template — 95+ Score Guaranteed | Resumly",
    metaDescription:
      "Free ATS-friendly resume template tested against Workday, Greenhouse, and Lever. Get past applicant tracking systems and land more interviews.",
  },
  {
    slug: "modern",
    name: "Modern",
    tagline: "Contemporary design with a subtle accent bar",
    description:
      "The Modern template balances visual polish with ATS compatibility. It uses a thin colored accent bar, clean typography, and well-defined sections to feel current without sacrificing parseability. Perfect for tech, design, and product roles.",
    bestFor: ["Software engineers", "Designers", "Product managers", "Marketing roles"],
    features: ["Color accent", "Modern typography", "ATS-safe", "Two-tone sections"],
    keywords: ["modern resume template", "contemporary resume", "professional modern cv"],
    accent: "indigo",
    layout: "header-band",
    metaTitle: "Modern Resume Template — Free & ATS-Safe | Resumly",
    metaDescription:
      "Free modern resume template with clean typography and subtle color accents. ATS-safe design loved by recruiters in tech, design, and product.",
  },
  {
    slug: "professional",
    name: "Professional",
    tagline: "Polished layout for experienced professionals",
    description:
      "A traditional, executive-style template with formal section dividers and refined typography. Designed for mid-career and senior professionals applying to leadership, finance, consulting, or legal roles where credibility matters.",
    bestFor: ["Senior professionals", "Managers", "Finance", "Consulting", "Legal"],
    features: ["Executive style", "Formal dividers", "Serif accents", "Print-optimized"],
    keywords: ["professional resume template", "executive resume", "senior resume format"],
    accent: "slate",
    layout: "single",
    metaTitle: "Professional Resume Template — Executive Style | Resumly",
    metaDescription:
      "Free professional resume template for senior roles, managers, and consultants. Polished executive layout that builds instant credibility.",
  },
  {
    slug: "minimalist",
    name: "Minimalist",
    tagline: "Maximum whitespace, minimum distraction",
    description:
      "The Minimalist template strips everything down to the essentials — generous whitespace, a single neutral typeface, and no visual ornaments. Ideal when you want your content to do all the talking.",
    bestFor: ["Designers", "Writers", "Architects", "Anyone who values restraint"],
    features: ["Generous whitespace", "Single typeface", "No ornaments", "Editorial feel"],
    keywords: ["minimalist resume template", "minimal resume design", "clean resume template"],
    accent: "slate",
    layout: "minimal",
    metaTitle: "Minimalist Resume Template — Clean & Modern | Resumly",
    metaDescription:
      "Free minimalist resume template with generous whitespace and a single typeface. Editorial, refined, and quietly confident.",
  },
  {
    slug: "creative",
    name: "Creative",
    tagline: "Stand out with a two-column accented layout",
    description:
      "A two-column resume with a colored sidebar for skills and contact details. The Creative template gives designers, marketers, and content creators a way to stand out visually while still keeping the right column ATS-parseable.",
    bestFor: ["Designers", "Marketers", "Content creators", "Agencies", "Startups"],
    features: ["Two-column layout", "Colored sidebar", "Visual hierarchy", "Personality-forward"],
    keywords: ["creative resume template", "two column resume", "designer resume template"],
    accent: "purple",
    layout: "two-column",
    metaTitle: "Creative Resume Template — Two-Column Design | Resumly",
    metaDescription:
      "Free creative resume template with a two-column layout and colored sidebar. Stand out for design, marketing, and content roles.",
  },
  {
    slug: "fresher",
    name: "Fresher",
    tagline: "Education-first format for first-time job seekers",
    description:
      "The Fresher template is built for students and new graduates in India with no formal work experience. Education comes first, followed by projects, internships, and skills — exactly the order recruiters scan for entry-level roles.",
    bestFor: ["Students", "New graduates", "Interns", "Campus placements"],
    features: ["Education-first order", "Projects section", "Skills emphasis", "One page"],
    keywords: ["fresher resume template", "student resume", "resume for freshers"],
    accent: "emerald",
    layout: "single",
    metaTitle: "Fresher Resume Template — For Students & Graduates | Resumly",
    metaDescription:
      "Free fresher resume template designed for Indian students and new graduates. Education-first format perfect for campus placements and first jobs.",
  },
  {
    slug: "word",
    name: "Word",
    tagline: "Microsoft Word–compatible .docx export",
    description:
      "Build your resume in Resumly and export it as a fully editable Microsoft Word .docx file. The Word template uses standard system fonts and a layout that opens and edits cleanly in any version of MS Word, Google Docs, or LibreOffice.",
    bestFor: ["Anyone needing .docx", "Job portals requiring Word uploads", "HR teams"],
    features: [".docx export", "Standard fonts", "Editable in Word", "Cross-platform"],
    keywords: ["microsoft word resume template", "word resume template", "docx resume"],
    accent: "blue",
    layout: "single",
    metaTitle: "Microsoft Word Resume Template — Free .docx Download | Resumly",
    metaDescription:
      "Free Microsoft Word resume template — fully editable .docx download. Open in MS Word, Google Docs, or LibreOffice and customize in minutes.",
  },
  {
    slug: "google-docs",
    name: "Google Docs",
    tagline: "Designed to copy straight into Google Docs",
    description:
      "A resume layout that uses only fonts and formatting available in Google Docs natively. Build it in Resumly, export, and continue editing in Google Docs without any broken styles or font substitutions.",
    bestFor: ["Google Docs users", "Collaborative editing", "Cloud-first workflows"],
    features: ["Google Docs–safe fonts", "Native formatting", "Cloud editable", "Free"],
    keywords: ["google docs resume template", "google docs cv", "resume google docs"],
    accent: "sky",
    layout: "single",
    metaTitle: "Google Docs Resume Template — Free & Editable | Resumly",
    metaDescription:
      "Free Google Docs–compatible resume template. Build in Resumly, edit in Google Docs without broken fonts or layout shifts.",
  },
];

export const getTemplateBySlug = (slug: string): ResumeTemplate | undefined =>
  RESUME_TEMPLATES.find((t) => t.slug === slug);
