import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";

type Blog = {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  url: string;
  internal?: boolean;
};

const blogs: Blog[] = [
  {
    title: "How to Make a Resume That Gets Past Computers and Gets Interviews in 2026",
    excerpt:
      "Learn how ATS works and how to format your resume so it passes computer screening and reaches real recruiters in 2026.",
    category: "Resume Tips",
    readTime: "6 min read",
    date: "May 19, 2026",
    url: "/blog/resume-gets-past-computers-interviews-2026",
    internal: true,
  },
  {
    title: "How to Prepare for Your First Job Interview in India (2026 Guide)",
    excerpt:
      "A step-by-step guide for freshers in India — research, common questions, communication, dress code, online interviews, and confidence tips to ace your first interview.",
    category: "Interviews",
    readTime: "8 min read",
    date: "May 18, 2026",
    url: "/blog/first-job-interview-india-2026",
    internal: true,
  },
  {
    title: "Ultimate Guide to Resume for Freshers in India (2026)",
    excerpt:
      "Everything freshers in India need to build a job-winning, ATS-friendly resume in 2026 — formats, skills, projects, ATS tips, templates, and a final checklist.",
    category: "Resume Tips",
    readTime: "10 min read",
    date: "May 2, 2026",
    url: "/blog/ultimate-guide-resume-freshers-india-2026",
    internal: true,
  },
  {
    title: "Best Resume Templates for Freshers in India (Free & Simple)",
    excerpt:
      "Confused by hundreds of resume designs? Here are the best free, simple, ATS-friendly templates for freshers in India — and the ones to avoid.",
    category: "Resume Tips",
    readTime: "6 min read",
    date: "Apr 25, 2026",
    url: "/blog/best-resume-templates-freshers-india",
    internal: true,
  },
  {
    title: "How to Pass ATS Resume Screening in India (2026 Guide)",
    excerpt:
      "Most resumes are rejected by ATS before a human ever sees them. Here's exactly how Applicant Tracking Systems work — and how to beat them in 2026.",
    category: "Resume Tips",
    readTime: "7 min read",
    date: "Apr 24, 2026",
    url: "/blog/pass-ats-resume-screening-india",
    internal: true,
  },
  {
    title: "Resume vs CV in India – What Freshers Must Know",
    excerpt:
      "Resume or CV? They're not the same. Learn the key differences, when to use each, and which one freshers in India should actually send to recruiters.",
    category: "Resume Tips",
    readTime: "6 min read",
    date: "Apr 24, 2026",
    url: "/blog/resume-vs-cv-india-freshers",
    internal: true,
  },
  {
    title: "How to Get Your First Job in India Without Experience",
    excerpt:
      "No experience? No problem. A practical 4-step playbook to land your first job in India — from resume to networking — even when you're starting from scratch.",
    category: "Career Advice",
    readTime: "5 min read",
    date: "Apr 23, 2026",
    url: "/blog/first-job-india-without-experience",
    internal: true,
  },
  {
    title: "Best Skills to Add in Resume for Freshers in India",
    excerpt:
      "Wondering which skills to put on your resume? Here are the top technical and soft skills Indian recruiters actually look for — and how to pick the right ones.",
    category: "Resume Tips",
    readTime: "4 min read",
    date: "Apr 23, 2026",
    url: "/blog/best-skills-resume-freshers-india",
    internal: true,
  },
  {
    title: "Simple Resume Format for Freshers in India",
    excerpt:
      "Confused about which resume format to use? Learn the simple, ATS-friendly structure that works best for freshers in India — clean, clear, and one page.",
    category: "Resume Tips",
    readTime: "5 min read",
    date: "Apr 23, 2026",
    url: "/blog/simple-resume-format-freshers-india",
    internal: true,
  },
  {
    title: "Top 10 Resume Mistakes Freshers Make in India (And How to Fix Them)",
    excerpt:
      "If you're a fresher trying to land your first job, avoid these common resume mistakes that get your application rejected instantly. Learn how to fix them and stand out.",
    category: "Resume Tips",
    readTime: "8 min read",
    date: "Apr 21, 2026",
    url: "/blog/top-10-resume-mistakes-freshers-india",
    internal: true,
  },
  {
    title: "Will AI Replace Jobs in 2026? Here's the Real Answer (Not the Hype)",
    excerpt:
      "Headlines say AI is taking over. The truth is more nuanced — here's an honest breakdown of which jobs are at risk, which are safe, and how to stay ahead.",
    category: "AI & Future of Work",
    readTime: "9 min read",
    date: "Apr 18, 2026",
    url: "/blog/will-ai-replace-jobs-2026",
    internal: true,
  },
  {
    title: "How to Write a Resume Summary as a Fresher (with Examples)",
    excerpt:
      "No experience? No problem. Learn how to write a strong summary that highlights your skills, projects, and potential.",
    category: "Freshers",
    readTime: "5 min read",
    date: "Apr 5, 2025",
    url: "https://www.naukri.com/blog/resume-summary-for-freshers/",
  },
  {
    title: "Cracking Campus Placements: A Realistic Guide for Indian Students",
    excerpt:
      "From aptitude rounds to HR interviews — what really matters, what to skip, and how to stand out in a crowd of 500+ applicants.",
    category: "Placements",
    readTime: "8 min read",
    date: "Mar 28, 2025",
    url: "https://www.geeksforgeeks.org/how-to-prepare-for-campus-placement/",
  },
  {
    title: "LinkedIn Profile Checklist: 12 Things Recruiters Look For",
    excerpt:
      "Your LinkedIn is often the first thing recruiters open. Here's a quick checklist to make sure yours actually gets noticed.",
    category: "LinkedIn",
    readTime: "4 min read",
    date: "Mar 20, 2025",
    url: "https://www.linkedin.com/business/talent/blog/talent-acquisition/what-recruiters-look-for-on-linkedin",
  },
  {
    title: "Switching Careers in India: A Step-by-Step Roadmap",
    excerpt:
      "Thinking about moving from teaching to tech? Or sales to product? Here's how to plan the transition without burning out.",
    category: "Career Switch",
    readTime: "7 min read",
    date: "Mar 14, 2025",
    url: "https://hbr.org/2022/04/how-to-successfully-change-careers",
  },
  {
    title: "Interview Questions Every Fresher Should Prepare in 2025",
    excerpt:
      "From 'Tell me about yourself' to behavioral curveballs — sample answers and frameworks that actually sound human.",
    category: "Interviews",
    readTime: "6 min read",
    date: "Mar 8, 2025",
    url: "https://www.glassdoor.com/blog/common-interview-questions/",
  },
];

const BlogSection = () => (
  <section id="blog" className="py-20">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Career <span className="text-gradient">Insights & Blogs</span>
        </h2>
        <p className="text-muted-foreground text-sm max-w-xl mx-auto">
          Hand-picked reads on resumes, interviews, placements & career growth.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((b, i) => {
          const cardClass =
            "group p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/40 transition-all hover:-translate-y-1 flex flex-col";
          const inner = (
            <>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                  {b.category}
                </span>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-semibold text-base mb-2 leading-snug group-hover:text-primary transition-colors">
                {b.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {b.excerpt}
              </p>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span>{b.date}</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {b.readTime}
                </span>
              </div>
            </>
          );
          const motionProps = {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.08 },
            className: cardClass,
          };
          return b.internal ? (
            <motion.div key={b.title} {...motionProps}>
              <Link to={b.url} className="contents">
                {inner}
              </Link>
            </motion.div>
          ) : (
            <motion.a
              key={b.title}
              href={b.url}
              target="_blank"
              rel="noopener noreferrer"
              {...motionProps}
            >
              {inner}
            </motion.a>
          );
        })}
      </div>
    </div>
  </section>
);

export default BlogSection;
