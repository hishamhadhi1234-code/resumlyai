import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, CheckCircle2, Target, FileText, Bot, Linkedin, Briefcase, Building2, Search, PenTool, Users, FolderOpen, MessageSquare, Globe, BarChart3, GraduationCap, AlertTriangle, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { setSEO } from "@/lib/seo";
import BlogCTA from "@/components/BlogCTA";

const BlogJobSearchChecklist = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    setSEO({
      title: "The Ultimate Job Search Checklist Before You Apply Anywhere | Resumly",
      description:
        "Use this job search checklist before applying for any job to increase your chances of getting hired. Learn how to prepare your resume, LinkedIn profile, portfolio and applications.",
      path: "/blog/job-search-checklist-before-you-apply",
      type: "article",
      publishedTime: "2026-07-26",
    });
  }, []);

  const steps = [
    {
      icon: Target,
      title: "Define Your Career Goal",
      body: "Before you start looking for jobs, ask yourself: What kind of job do you want? What industries interest you? What skills do you already have, and what do you need to improve?",
      points: [
        "List 2-3 target job roles",
        "Identify preferred industries or company sizes",
        "Note your current skills and skill gaps",
        "Set a realistic timeline for your job search",
      ],
    },
    {
      icon: FileText,
      title: "Update Your Resume",
      body: "Your resume is usually the first thing a recruiter sees. Make sure it is accurate, complete, and error-free before every application.",
      points: [
        "Check that contact information is correct",
        "Use a professional email address",
        "Update skills, projects, and certifications",
        "Verify graduation year and education details",
        "Fix all spelling and grammar mistakes",
      ],
    },
    {
      icon: Bot,
      title: "Make Sure Your Resume Is ATS-Friendly",
      body: "Many companies use computer programs to screen resumes before a human sees them. A clean, keyword-rich resume has a much better chance of passing.",
      points: [
        "Use standard headings like Education, Experience, Skills",
        "Include keywords from the job description",
        "Avoid tables, graphics, and unusual fonts",
        "Use a simple, single-column layout",
        "Save as PDF or DOCX as requested",
      ],
    },
    {
      icon: PenTool,
      title: "Customize Your Resume for Every Job",
      body: "One of the biggest mistakes job seekers make is sending the same resume to every employer. Tailoring your resume shows recruiters you understand the role.",
      points: [
        "Read the job description carefully",
        "Highlight the skills the employer is looking for",
        "Mention projects related to the job",
        "Mirror keywords from the posting naturally",
      ],
    },
    {
      icon: Linkedin,
      title: "Update Your LinkedIn Profile",
      body: "Recruiters often check LinkedIn before scheduling interviews. Your profile should match your resume and present you as a serious candidate.",
      points: [
        "Upload a professional photo",
        "Write a strong headline",
        "Fill out the About section",
        "Add skills, projects, and certifications",
        "Turn on 'Open to Work' if appropriate",
      ],
      link: { text: "Read our complete LinkedIn guide for freshers", to: "/blog/linkedin-guide-freshers-india-2026" },
    },
    {
      icon: Briefcase,
      title: "Build a Portfolio",
      body: "Depending on your field, a portfolio can make your application much stronger. It proves you can do the work, not just list skills.",
      points: [
        "Developers: GitHub projects, personal website, apps",
        "Designers: design samples, branding work, posters",
        "Writers: blog posts, articles, case studies",
        "Keep the portfolio easy to navigate and up to date",
      ],
    },
    {
      icon: Building2,
      title: "Research the Company",
      body: "Never apply without doing basic research. Spending 10-15 minutes learning about the company helps in both your application and interview.",
      points: [
        "Understand their products or services",
        "Read about company culture and values",
        "Check recent news and industry position",
        "Review the careers page thoroughly",
      ],
    },
    {
      icon: Search,
      title: "Understand the Job Description",
      body: "Many applicants skip this step. Carefully reading the JD helps you decide if you are a good fit and how to position yourself.",
      points: [
        "Review responsibilities and daily tasks",
        "Check required vs preferred qualifications",
        "Note location, salary, and work mode",
        "Be honest about your fit before applying",
      ],
    },
    {
      icon: PenTool,
      title: "Write a Strong Cover Letter",
      body: "Not every role needs a cover letter, but when requested, it is a chance to stand out. Avoid generic copy-paste templates.",
      points: [
        "Explain why you want the role",
        "Show why you are interested in the company",
        "Highlight relevant skills with examples",
        "Describe how you can contribute",
      ],
    },
    {
      icon: Users,
      title: "Prepare References",
      body: "Some employers ask for references later in the process. Choose people who know your work well and always ask permission first.",
      points: [
        "Professors or academic mentors",
        "Internship supervisors",
        "Project mentors or team leads",
        "Previous employers if you have any",
      ],
    },
    {
      icon: FolderOpen,
      title: "Organize Your Documents",
      body: "Keep all important files ready in one place. Being organized saves time and prevents last-minute errors.",
      points: [
        "Resume and tailored cover letters",
        "Certificates and transcripts",
        "Portfolio or project links",
        "Government ID and academic documents",
      ],
    },
    {
      icon: MessageSquare,
      title: "Practice Common Interview Questions",
      body: "Getting an interview is just the beginning. Practicing answers ahead of time makes you more confident and articulate.",
      points: [
        "Tell me about yourself",
        "Why should we hire you?",
        "What are your strengths and weaknesses?",
        "Why do you want to work here?",
      ],
      link: { text: "Read our first job interview guide for India", to: "/blog/first-job-interview-india-2026" },
    },
    {
      icon: Globe,
      title: "Check Your Online Presence",
      body: "Recruiters sometimes search for candidates online. Make sure your public profiles reflect professionalism.",
      points: [
        "Review social media profiles",
        "Remove or hide unprofessional content",
        "Keep your LinkedIn updated and active",
        "Ensure portfolio links work correctly",
      ],
    },
    {
      icon: BarChart3,
      title: "Apply Strategically",
      body: "Instead of sending out random applications, focus on quality. Targeted applications usually produce better results than mass applying.",
      points: [
        "Apply where your skills match the requirements",
        "Choose roles you genuinely want",
        "Write a short, personalized note when possible",
        "Follow application instructions exactly",
      ],
    },
    {
      icon: CheckCircle2,
      title: "Track Every Application",
      body: "Use a simple spreadsheet to stay organized. Tracking prevents duplicate applications and helps you follow up at the right time.",
      points: [
        "Company name and job title",
        "Date applied and application status",
        "Interview dates and recruiter contacts",
        "Follow-up reminders",
      ],
    },
  ];

  const mistakes = [
    "Using the same resume for every job",
    "Not making your resume ATS-friendly",
    "Applying without reading the job description",
    "Not proofreading applications",
    "Leaving LinkedIn incomplete or outdated",
    "Applying only through one job portal",
    "Giving up after a few rejections",
  ];

  const finalChecklist = [
    "Defined your career goal",
    "Updated your resume",
    "Made your resume ATS-friendly",
    "Customized your resume for the job",
    "Updated your LinkedIn profile",
    "Prepared your portfolio",
    "Researched the company",
    "Read the job description carefully",
    "Written a cover letter if needed",
    "Organized all documents",
    "Practiced interview questions",
    "Checked your online presence",
    "Tracked your application",
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <Link
            to="/#blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to blogs
          </Link>

          <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary mb-4">
            Career Advice
          </span>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            The Ultimate <span className="text-gradient">Job Search Checklist</span> Before You Apply Anywhere
          </h1>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-10 pb-8 border-b border-border">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" /> July 26, 2026
            </span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" /> 11 min read
            </span>
          </div>

          <article className="prose prose-lg max-w-none text-foreground/90 space-y-6 leading-relaxed">
            <p className="text-lg">
              Applying for jobs is easier than ever. With a few clicks, you can send your resume to dozens of companies. But that ease has also made the job market extremely competitive. Recruiters now receive hundreds — sometimes thousands — of applications for a single opening.
            </p>

            <p>
              Many job seekers make the mistake of applying everywhere without preparing first. They reuse the same resume, skip the job description, and never research the company. As a result, they get very few interview calls and start believing there are no jobs available.
            </p>

            <p>
              The truth is different. If you apply in a prepared and strategic way, your chances of getting noticed increase dramatically. This job search checklist will help you get ready before you click the "Apply" button.
            </p>

            <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg my-8">
              <p className="font-semibold text-lg mb-2">Why Preparation Matters</p>
              <p className="m-0">
                Recruiters spend only a few seconds on each application at first. Many companies also use ATS software to filter resumes before a human ever sees them. A few minutes of preparation can be the difference between getting ignored and getting an interview call.
              </p>
            </div>

            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="mt-12">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                      {i + 1}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mt-0 pt-1 flex items-center gap-2">
                      <Icon className="w-6 h-6 text-primary" /> {step.title}
                    </h2>
                  </div>

                  <div className="pl-14 space-y-3">
                    <p className="m-0">{step.body}</p>
                    <ul className="space-y-1 m-0">
                      {step.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                    {step.link && (
                      <p className="m-0 pt-2">
                        <Link to={step.link.to} className="text-primary font-medium hover:underline">
                          {step.link.text}
                        </Link>
                      </p>
                    )}
                  </div>
                </div>
              );
            })}

            <BlogCTA
              variant="inline"
              title="Start with a resume that passes ATS"
              description="Build an ATS-friendly, tailored resume for free — no login, no payment."
              buttonText="Build Resume"
            />

            <h2 className="flex items-center gap-2 mt-12">
              <AlertTriangle className="w-6 h-6 text-primary" /> Common Job Search Mistakes
            </h2>
            <p>Avoid these mistakes to improve your response rate:</p>
            <ul>
              {mistakes.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
            <p>
              Consistency is the most underrated part of job searching. A small number of high-quality applications each day beats hundreds of generic ones.
            </p>

            <h2 className="flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-primary" /> Bonus Tips for New Graduates
            </h2>
            <p>If you are applying for your first job, focus on potential and attitude:</p>
            <ul>
              <li>Highlight academic and personal projects</li>
              <li>Show certifications from online platforms</li>
              <li>Mention internships, volunteer work, or part-time jobs</li>
              <li>Include extracurricular activities that show leadership or teamwork</li>
              <li>Emphasize your willingness to learn and grow</li>
            </ul>
            <p>
              Recruiters know fresh graduates may not have years of experience. They often care more about your attitude, relevant skills, and learning potential.
            </p>

            <h2 className="flex items-center gap-2">
              <Lightbulb className="w-6 h-6 text-primary" /> Your Complete Job Search Checklist
            </h2>
            <p>Before you apply, make sure you have checked off these items:</p>
            <div className="grid sm:grid-cols-2 gap-3 not-prose my-6">
              {finalChecklist.map((item) => (
                <div key={item} className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <h2>Final Thoughts</h2>
            <p>
              Finding a job is not just about applying — it is about applying smartly. Every application is a chance to make a first impression. By following this checklist, you can make your applications stronger, get more interviews, and feel more confident during your job search.
            </p>
            <p>
              Rejection is a normal part of the process. Learn from each application, keep improving your skills, and do not give up. Your next application could be the one that changes your career.
            </p>

            <h2>Frequently Asked Questions</h2>

            <h3>How many jobs should I apply for each day?</h3>
            <p>
              Focus on quality, not quantity. Applying to 5-10 well-matched jobs with tailored resumes is usually better than sending out dozens of generic applications.
            </p>

            <h3>Should I customize my resume every time?</h3>
            <p>
              Yes. Tailoring your resume to the job description helps you get past ATS screening and catches the recruiter's attention.
            </p>

            <h3>Is LinkedIn important for fresh graduates?</h3>
            <p>
              Yes. A complete LinkedIn profile helps recruiters verify your background, find your skills, and contact you about job opportunities.
            </p>

            <h3>Should I apply if I do not meet every requirement?</h3>
            <p>
              Yes, if you meet most of the qualifications and believe you can do the job. Many employers hire candidates who do not tick every box.
            </p>

            <BlogCTA
              title="Start Your Job Search With Confidence"
              description="Build an ATS-friendly resume that helps you stand out to recruiters and pass computer screening — free, no login required."
              buttonText="Build My Resume Now"
            />
          </article>

          <div className="mt-16 pt-8 border-t border-border text-center">
            <Link
              to="/#blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              <ArrowLeft className="w-4 h-4" /> Read more articles
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogJobSearchChecklist;
