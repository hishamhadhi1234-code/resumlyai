import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, FileText, BookOpen, ListChecks, HelpCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { setSEO } from "@/lib/seo";
import BlogTOC from "@/components/BlogTOC";

const BlogResumeVsCVDifference = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    setSEO({
      title: "Resume vs CV: What's the Difference? A Guide for Indian Job Seekers | Resumly",
      description:
        "Confused between a resume and a CV? Learn the key differences, when to use each, and what Indian companies prefer in 2026.",
      path: "/blog/resume-vs-cv-difference-indian-job-seekers",
      type: "article",
      publishedTime: "2026-05-21",
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
            Career Advice
          </span>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Resume vs CV: What's the Difference? <span className="text-gradient">A Guide for Indian Job Seekers</span>
          </h1>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-10 pb-8 border-b border-border">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" /> May 21, 2026
            </span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" /> 5 min read
            </span>
          </div>

          <article className="prose prose-lg max-w-none text-foreground/90 space-y-6 leading-relaxed">
            <BlogTOC />
            <p className="text-lg">
              Many people get confused between a resume and a CV. They think they are the same thing,
              but they are not. Knowing the difference can help you choose the right document when
              applying for jobs in India.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 flex items-center gap-2">
              <FileText className="w-6 h-6 text-primary" /> What Is a Resume?
            </h2>
            <p>
              A resume is a document that highlights your skills and experience. It is usually one or
              two pages long. You use a resume to apply for jobs in companies. A good resume focuses on
              the most relevant information for the job you want.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-primary" /> What Is a CV?
            </h2>
            <p>
              A curriculum vitae, or CV, is a longer document that lists all your education, work
              experience, and skills. It is commonly used in research, academic, and higher education
              settings. A CV does not have a strict page limit and includes a complete record of your
              career.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 flex items-center gap-2">
              <ListChecks className="w-6 h-6 text-primary" /> Resume vs CV: Key Differences
            </h2>
            <p>Here are the main differences between a resume and a CV:</p>
            <ul className="space-y-2">
              <li>
                <strong>Length:</strong> A resume is usually one or two pages. A CV can be five or six
                pages, or even longer.
              </li>
              <li>
                <strong>Purpose:</strong> A resume is used to apply for jobs in companies. A CV is used
                for academic, research, and higher education roles.
              </li>
              <li>
                <strong>Content:</strong> A resume includes relevant skills and experience only. A CV
                includes all your education, work experience, and achievements.
              </li>
              <li>
                <strong>Customisation:</strong> A resume is tailored for each job. A CV stays mostly
                the same and grows over time.
              </li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mt-12">
              Which One Do Indian Companies Prefer?
            </h2>
            <p>
              Private companies in India usually expect a resume. It is short, focused, and easy for
              recruiters to scan. Universities and research institutions may request a CV instead,
              especially for academic or research positions.
            </p>
            <p>
              If you are applying for jobs in IT, marketing, finance, sales, or HR, send a resume. If
              you are applying for a teaching, research, or PhD position, a CV may be more appropriate.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-12">Common Mistakes</h2>
            <p>People often make these mistakes when choosing between a resume and a CV:</p>
            <ul className="space-y-1">
              <li>Sending a CV when the employer asked for a resume</li>
              <li>Using a format that is too long or too short for the role</li>
              <li>Including irrelevant details that do not help the application</li>
              <li>Not tailoring the document for the specific job or institution</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-primary" /> Frequently Asked Questions
            </h2>

            <h3 className="text-xl font-bold mt-8">Is a one-page resume enough?</h3>
            <p>
              It depends on your experience. If you have a lot of experience, you may need two pages.
              For freshers and early-career professionals, one page is usually enough.
            </p>

            <h3 className="text-xl font-bold mt-8">Can freshers use a CV?</h3>
            <p>
              No, freshers should usually use a resume. A CV is meant for people with extensive academic
              or research experience. A one-page resume is the right choice for most freshers in India.
            </p>

            <h3 className="text-xl font-bold mt-8">Should I include hobbies?</h3>
            <p>
              Only include hobbies if they are relevant to the job. For example, mentioning blogging
              can help for a content writing role, but it may not add value for a finance job.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-12">Conclusion</h2>
            <p>
              Choose the right document based on your career goals. If you want to work in a company,
              use a resume. If you want to work in an academic or research setting, use a CV. Using the
              correct document shows professionalism and increases your chances of getting shortlisted.
            </p>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-8 my-12 text-center">
              <h3 className="text-2xl font-bold mb-3 mt-0">Create a Professional Resume</h3>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Not sure where to start? Build a clean, ATS-friendly resume with Resumly in minutes and
                apply to Indian companies with confidence.
              </p>
              <Link
                to="/builder"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                <Sparkles className="w-4 h-4" /> Build My Resume Now
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

export default BlogResumeVsCVDifference;
