import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, Bot, FileCheck, ListChecks, XCircle, CheckCircle2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { setSEO } from "@/lib/seo";

const BlogResumePastComputers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    setSEO({
      title: "How to Make a Resume That Gets Past Computers and Gets Interviews in 2026 | Resumly",
      description:
        "Learn how to beat Applicant Tracking Systems (ATS) and get your resume seen by real recruiters. 8 practical tips to pass computer screening and land interviews.",
      path: "/blog/resume-gets-past-computers-interviews-2026",
      type: "article",
      publishedTime: "2026-05-19",
    });
  }, []);

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
            Resume Tips
          </span>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            How to Make a Resume That Gets Past Computers and Gets Interviews in{" "}
            <span className="text-gradient">2026</span>
          </h1>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-10 pb-8 border-b border-border">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" /> May 19, 2026
            </span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" /> 6 min read
            </span>
          </div>

          <article className="prose prose-lg max-w-none text-foreground/90 space-y-6 leading-relaxed">
            <p className="text-lg">
              Many people think that when they apply for a job, a real person reads their resume
              right away. That's not always true. Lots of companies use computer systems to look at
              resumes before a person even sees them. If your resume isn't made in a way that the
              computer can understand, it might get thrown out automatically.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 flex items-center gap-2">
              <Bot className="w-6 h-6 text-primary" /> What Is a Computer System for Job Applications?
            </h2>
            <p>
              A computer system for job applications, called an Applicant Tracking System or ATS,
              is a tool that companies use to manage job applications. It helps them sort through
              resumes quickly and decide which candidates move forward.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-12">Why Does ATS Matter?</h2>
            <ul className="space-y-1">
              <li>It helps companies hire people faster</li>
              <li>It matches resumes with job requirements</li>
              <li>It ranks resumes based on how they match the job</li>
              <li>It filters out people who are not a good fit</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 flex items-center gap-2">
              <ListChecks className="w-6 h-6 text-primary" /> 8 Tips for Making a Resume That Gets Past Computers
            </h2>
            <ol className="space-y-3">
              <li>
                <strong>Use simple headings</strong> like "Work Experience" and "Education" so the ATS can recognise sections.
              </li>
              <li>
                <strong>Include words that are specific to the job</strong> you want. These are often called keywords.
              </li>
              <li>
                <strong>Use a clean format</strong> — not too many colours or fancy designs.
              </li>
              <li>
                <strong>Don't use pictures or icons</strong> — ATS software often cannot read them.
              </li>
              <li>
                <strong>Use a font that's easy to read</strong>, such as Arial, Calibri, or Times New Roman.
              </li>
              <li>
                <strong>Use numbers to show what you achieved</strong>, like "increased sales by 25%".
              </li>
              <li>
                <strong>Save your resume in a format that computers can read</strong>, like PDF or DOCX.
              </li>
              <li>
                <strong>Check your resume for mistakes carefully</strong> — spelling errors can confuse the ATS.
              </li>
            </ol>

            <h2 className="text-2xl md:text-3xl font-bold mt-12">
              Common Mistakes That Can Get Your Resume Thrown Out
            </h2>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="p-5 rounded-xl border border-destructive/30 bg-destructive/5">
                <h3 className="font-bold mt-0 mb-3 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-destructive" /> Avoid
                </h3>
                <ul className="m-0 space-y-1 text-sm">
                  <li>Using tables</li>
                  <li>Adding images</li>
                  <li>Including headers and footers</li>
                  <li>Using multi-column templates</li>
                  <li>Fancy graphics or icons</li>
                </ul>
              </div>
              <div className="p-5 rounded-xl border border-primary/30 bg-primary/5">
                <h3 className="font-bold mt-0 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" /> Do
                </h3>
                <ul className="m-0 space-y-1 text-sm">
                  <li>Single-column layout</li>
                  <li>Standard headings</li>
                  <li>Relevant, natural keywords</li>
                  <li>Clear, simple sections</li>
                  <li>Easy-to-read fonts</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 flex items-center gap-2">
              <FileCheck className="w-6 h-6 text-primary" /> Simple Checklist for a Resume That Gets Past Computers
            </h2>
            <ul className="space-y-1">
              <li>Use clear headings</li>
              <li>Include job-specific words</li>
              <li>Use a clean format</li>
              <li>Avoid pictures and icons</li>
              <li>Use an easy-to-read font</li>
              <li>Use numbers to show achievements</li>
              <li>Save in PDF or DOCX format</li>
              <li>Check for mistakes</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-primary" /> How AI Can Help
            </h2>
            <p>
              AI-powered tools can suggest the right keywords, fix formatting issues, and help you
              tailor your resume for each job. This saves time and improves your chances of passing
              both ATS and human review.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-12">Conclusion</h2>
            <p>
              Before you apply for a job, make sure your resume is made in a way that gets past the
              computer system. Take the time to make it right. You'll have a better chance of getting
              an interview and moving forward in your career.
            </p>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-8 my-12 text-center">
              <h3 className="text-2xl font-bold mb-3 mt-0">Build an ATS-Friendly Resume</h3>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Use Resumly's AI-powered builder to create a clean, keyword-optimised resume that
                passes computer screening and impresses recruiters.
              </p>
              <Link
                to="/builder"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Build My Resume Now
              </Link>
            </div>
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

export default BlogResumePastComputers;
