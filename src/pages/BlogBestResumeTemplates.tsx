import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, LayoutTemplate, CheckCircle2, XCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { setSEO } from "@/lib/seo";

const BlogBestResumeTemplates = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    setSEO({
      title: "Best Resume Templates for Freshers in India (Free & Simple) | Resumly",
      description:
        "Discover the best free, simple, ATS-friendly resume templates for freshers in India. Learn what to use, what to avoid, and how to get shortlisted faster.",
      path: "/blog/best-resume-templates-freshers-india",
      type: "article",
      publishedTime: "2026-04-25",
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
            Best Resume Templates for Freshers in India{" "}
            <span className="text-gradient">(Free & Simple)</span>
          </h1>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-10 pb-8 border-b border-border">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" /> Apr 25, 2026
            </span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" /> 6 min read
            </span>
          </div>

          <article className="prose prose-lg max-w-none text-foreground/90 space-y-6 leading-relaxed">
            <p className="text-lg">
              Creating a resume as a fresher can feel overwhelming — especially when you're
              unsure which template to choose. With so many designs online, it's easy to
              confuse what <em>looks</em> good with what actually <em>works</em>. The truth
              is simple: the best resume templates for freshers in India are{" "}
              <strong>clean, simple, and ATS-friendly</strong>.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-12">Why Resume Templates Matter</h2>
            <p>
              Your template is the first thing recruiters notice. Even before reading the
              content, they observe layout, structure, and readability. A well-structured
              template makes your resume easy to scan and understand.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 flex items-center gap-2">
              <LayoutTemplate className="w-6 h-6 text-primary" /> What Makes a Good Template?
            </h2>

            <h3 className="text-xl font-bold mt-8">1. Clean Layout</h3>
            <ul className="space-y-1">
              <li>One-column format</li>
              <li>Proper spacing</li>
              <li>Clear sections</li>
            </ul>

            <h3 className="text-xl font-bold mt-8">2. Easy Readability</h3>
            <ul className="space-y-1">
              <li>Standard fonts like Arial or Calibri</li>
              <li>Black text on white background</li>
              <li>No clutter</li>
            </ul>

            <h3 className="text-xl font-bold mt-8">3. ATS Compatibility</h3>
            <ul className="space-y-1">
              <li>No images</li>
              <li>No graphics</li>
              <li>No complex formatting</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mt-12">
              Best Resume Template Structure for Freshers
            </h2>
            <ol className="space-y-2">
              <li><strong>Contact Information</strong> — name, phone, email</li>
              <li><strong>Resume Summary</strong> — a short 2–3 line introduction</li>
              <li><strong>Skills Section</strong> — relevant technical and soft skills</li>
              <li><strong>Projects</strong> — very important for freshers</li>
              <li><strong>Education</strong> — degree and college details</li>
            </ol>

            <h2 className="text-2xl md:text-3xl font-bold mt-12">Types of Resume Templates</h2>

            <h3 className="text-xl font-bold mt-8">1. Simple Professional Template</h3>
            <p>Best for freshers and corporate jobs.</p>

            <h3 className="text-xl font-bold mt-8">2. Minimalist Template</h3>
            <p>Best for quick readability and ATS systems.</p>

            <h3 className="text-xl font-bold mt-8">3. Skills-Based Template</h3>
            <p>Best when you have no experience and want to highlight abilities.</p>

            <h2 className="text-2xl md:text-3xl font-bold mt-12">Templates You Should Avoid</h2>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="p-5 rounded-xl border border-destructive/30 bg-destructive/5">
                <h3 className="font-bold mt-0 mb-3 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-destructive" /> Avoid
                </h3>
                <ul className="m-0 space-y-1 text-sm">
                  <li>Bright colors</li>
                  <li>Icons and graphics</li>
                  <li>Two-column layouts</li>
                  <li>Fancy fonts</li>
                </ul>
              </div>
              <div className="p-5 rounded-xl border border-primary/30 bg-primary/5">
                <h3 className="font-bold mt-0 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" /> Choose
                </h3>
                <ul className="m-0 space-y-1 text-sm">
                  <li>Single column</li>
                  <li>Standard fonts</li>
                  <li>Clear headings</li>
                  <li>Plenty of whitespace</li>
                </ul>
              </div>
            </div>
            <p>These may look attractive but often fail ATS systems.</p>

            <h2 className="text-2xl md:text-3xl font-bold mt-12">
              Why Simple Templates Work Better in India
            </h2>
            <p>
              Recruiters in India spend very little time on each resume and prefer clarity
              over design. A simple template helps you get shortlisted faster and pass ATS
              screening.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-12">How to Choose the Right Template</h2>
            <p>Ask yourself:</p>
            <ul className="space-y-1">
              <li>Is it easy to read?</li>
              <li>Is it ATS-friendly?</li>
              <li>Does it highlight my strengths?</li>
            </ul>
            <p>If the answer is yes to all three, you're good to go.</p>

            <h2 className="text-2xl md:text-3xl font-bold mt-12">Common Mistakes Freshers Make</h2>
            <ul className="space-y-1">
              <li>Choosing design over content</li>
              <li>Using complicated layouts</li>
              <li>Not checking ATS compatibility</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-primary" /> How AI Can Help You Choose Templates
            </h2>
            <p>
              AI tools can suggest the best templates, format your resume automatically, and
              optimise the structure so it's recruiter- and ATS-friendly from the start.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-12">Final Thoughts</h2>
            <p>
              Your resume template plays a huge role in your job search success. Keep it
              simple, focus on clarity, and avoid unnecessary design.
            </p>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-8 my-12 text-center">
              <h3 className="text-2xl font-bold mb-3 mt-0">Ready to Create Your Resume?</h3>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Skip the template hunt. Use Resumly's AI-powered builder to generate a
                professional, ATS-friendly resume instantly.
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

export default BlogBestResumeTemplates;
