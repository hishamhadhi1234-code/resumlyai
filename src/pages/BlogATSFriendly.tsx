import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";

const BlogATSFriendly = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "How to Create an ATS-Friendly Resume in 2026 | Resumly";
    const meta = document.querySelector('meta[name="description"]');
    const content =
      "Learn how to create an ATS-friendly resume that passes applicant tracking systems and gets you interviews. Step-by-step guide for 2026.";
    if (meta) meta.setAttribute("content", content);
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = content;
      document.head.appendChild(m);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
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
            How to Create an ATS-Friendly Resume in 2026{" "}
            <span className="text-gradient">(Step-by-Step Guide)</span>
          </h1>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-10 pb-8 border-b border-border">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" /> Apr 19, 2026
            </span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" /> 7 min read
            </span>
          </div>

          <article className="prose prose-lg max-w-none text-foreground/90 space-y-5 leading-relaxed">
            <p>
              If you've ever applied for a job and never heard back, your resume might
              be the reason—not because you're not qualified, but because your resume
              never reached a human.
            </p>
            <p>Welcome to the world of ATS.</p>
            <p>
              An <strong>Applicant Tracking System (ATS)</strong> is software used by
              companies to filter resumes before recruiters even see them. In 2026, over{" "}
              <strong>90% of companies</strong> use ATS to shortlist candidates.
            </p>
            <p>
              That means if your resume isn't ATS-friendly, it's likely getting
              rejected automatically.
            </p>
            <p>
              The good news? <strong>You can fix this.</strong>
            </p>
            <p>
              In this guide, you'll learn exactly how to create an ATS-friendly resume
              that gets noticed—and gets you interviews.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4">
              What Is an ATS-Friendly Resume?
            </h2>
            <p>
              An ATS-friendly resume is a resume designed in a way that software can
              easily read, scan, and understand.
            </p>
            <p>ATS systems look for:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Relevant keywords</li>
              <li>Proper formatting</li>
              <li>Clear structure</li>
            </ul>
            <p>
              If your resume has fancy designs, images, or unusual fonts, the system
              may fail to read it correctly.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4">
              Why ATS-Friendly Resumes Matter in 2026
            </h2>
            <p>The hiring process has changed.</p>
            <p>
              Recruiters no longer read every resume manually. Instead, ATS software
              filters applications based on job requirements.
            </p>
            <p>Here's what happens:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>You apply for a job</li>
              <li>ATS scans your resume</li>
              <li>It ranks your resume based on keywords</li>
              <li>Only top resumes go to recruiters</li>
            </ol>
            <p>If your resume isn't optimized, it won't pass step 2.</p>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4">
              Step-by-Step Guide to Create an ATS-Friendly Resume
            </h2>

            <h3 className="text-xl font-semibold mt-8 mb-3">
              1. Use a Simple and Clean Format
            </h3>
            <p>
              <strong>Avoid:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Tables</li>
              <li>Text boxes</li>
              <li>Images</li>
              <li>Graphics</li>
            </ul>
            <p>
              <strong>Use:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Standard fonts (Arial, Calibri)</li>
              <li>Black text on white background</li>
              <li>Clear headings</li>
            </ul>
            <p>ATS systems prefer simplicity over design.</p>

            <h3 className="text-xl font-semibold mt-8 mb-3">2. Use the Right Keywords</h3>
            <p>Keywords are the most important part of your resume.</p>
            <p>Look at the job description and identify:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Skills</li>
              <li>Tools</li>
              <li>Job titles</li>
            </ul>
            <p>
              For example: If the job requires "Python" and "Data Analysis," include
              those exact words in your resume.
            </p>
            <p className="font-medium">
              👉 Tip: Don't overstuff keywords—use them naturally.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-3">
              3. Use Standard Section Headings
            </h3>
            <p>ATS systems recognize common headings like:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Work Experience</li>
              <li>Education</li>
              <li>Skills</li>
              <li>Projects</li>
            </ul>
            <p>
              <strong>Avoid creative headings like:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>"My Journey"</li>
              <li>"What I've Done"</li>
            </ul>
            <p>Stick to standard terms.</p>

            <h3 className="text-xl font-semibold mt-8 mb-3">
              4. Write a Strong Resume Summary
            </h3>
            <p>Your summary should:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Be 2–3 lines</li>
              <li>Include your main skills</li>
              <li>Match the job role</li>
            </ul>
            <p>
              <strong>Example:</strong>
            </p>
            <p className="italic">
              "Detail-oriented computer science graduate with strong skills in Python,
              data analysis, and machine learning."
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-3">
              5. Focus on Achievements (Not Just Duties)
            </h3>
            <p>
              Instead of writing: <em>"Responsible for managing social media"</em>
            </p>
            <p>
              Write: <strong>"Increased social media engagement by 40% in 3 months"</strong>
            </p>
            <p>Numbers make your resume stronger and more attractive.</p>

            <h3 className="text-xl font-semibold mt-8 mb-3">6. Use Bullet Points</h3>
            <p>Avoid long paragraphs.</p>
            <p>
              <strong>Use:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Short bullet points</li>
              <li>Clear statements</li>
            </ul>
            <p>This improves readability for both ATS and recruiters.</p>

            <h3 className="text-xl font-semibold mt-8 mb-3">
              7. Save in the Right Format
            </h3>
            <p>
              <strong>Best formats:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>PDF (preferred)</li>
              <li>DOCX</li>
            </ul>
            <p>
              <strong>Avoid:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Image files</li>
              <li>Unusual formats</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4">
              Common Mistakes to Avoid
            </h2>
            <ul className="space-y-4">
              <li>
                <strong>❌ Using Fancy Templates</strong>
                <p>Many stylish templates are not ATS-friendly.</p>
              </li>
              <li>
                <strong>❌ Missing Keywords</strong>
                <p>Even a great resume can fail without the right keywords.</p>
              </li>
              <li>
                <strong>❌ Overdesigning</strong>
                <p>ATS doesn't care about colors or graphics.</p>
              </li>
              <li>
                <strong>❌ Spelling Errors</strong>
                <p>Even small mistakes can reduce your chances.</p>
              </li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4">
              Best Resume Format for Freshers (2026)
            </h2>
            <p>If you're a student or fresher, use this structure:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Name & Contact Info</li>
              <li>Resume Summary</li>
              <li>Skills</li>
              <li>Projects</li>
              <li>Education</li>
              <li>Certifications (optional)</li>
            </ol>
            <p>
              <strong>Focus more on:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Skills</li>
              <li>Projects</li>
            </ul>
            <p>Since you may not have work experience yet.</p>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4">
              How AI Can Help You Build a Better Resume
            </h2>
            <p>Creating an ATS-friendly resume manually can be time-consuming.</p>
            <p>This is where AI tools come in.</p>
            <p>
              <strong>AI can:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Suggest keywords</li>
              <li>Improve content</li>
              <li>Format your resume correctly</li>
              <li>Optimize for ATS</li>
            </ul>
            <p>
              Instead of guessing what works, AI helps you build a resume that matches
              job requirements.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4">
              Create Your ATS-Friendly Resume in Minutes
            </h2>
            <p>
              If you want a faster and smarter way, you can use an AI-powered resume
              builder.
            </p>
            <p>
              👉 With Resumly, you can:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Generate ATS-friendly resumes instantly</li>
              <li>Get keyword-optimized content</li>
              <li>Choose clean, professional templates</li>
              <li>Save time and increase your chances of getting hired</li>
            </ul>
            <p>
              Whether you're a fresher or experienced professional, using AI can give
              you a strong advantage.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4">
              Final Thoughts
            </h2>
            <p>
              In 2026, creating a resume is no longer just about listing your
              qualifications—it's about optimizing for technology.
            </p>
            <p>An ATS-friendly resume ensures that:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Your resume gets seen</li>
              <li>You pass initial screening</li>
              <li>You increase your chances of interviews</li>
            </ul>
            <p>
              <strong>Remember:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Keep it simple</li>
              <li>Use the right keywords</li>
              <li>Focus on clarity</li>
            </ul>
            <p>
              And most importantly—<strong>don't leave it to chance.</strong>
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4">
              Ready to Get Started?
            </h2>
            <p>
              Start building your ATS-friendly resume today and improve your chances of
              landing your dream job.
            </p>
            <p className="text-lg font-semibold pt-4">
              👉 Try Resumly and create your professional resume in minutes.
            </p>
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

export default BlogATSFriendly;
