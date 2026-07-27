import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { setSEO } from "@/lib/seo";
import BlogTOC from "@/components/BlogTOC";

const InternalLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="inline-flex items-center gap-1 text-primary font-medium hover:underline"
  >
    {children} <ArrowRight className="w-3.5 h-3.5" />
  </Link>
);

const BlogUltimateGuide = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    setSEO({
      title: "Ultimate Guide to Resume for Freshers in India (2026) | Resumly",
      description:
        "The complete 2026 guide to building a job-winning, ATS-friendly resume for freshers in India — formats, skills, projects, ATS tips, and templates.",
      path: "/blog/ultimate-guide-resume-freshers-india-2026",
      type: "article",
      publishedTime: "2026-05-02",
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
            Ultimate Guide to Resume for{" "}
            <span className="text-gradient">Freshers in India (2026)</span>
          </h1>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-10 pb-8 border-b border-border">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" /> May 2, 2026
            </span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" /> 10 min read
            </span>
          </div>

          <article className="prose prose-lg max-w-none text-foreground/90 space-y-5 leading-relaxed">
            <BlogTOC />
            <p className="text-lg">
              Getting your first job in India is not easy — especially when every
              company asks for experience. But here's the truth:
            </p>
            <p className="font-semibold">Your resume matters more than your experience.</p>
            <p>
              In 2026, companies in India use ATS (Applicant Tracking Systems) to
              filter resumes before recruiters even see them. That means your resume
              must be optimized not just for humans — but for software too.
            </p>
            <p>
              This ultimate guide will teach you everything you need to know about
              creating a job-winning resume for freshers in India.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-3">What Is a Resume?</h2>
            <p>A resume is a short document that highlights your:</p>
            <ul>
              <li>Skills</li>
              <li>Education</li>
              <li>Projects</li>
              <li>Achievements</li>
            </ul>
            <p>It is your first impression in front of recruiters.</p>

            <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-3">
              Why Resume Matters in India (2026 Job Market)
            </h2>
            <p>In the Indian job market:</p>
            <ul>
              <li>Thousands apply for one job</li>
              <li>Recruiters spend 6–8 seconds per resume</li>
              <li>ATS filters most applications</li>
            </ul>
            <p>If your resume is not optimized, it won't even be seen.</p>

            <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-3">
              Step-by-Step: How to Create a Resume for Freshers in India
            </h2>

            <h3 className="text-xl font-semibold mt-6">1. Add Contact Information</h3>
            <ul>
              <li>Full name</li>
              <li>Phone number</li>
              <li>Professional email</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6">2. Write a Resume Summary</h3>
            <p>
              Example: <em>"Motivated graduate with strong communication and analytical
              skills, seeking entry-level opportunities in India."</em>
            </p>
            <p>
              <InternalLink to="/blog/best-skills-resume-freshers-india">
                Learn more: How to write a resume summary for freshers
              </InternalLink>
            </p>

            <h3 className="text-xl font-semibold mt-6">3. Add Skills Section</h3>
            <p>Include:</p>
            <ul>
              <li>Technical skills (Excel, Python)</li>
              <li>Soft skills (communication, teamwork)</li>
            </ul>
            <p>
              <InternalLink to="/blog/best-skills-resume-freshers-india">
                Read: Best skills to add in resume for freshers in India
              </InternalLink>
            </p>

            <h3 className="text-xl font-semibold mt-6">4. Add Projects (VERY IMPORTANT)</h3>
            <p>If you don't have experience, projects matter.</p>
            <p>Examples:</p>
            <ul>
              <li>Built a portfolio website</li>
              <li>Completed data analysis project</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6">5. Add Education</h3>
            <p>Mention:</p>
            <ul>
              <li>Degree</li>
              <li>College</li>
              <li>Year</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-3">
              Best Resume Format for Freshers in India
            </h2>
            <p>The best format is: Simple + Clean + ATS-friendly</p>
            <p>Structure:</p>
            <ul>
              <li>Contact info</li>
              <li>Summary</li>
              <li>Skills</li>
              <li>Projects</li>
              <li>Education</li>
            </ul>
            <p>
              <InternalLink to="/blog/simple-resume-format-freshers-india">
                Explore: Best resume format for freshers in India
              </InternalLink>
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-3">
              How to Pass ATS Resume Screening in India
            </h2>
            <p>Most companies use ATS to filter resumes. To pass:</p>
            <ul>
              <li>Use job keywords</li>
              <li>Avoid fancy templates</li>
              <li>Use standard headings</li>
            </ul>
            <p>
              <InternalLink to="/blog/pass-ats-resume-screening-india">
                Full guide: How to pass ATS resume screening in India
              </InternalLink>
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-3">Resume vs CV in India</h2>
            <ul>
              <li>Resume → Short, job-focused</li>
              <li>CV → Detailed, academic</li>
            </ul>
            <p>
              <InternalLink to="/blog/resume-vs-cv-india-freshers">
                Learn more: Resume vs CV in India
              </InternalLink>
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-3">
              Common Resume Mistakes Freshers Make
            </h2>
            <ul>
              <li>Using fancy templates ❌</li>
              <li>Missing keywords ❌</li>
              <li>Writing long paragraphs ❌</li>
              <li>Not adding projects ❌</li>
            </ul>
            <p>
              <InternalLink to="/blog/top-10-resume-mistakes-freshers-india">
                See full list: Top resume mistakes freshers make in India
              </InternalLink>
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-3">
              Best Resume Templates for Freshers
            </h2>
            <p>Choose templates that are:</p>
            <ul>
              <li>Simple</li>
              <li>Clean</li>
              <li>ATS-friendly</li>
            </ul>
            <p>
              <InternalLink to="/blog/best-resume-templates-freshers-india">
                Explore: Best resume templates for freshers in India
              </InternalLink>
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-3">
              How to Get a Job Without Experience in India
            </h2>
            <p>Focus on:</p>
            <ul>
              <li>Skills</li>
              <li>Projects</li>
              <li>Networking</li>
            </ul>
            <p>
              <InternalLink to="/blog/first-job-india-without-experience">
                Read: How to get your first job in India
              </InternalLink>
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-3">
              Resume Checklist Before You Apply
            </h2>
            <ul>
              <li>✔ No spelling errors</li>
              <li>✔ Proper format</li>
              <li>✔ Updated skills</li>
              <li>✔ Correct contact details</li>
            </ul>
            <p>
              <InternalLink to="/blog/simple-resume-format-freshers-india">
                Full checklist: Resume checklist for freshers in India
              </InternalLink>
            </p>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-8 my-12 text-center not-prose">
              <h3 className="text-2xl font-bold mb-3 mt-0">
                Build Your ATS-Friendly Resume in Minutes
              </h3>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Let our AI generate a recruiter-ready resume tailored for freshers in India.
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

export default BlogUltimateGuide;
