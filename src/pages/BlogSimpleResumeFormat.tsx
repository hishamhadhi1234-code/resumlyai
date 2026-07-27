import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, CheckCircle, Download, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { setSEO } from "@/lib/seo";
import BlogTOC from "@/components/BlogTOC";

const BlogSimpleResumeFormat = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    setSEO({
      title: "Simple Resume Format for Freshers in India (Free Template) | Resumly",
      description:
        "The best simple, ATS-friendly resume format for freshers in India. Download a free DOCX/PDF template and learn the ideal one-page structure.",
      path: "/blog/simple-resume-format-freshers-india",
      type: "article",
      publishedTime: "2026-04-23",
    });
  }, []);

  const sections = [
    "Contact Information",
    "Resume Summary",
    "Skills",
    "Projects",
    "Education",
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
            Resume Tips
          </span>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Simple Resume Format for{" "}
            <span className="text-gradient">Freshers in India</span>
          </h1>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-10 pb-8 border-b border-border">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" /> Apr 23, 2026
            </span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" /> 5 min read
            </span>
          </div>

          <article className="prose prose-lg max-w-none text-foreground/90 space-y-6 leading-relaxed">
            <BlogTOC />
            <p className="text-lg">
              Simple Resume Format for Freshers in India is a thing to know about.
              When you are making your resume, it can be really confusing — especially
              when you do not know what format to follow.
            </p>

            <p>
              The good thing is that you do not need anything fancy. The best simple
              resume format for freshers in India is simple and easy to read.
            </p>

            <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg my-8">
              <p className="font-semibold text-lg mb-2">Why Simple Works Best</p>
              <p className="m-0">
                Recruiters in India do not spend a lot of time on each resume.
                If your resume is cluttered or overdesigned, it may get rejected quickly.
              </p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">
              Why a Simple Format Works
            </h2>
            <p>A simple resume format works well because it helps with a few things:</p>
            <ul className="space-y-2">
              <li>It makes your resume easy to read.</li>
              <li>
                It helps your resume pass the computer systems (ATS) that recruiters use.
              </li>
              <li>It helps highlight the important information clearly.</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4">
              The Ideal Structure
            </h2>
            <p>
              The ideal structure for your simple resume format should include the
              following sections:
            </p>

            <div className="grid sm:grid-cols-2 gap-3 not-prose my-6">
              {sections.map((s, i) => (
                <div
                  key={s}
                  className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </div>
                  <span className="font-medium">{s}</span>
                </div>
              ))}
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4">
              Free Template — Download Now
            </h2>
            <p>
              Grab the ready-to-use simple resume template below. Open it in Word or
              Google Docs, fill in your details, and you're set. The PDF version is
              perfect for previewing the layout before you customize.
            </p>

            <div className="not-prose grid sm:grid-cols-2 gap-3 my-6">
              <a
                href="/templates/simple-resume-format-freshers-india.docx"
                download
                className="group flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/50 hover:bg-primary/5 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm">Download DOCX</div>
                  <div className="text-xs text-muted-foreground">Editable in Word / Google Docs</div>
                </div>
                <Download className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>

              <a
                href="/templates/simple-resume-format-freshers-india.pdf"
                download
                className="group flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/50 hover:bg-primary/5 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm">Download PDF</div>
                  <div className="text-xs text-muted-foreground">Preview the layout</div>
                </div>
                <Download className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>

            <p className="text-sm text-muted-foreground">
              Tip: avoid colors, images, and fancy fonts when you customize — the template
              is already ATS-friendly out of the box.
            </p>

            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg my-10">
              <h3 className="text-xl font-bold mb-3 mt-0">💡 Final Tip</h3>
              <p className="m-0">
                Keep your resume short and clear. Stick to <strong>one page</strong>.
                Focus on making it clear and easy to read rather than trying to be too
                creative.
              </p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4">Quick Recap</h2>
            <div className="bg-muted rounded-xl p-6 my-6">
              <ul className="space-y-2 m-0">
                {[
                  "Stick to a clean, one-page layout",
                  "Use clear section headings",
                  "Use bullet points, no fancy fonts",
                  "Avoid colors, images, and graphics",
                  "Make it ATS-friendly",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-8 my-12 text-center">
              <h3 className="text-2xl font-bold mb-3 mt-0">
                Build a Simple, ATS-Friendly Resume in Minutes
              </h3>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Skip the formatting headaches. Let our AI generate a clean, recruiter-ready
                resume tailored for freshers in India.
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

export default BlogSimpleResumeFormat;
