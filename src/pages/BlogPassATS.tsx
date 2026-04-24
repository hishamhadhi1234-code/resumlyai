import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, Search, FileSearch, CheckCircle2, XCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { setSEO } from "@/lib/seo";

const BlogPassATS = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    setSEO({
      title: "How to Pass ATS Resume Screening in India (2026 Guide) | Resumly",
      description:
        "Most resumes get rejected by ATS before a human sees them. Learn how Applicant Tracking Systems work and how to optimize your resume to pass them in 2026.",
      path: "/blog/pass-ats-resume-screening-india",
      type: "article",
      publishedTime: "2026-04-24",
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
            How to Pass ATS Resume Screening in India{" "}
            <span className="text-gradient">(2026 Guide)</span>
          </h1>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-10 pb-8 border-b border-border">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" /> Apr 24, 2026
            </span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" /> 7 min read
            </span>
          </div>

          <article className="prose prose-lg max-w-none text-foreground/90 space-y-6 leading-relaxed">
            <p className="text-lg">
              If you've applied for jobs but never heard back, the problem might not be your
              skills — it might be your resume. In India, most companies now use{" "}
              <strong>Applicant Tracking Systems (ATS)</strong> to filter resumes before
              they ever reach a recruiter. Your resume has to pass a machine before a human
              sees it.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 flex items-center gap-2">
              <Search className="w-6 h-6 text-primary" /> What Is an Applicant Tracking System?
            </h2>
            <p>
              An ATS is software companies use to scan resumes, filter candidates, and rank
              applications. It helps recruiters handle thousands of applications efficiently —
              but it also means a poorly formatted resume gets rejected automatically.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-12">How an ATS Works</h2>
            <ol className="space-y-2">
              <li>You apply for a job.</li>
              <li>The ATS scans your resume.</li>
              <li>It looks for relevant keywords.</li>
              <li>It ranks your resume against others.</li>
              <li>Top-ranked resumes go to recruiters.</li>
            </ol>

            <h2 className="text-2xl md:text-3xl font-bold mt-12">Why Most Resumes Get Rejected</h2>
            <p>
              Many resumes fail because they're missing the right keywords, use complex
              formatting, or rely on heavy design elements the ATS can't read.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-12">
              How to Pass an ATS (Step-by-Step)
            </h2>

            <h3 className="text-xl font-bold mt-8">1. Use the Right Keywords</h3>
            <p>
              Keywords are the single most important factor. Find them inside the job
              description and "skills required" section. For example, if the job mentions{" "}
              <strong>"Python"</strong> and <strong>"Data Analysis"</strong>, those exact
              words should appear in your resume.
            </p>

            <h3 className="text-xl font-bold mt-8">2. Keep Formatting Simple</h3>
            <ul className="space-y-1">
              <li>Avoid tables, images, and graphics</li>
              <li>Use standard fonts and a clean layout</li>
              <li>Stick to a single column</li>
            </ul>

            <h3 className="text-xl font-bold mt-8">3. Use Standard Headings</h3>
            <p>
              ATS recognises headings like <strong>Work Experience</strong>,{" "}
              <strong>Skills</strong>, and <strong>Education</strong>. Don't get creative
              with names like "My Journey" — the ATS won't understand them.
            </p>

            <h3 className="text-xl font-bold mt-8">4. Customise for Each Job</h3>
            <p>
              Don't send the same resume everywhere. Match your resume to each job
              description by mirroring its language and key requirements.
            </p>

            <h3 className="text-xl font-bold mt-8">5. Use Bullet Points</h3>
            <p>Bullet points make your resume easy for both the ATS and recruiters to scan.</p>

            <h2 className="text-2xl md:text-3xl font-bold mt-12">Common ATS Mistakes</h2>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="p-5 rounded-xl border border-destructive/30 bg-destructive/5">
                <h3 className="font-bold mt-0 mb-3 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-destructive" /> Avoid
                </h3>
                <ul className="m-0 space-y-1 text-sm">
                  <li>Fancy templates with columns</li>
                  <li>Keyword stuffing</li>
                  <li>Images, icons, and logos</li>
                  <li>PDFs with embedded graphics</li>
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
                </ul>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mt-12">Best Resume Format for ATS</h2>
            <ul className="space-y-1">
              <li>One column</li>
              <li>Simple, consistent layout</li>
              <li>Clear, well-labelled sections</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 flex items-center gap-2">
              <FileSearch className="w-6 h-6 text-primary" /> Tools to Check Your ATS Score
            </h2>
            <p>
              You can use tools like Jobscan — or skip the back-and-forth and check your
              ATS score instantly with Resumly's free built-in ATS Checker.
            </p>
            <div className="flex justify-center my-6">
              <Link
                to="/ats-checker"
                className="inline-flex items-center justify-center gap-2 bg-primary/10 text-primary border border-primary/30 px-5 py-2.5 rounded-lg font-medium hover:bg-primary/20 transition-colors"
              >
                <FileSearch className="w-4 h-4" /> Check My ATS Score
              </Link>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-primary" /> How AI Can Help
            </h2>
            <p>
              AI tools can suggest the right keywords, improve formatting, and optimise your
              content for each job — saving hours of manual tweaking.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-12">Final Thoughts</h2>
            <p>
              Passing an ATS isn't difficult once you know the rules. Use the right
              keywords, keep formatting simple, and customise your resume for every job.
              Do that, and you'll get past the bots — and into recruiters' inboxes.
            </p>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-8 my-12 text-center">
              <h3 className="text-2xl font-bold mb-3 mt-0">Start Building Your Resume</h3>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Stop guessing. Use Resumly's AI-powered builder to create an ATS-friendly
                resume that actually gets shortlisted.
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

export default BlogPassATS;
