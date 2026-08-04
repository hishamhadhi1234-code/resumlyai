export interface LandingFAQ {
  q: string;
  a: string;
}

export interface LandingStep {
  title: string;
  body: string;
}

export interface LandingPageData {
  slug: string;
  keyword: string;
  title: string; // <title>
  metaDescription: string;
  h1: string;
  intro: string;
  heroBullets: string[];
  primaryCta: string;
  sections: { heading: string; body: string; points?: string[] }[];
  steps: LandingStep[];
  faqs: LandingFAQ[];
  relatedLinks: { label: string; to: string }[];
}

export const LANDING_PAGES: LandingPageData[] = [
  {
    slug: "resume-optimization-for-freshers-india",
    keyword: "resume optimization for freshers in India",
    title: "Resume Optimization for Freshers in India (Free ATS Tool) | Resumly",
    metaDescription:
      "Free resume optimization for freshers in India. Fix ATS formatting, add the right keywords, and score your resume in minutes — no login, no payment.",
    h1: "Resume Optimization for Freshers in India",
    intro:
      "Most fresher resumes in India are rejected by software before a recruiter ever opens them. Resume optimization means rewriting and reformatting your resume so both the ATS (Applicant Tracking System) and the hiring manager can read it instantly. Resumly does that for you free — no login, no payment.",
    heroBullets: [
      "Built for Indian freshers: campus placements, off-campus drives, internships",
      "ATS-safe single-column formatting recruiters and software both accept",
      "Instant ATS score with fixes you can apply in one click",
      "Download as PDF or DOCX — completely free",
    ],
    primaryCta: "Optimize My Resume Free",
    sections: [
      {
        heading: "Why fresher resumes get filtered out in India",
        body: "A single job posting on Naukri or LinkedIn can attract thousands of applications. Companies use ATS software to shortlist, and freshers lose out on avoidable formatting and keyword issues, not on talent.",
        points: [
          "Two-column or graphic-heavy templates the parser cannot read",
          "Missing job-description keywords such as the exact tool, language, or framework",
          "Vague lines like 'hardworking team player' instead of measurable projects",
          "Non-standard headings the ATS does not recognise as Education or Skills",
          "Photos, tables, and text boxes that break parsing",
        ],
      },
      {
        heading: "What resume optimization actually changes",
        body: "Optimization is not a redesign. It is a set of concrete edits that raise your parse rate and your relevance score for a specific job.",
        points: [
          "Standard headings: Summary, Education, Skills, Projects, Internships, Certifications",
          "Keywords pulled from the job description, used naturally in context",
          "Bullet points that start with an action verb and end with a result or number",
          "One page, single column, standard fonts, PDF or DOCX as requested",
          "Contact block with a professional email, phone, city, and LinkedIn URL",
        ],
      },
      {
        heading: "A fresher-friendly example",
        body: "Before: 'Worked on a mini project in college using Java.' After: 'Built a Java Spring Boot library management app used by 60+ students; reduced manual book issue time from 5 minutes to under 30 seconds.' The second version carries keywords, scope, and a measurable outcome — exactly what ATS scoring and recruiters both reward.",
      },
    ],
    steps: [
      { title: "Paste your details", body: "Enter your education, projects, internships, and skills in the free builder — no account needed." },
      { title: "Let AI rewrite the weak lines", body: "Resumly turns plain descriptions into recruiter-ready, keyword-rich bullet points." },
      { title: "Check your ATS score", body: "Run your resume through the ATS checker against the job description and see what to fix." },
      { title: "Download and apply", body: "Export a clean PDF or DOCX and send it out the same day." },
    ],
    faqs: [
      {
        q: "Is resume optimization free for freshers on Resumly?",
        a: "Yes. The resume builder, ATS-friendly templates, and PDF or DOCX download are free and work without a login or payment.",
      },
      {
        q: "What is a good ATS score for a fresher resume?",
        a: "Aim for 80 or above against the specific job description you are applying to. Below 60 usually means missing keywords or a layout the parser cannot read.",
      },
      {
        q: "Should a fresher resume in India be one page?",
        a: "Yes. With less than two years of experience, one page is standard in India and easier for both recruiters and ATS software to process.",
      },
      {
        q: "Do I need to optimise my resume for every job?",
        a: "For every job type, at minimum. Change the summary and skills keywords to match each job description — that single edit has the largest effect on ATS ranking.",
      },
    ],
    relatedLinks: [
      { label: "Ultimate Guide to Resume for Freshers in India (2026)", to: "/blog/ultimate-guide-resume-freshers-india-2026" },
      { label: "How to Pass ATS Resume Screening", to: "/blog/pass-ats-resume-screening-india" },
      { label: "Simple Resume Format for Freshers in India", to: "/blog/simple-resume-format-freshers-india" },
      { label: "Free ATS-Friendly Resume Templates", to: "/resume-templates" },
    ],
  },
  {
    slug: "free-ai-resume-optimization-india",
    keyword: "free AI resume optimization India",
    title: "Free AI Resume Optimization India — No Login, No Payment | Resumly",
    metaDescription:
      "Free AI resume optimization for Indian job seekers. Rewrite bullet points, add ATS keywords, score your resume, and download PDF or DOCX — no login required.",
    h1: "Free AI Resume Optimization for Indian Job Seekers",
    intro:
      "Resumly uses AI to rewrite your resume for Indian recruiters and Applicant Tracking Systems — stronger bullet points, the right keywords, and a layout that parses cleanly. Everything runs free in your browser with no sign-up and no card.",
    heroBullets: [
      "AI-rewritten summary, skills, and experience bullets",
      "ATS keyword matching against any job description",
      "Free ATS score with specific, actionable fixes",
      "PDF and DOCX export — no watermark, no paywall",
    ],
    primaryCta: "Start Free AI Optimization",
    sections: [
      {
        heading: "What the AI optimises",
        body: "Instead of a generic template swap, the AI rewrites the parts of your resume that decide whether you get shortlisted.",
        points: [
          "Professional summary tuned to the role you are targeting",
          "Experience and project bullets converted into action-plus-result statements",
          "Skills section aligned to the exact keywords in the job posting",
          "Wordy or repetitive lines tightened so everything fits one clean page",
        ],
      },
      {
        heading: "Why free matters in the Indian job market",
        body: "Most global resume tools charge in dollars and gate downloads behind a subscription. Resumly keeps the builder, templates, ATS checker, and downloads free so students and early-career professionals in India are not paying to apply for jobs.",
        points: [
          "No login for the builder and download",
          "No credit card, no trial that quietly converts",
          "Unlimited edits and re-downloads",
        ],
      },
      {
        heading: "Optimised for Indian hiring reality",
        body: "The templates and phrasing suit Indian conventions — degree and percentage or CGPA formatting, campus placement and internship sections, city-level location, and role titles used by Indian IT, BFSI, and startup recruiters.",
      },
    ],
    steps: [
      { title: "Open the builder", body: "Go straight to the free builder — no account, no email verification." },
      { title: "Add your raw details", body: "Rough notes are fine. The AI cleans up the phrasing for you." },
      { title: "Run the ATS check", body: "Paste the job description and get a score plus a list of missing keywords." },
      { title: "Export free", body: "Download the optimised resume as PDF or DOCX and apply immediately." },
    ],
    faqs: [
      {
        q: "Is this AI resume optimizer really free in India?",
        a: "Yes. Building, optimising, and downloading your resume as PDF or DOCX is free and does not require a login or payment.",
      },
      {
        q: "Do I need to create an account?",
        a: "No account is needed to build and download a resume. Sign-in is only required for the AI-powered ATS checker so credits are not abused.",
      },
      {
        q: "Will an AI-optimised resume be rejected by recruiters?",
        a: "No. The AI rewrites your real details into clearer, results-focused language — it does not invent experience. Always review the output before sending.",
      },
      {
        q: "Which file format should I upload to job portals?",
        a: "PDF is safest for most Indian job portals and company career pages. Use DOCX only when the posting specifically asks for Word.",
      },
    ],
    relatedLinks: [
      { label: "Resume Optimization for Freshers in India", to: "/resume-optimization-for-freshers-india" },
      { label: "Free ATS Resume Checker", to: "/ats-checker" },
      { label: "How AI Is Changing Hiring", to: "/blog/ai-changing-hiring-job-seekers-guide" },
      { label: "Resume Skills for Freshers in 2026", to: "/blog/resume-skills-freshers-2026-guide" },
    ],
  },
  {
    slug: "ats-friendly-resume-builder-india",
    keyword: "ATS-friendly resume builder free India",
    title: "ATS-Friendly Resume Builder — Free for India | Resumly",
    metaDescription:
      "Free ATS-friendly resume builder for India. Single-column, parser-safe templates, keyword guidance, instant ATS score, and free PDF or DOCX download.",
    h1: "Free ATS-Friendly Resume Builder for India",
    intro:
      "Every template in Resumly is built to pass Applicant Tracking Systems first and impress a recruiter second. Single column, standard headings, selectable text, no graphics that break parsing — and free to download.",
    heroBullets: [
      "Parser-safe single-column layouts",
      "Standard section headings the ATS recognises",
      "Keyword suggestions for IT, BFSI, marketing, and core roles",
      "Free PDF and DOCX export, no login",
    ],
    primaryCta: "Build My ATS Resume",
    sections: [
      {
        heading: "What makes a resume ATS-friendly",
        body: "An ATS-friendly resume is one a machine can read end to end without losing information.",
        points: [
          "Single-column layout with no tables or text boxes",
          "Standard fonts and real text — never an image of text",
          "Headings named Education, Experience, Skills, Projects, Certifications",
          "Dates in a consistent format such as Jun 2024 – May 2026",
          "No headers, footers, or photos containing critical details",
        ],
      },
      {
        heading: "Match the job description, not a template",
        body: "Passing the parser is step one; ranking well is step two. The ATS scores how closely your resume matches the posting, so mirror the exact tools, certifications, and role vocabulary used in the job description — where they are genuinely true for you.",
      },
      {
        heading: "Check before you apply",
        body: "Run the finished resume through the free ATS checker with the job description pasted in. You get a score, missing keywords, and formatting warnings so you can fix issues before a recruiter ever sees the file.",
      },
    ],
    steps: [
      { title: "Pick an ATS-safe template", body: "Choose from simple, modern, professional, or fresher layouts — all parser-tested." },
      { title: "Fill in your details", body: "The builder keeps headings and structure ATS-compliant automatically." },
      { title: "Score it", body: "Use the ATS checker against a real job description." },
      { title: "Download free", body: "Export PDF or DOCX with no watermark." },
    ],
    faqs: [
      {
        q: "Are Resumly's templates really ATS-friendly?",
        a: "Yes. All templates use a single-column layout, standard headings, and selectable text so ATS software can parse every section correctly.",
      },
      {
        q: "PDF or DOCX for ATS?",
        a: "Modern ATS software reads both. Use PDF by default and DOCX when the job posting explicitly requests Word.",
      },
      {
        q: "Does the ATS checker cost anything?",
        a: "The ATS score is free to use; you only sign in so AI usage stays fair for everyone.",
      },
      {
        q: "Can I use this for experienced roles too?",
        a: "Yes. The templates work for freshers and experienced professionals, though two pages are acceptable once you have several years of experience.",
      },
    ],
    relatedLinks: [
      { label: "Free AI Resume Optimization India", to: "/free-ai-resume-optimization-india" },
      { label: "Browse ATS-Friendly Resume Templates", to: "/resume-templates" },
      { label: "How to Make a Resume That Gets Past Computers", to: "/blog/resume-gets-past-computers-interviews-2026" },
      { label: "Top 10 Resume Mistakes Freshers Make", to: "/blog/top-10-resume-mistakes-freshers-india" },
    ],
  },
];

export const getLandingPage = (slug?: string) =>
  LANDING_PAGES.find((p) => p.slug === slug);
