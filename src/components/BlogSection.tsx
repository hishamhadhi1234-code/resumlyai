import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";

type Blog = {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  url: string;
};

const blogs: Blog[] = [
  {
    title: "10 ATS-Friendly Resume Tips That Actually Work in 2025",
    excerpt:
      "Most resumes get rejected by bots before a human ever sees them. Here's how to format, what keywords to use, and what to avoid.",
    category: "Resume Tips",
    readTime: "6 min read",
    date: "Apr 12, 2025",
    url: "https://www.indeed.com/career-advice/resumes-cover-letters/how-to-make-resume-ats-friendly",
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
        {blogs.map((b, i) => (
          <motion.a
            key={b.title}
            href={b.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/40 transition-all hover:-translate-y-1 flex flex-col"
          >
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
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
