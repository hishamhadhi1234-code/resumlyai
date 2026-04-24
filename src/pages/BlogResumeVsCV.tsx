import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, FileText, BookOpen, CheckCircle2, XCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { setSEO } from "@/lib/seo";

const BlogResumeVsCV = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    setSEO({
      title: "Resume vs CV in India – What Freshers Must Know (2026) | Resumly",
      description:
        "Confused between a resume and a CV? Learn the key differences, when to use each, and which one freshers in India should send to recruiters.",
      path: "/blog/resume-vs-cv-india-freshers",
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
            Resume vs CV in India –{" "}
            <span className="text-gradient">What Freshers Must Know</span>
          </h1>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-10 pb-8 border-b border-border">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" /> Apr 24, 2026
            </span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" /> 6 min read
            </span>
          </div>

          <article className="prose prose-lg max-w-none text-foreground/90 space-y-6 leading-relaxed">
            <p className="text-lg">
              If you're a fresher in India stepping into the job market, you've probably
              come across two terms that sound similar but aren't the same:{" "}
              <strong>resume</strong> and <strong>CV</strong>. Using the wrong one can
              quietly cost you interviews. Here's the simple, practical guide.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 flex items-center gap-2">
              <FileText className="w-6 h-6 text-primary" /> What Is a Resume?
            </h2>
            <p>
              A resume is a short, focused document that highlights your skills,
              education, and most relevant experience for a specific role.
            </p>
            <ul className="space-y-1">
              <li>Usually <strong>1 page</strong> (max 2 pages)</li>
              <li>Focused on a specific job role</li>
              <li>Customised for each application</li>
              <li>Includes only relevant information</li>
            </ul>
            <p>
              In India, resumes are the most common document used to apply for{" "}
              <strong>private sector jobs</strong>.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-primary" /> What Is a CV?
            </h2>
            <p>
              CV stands for <em>Curriculum Vitae</em> — Latin for "course of life." It's
              a detailed document covering your full academic and professional history.
            </p>
            <ul className="space-y-1">
              <li>Can be <strong>2–5 pages</strong> or more</li>
              <li>Includes detailed information</li>
              <li>Used mainly for academic, research, or government roles</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mt-12">Resume vs CV: Key Differences</h2>
            <div className="overflow-x-auto rounded-xl border border-border my-6">
              <table className="w-full text-sm">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-3 font-semibold">Feature</th>
                    <th className="text-left p-3 font-semibold">Resume</th>
                    <th className="text-left p-3 font-semibold">CV</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="p-3 font-medium">Length</td>
                    <td className="p-3">1 page</td>
                    <td className="p-3">Multiple pages</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Focus</td>
                    <td className="p-3">Skills + job-specific</td>
                    <td className="p-3">Full career history</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Usage</td>
                    <td className="p-3">Private jobs</td>
                    <td className="p-3">Academic / government roles</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Customisation</td>
                    <td className="p-3">Required for each job</td>
                    <td className="p-3">Mostly static</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mt-12">
              Which One Should Freshers Use in India?
            </h2>
            <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg my-6">
              <p className="m-0 text-lg">
                👉 For most freshers in India, the answer is simple:{" "}
                <strong>Use a Resume.</strong>
              </p>
            </div>
            <p>Why?</p>
            <ul className="space-y-1">
              <li>Companies prefer short, relevant profiles</li>
              <li>Recruiters don't have time to read long documents</li>
              <li>ATS systems work better with resumes</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mt-12">When Should You Use a CV?</h2>
            <p>You should use a CV if you're applying for:</p>
            <ul className="space-y-1">
              <li>Academic positions</li>
              <li>Research roles</li>
              <li>Scholarships</li>
              <li>Government exams</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mt-12">
              Why Using the Wrong Format Can Hurt You
            </h2>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="p-5 rounded-xl border border-destructive/30 bg-destructive/5">
                <h3 className="font-bold mt-0 mb-3 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-destructive" /> CV for a private job
                </h3>
                <ul className="m-0 space-y-1 text-sm">
                  <li>Looks too long</li>
                  <li>Recruiters often skip it</li>
                  <li>ATS may not parse it properly</li>
                </ul>
              </div>
              <div className="p-5 rounded-xl border border-primary/30 bg-primary/5">
                <h3 className="font-bold mt-0 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" /> Resume for a private job
                </h3>
                <ul className="m-0 space-y-1 text-sm">
                  <li>Short and impactful</li>
                  <li>Easy for recruiters to scan</li>
                  <li>ATS-friendly by default</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mt-12">Best Resume Format for Freshers</h2>
            <p>If you're a fresher, your resume should include:</p>
            <ol className="space-y-2">
              <li>
                <strong>Contact Information</strong> — name, phone number, email
              </li>
              <li>
                <strong>Resume Summary</strong> — a short 2–3 line introduction about you
              </li>
              <li>
                <strong>Skills</strong> — focus on the ones relevant to the role
              </li>
              <li>
                <strong>Projects</strong> — very important if you have no work experience
              </li>
              <li>
                <strong>Education</strong> — your degree and college details
              </li>
            </ol>

            <h2 className="text-2xl md:text-3xl font-bold mt-12">Common Mistakes Freshers Make</h2>
            <ul className="space-y-1">
              <li>❌ Using a CV instead of a resume</li>
              <li>❌ Adding too much unnecessary information</li>
              <li>❌ Sending the same resume for every job</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mt-12">
              How to Choose the Right Format Easily
            </h2>
            <p>Just ask yourself:</p>
            <ul className="space-y-1">
              <li>Am I applying for a <strong>company job</strong>? → Use a Resume</li>
              <li>Am I applying for an <strong>academic / research role</strong>? → Use a CV</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mt-12">How AI Tools Can Help</h2>
            <p>Picking the right format manually can be confusing. AI tools can:</p>
            <ul className="space-y-1">
              <li>Suggest the correct format for your target role</li>
              <li>Optimise your content for impact</li>
              <li>Make your resume ATS-friendly automatically</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mt-12">Final Thoughts</h2>
            <p>
              For freshers in India, choosing between a resume and a CV is simple once
              you understand the difference.
            </p>
            <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg my-6">
              <p className="m-0">
                👉 Use a <strong>resume</strong> for most jobs.<br />
                👉 Use a <strong>CV</strong> only for academic or research roles.
              </p>
            </div>
            <p>
              Keep your resume short, relevant, and well-structured — and your shortlisting
              rate will go up almost immediately.
            </p>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-8 my-12 text-center">
              <h3 className="text-2xl font-bold mb-3 mt-0">Ready to Create Your Resume?</h3>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Skip the formatting struggle. Use Resumly's AI resume builder to create a
                professional, ATS-friendly resume in minutes.
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

export default BlogResumeVsCV;
