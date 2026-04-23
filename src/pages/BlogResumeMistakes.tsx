import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, CheckCircle, XCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { setSEO } from "@/lib/seo";

const BlogResumeMistakes = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    setSEO({
      title: "Top 10 Resume Mistakes Freshers Make in India (And How to Fix Them) | Resumly",
      description:
        "Top 10 resume mistakes freshers make in India and how to fix them. Learn how to create an ATS-friendly resume that gets you hired.",
      path: "/blog/top-10-resume-mistakes-freshers-india",
      type: "article",
      publishedTime: "2026-04-21",
    });
  }, []);

  const mistakes = [
    {
      title: "Using a Generic Resume for Every Job",
      problem: "Recruiters can easily tell when your resume is generic. It shows lack of effort and interest.",
      solution: "Customize your resume for each job. Use keywords from the job description, highlight relevant skills, and adjust your objective or summary. Even small tweaks can increase your chances significantly.",
    },
    {
      title: "Writing a Weak Career Objective",
      problem: "Boring objectives like 'To work in a challenging environment where I can grow…' say nothing specific. Recruiters see this line hundreds of times.",
      solution: "Make it specific and results-driven. Mention your skills, the role, and what you bring. Example: 'Motivated Computer Science graduate skilled in Python and data analysis, seeking an entry-level role to build scalable solutions.'",
    },
    {
      title: "Adding Too Much Unnecessary Information",
      problem: "Full home address, parents' names, hobbies like 'watching movies' — it wastes space and looks outdated.",
      solution: "Keep it clean: Name, phone number, email, LinkedIn/GitHub (if relevant). That's enough.",
    },
    {
      title: "Poor Formatting and Design",
      problem: "Too many fonts, no alignment, long paragraphs, no spacing. A messy resume is an instant rejection.",
      solution: "Use a clean, modern template. Use bullet points, keep consistent fonts (like Arial or Inter), and use proper spacing. Simple > Fancy.",
    },
    {
      title: "Not Highlighting Skills Properly",
      problem: "Many freshers either don't include skills or dump random skills without relevance. Recruiters search resumes based on skills.",
      solution: "Create a clear Skills section: Technical skills (Python, Excel, Java), Tools (Canva, Tableau, VS Code), Soft skills (Communication, teamwork). Make sure they match the job role.",
    },
    {
      title: "No Projects or Practical Experience",
      problem: "Saying 'I don't have experience' is a mistake. Recruiters want proof of your skills.",
      solution: "Include college projects, personal projects, internships (even unpaid), and freelance work. Example: 'Built a resume builder web app using React and Firebase.' That's powerful.",
    },
    {
      title: "Spelling and Grammar Mistakes",
      problem: "Even one mistake can cost you the job. It shows lack of attention to detail.",
      solution: "Use tools like Grammarly, read your resume 2-3 times, and ask a friend to review it.",
    },
    {
      title: "Making the Resume Too Long",
      problem: "More pages ≠ more impressive. Recruiters don't have time to read long resumes.",
      solution: "Keep it to 1 page. Only include relevant information and be concise. Quality > Quantity.",
    },
    {
      title: "Using an Unprofessional Email ID",
      problem: "Emails like coolboy123@gmail.com or swagking007@gmail.com create a bad first impression.",
      solution: "Use a simple format: yourname@gmail.com or firstname.lastname@gmail.com. Professional = Trustworthy.",
    },
    {
      title: "Not Optimizing for ATS",
      problem: "Many companies in India use ATS to filter resumes. If your resume isn't ATS-friendly, it may never reach a human.",
      solution: "Use standard headings (Education, Skills, Experience), avoid images and graphics, use keywords from job descriptions, and save as PDF or DOCX.",
    },
  ];

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
            Top 10 Resume Mistakes Freshers Make in India{" "}
            <span className="text-gradient">(And How to Fix Them)</span>
          </h1>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-10 pb-8 border-b border-border">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" /> Apr 21, 2026
            </span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" /> 8 min read
            </span>
          </div>

          <article className="prose prose-lg max-w-none text-foreground/90 space-y-8 leading-relaxed">
            <p className="text-lg leading-relaxed">
              If you're a fresher in India trying to land your first job, your resume is your biggest weapon. 
              But here's the harsh truth: most freshers unknowingly make mistakes that instantly get their resumes rejected.
            </p>

            <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg my-8">
              <p className="font-semibold text-lg mb-2">The Reality Check</p>
              <p className="m-0">
                Recruiters spend less than <strong>10 seconds</strong> scanning a resume. 
                That means even small errors can cost you big opportunities.
              </p>
            </div>

            <p>
              Let's break down the top 10 resume mistakes freshers make in India — and more importantly, 
              how you can fix them.
            </p>

            {mistakes.map((mistake, index) => (
              <div key={index} className="mt-12">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-destructive/10 text-destructive flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mt-0 pt-1">
                    {mistake.title}
                  </h2>
                </div>

                <div className="pl-14 space-y-4">
                  <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <XCircle className="w-5 h-5 text-destructive" />
                      <span className="font-semibold text-destructive">Why it's a problem:</span>
                    </div>
                    <p className="m-0">{mistake.problem}</p>
                  </div>

                  <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="font-semibold text-green-600">How to fix it:</span>
                    </div>
                    <p className="m-0">{mistake.solution}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg my-12">
              <h3 className="text-xl font-bold mb-3 mt-0">💡 Bonus Tip: No LinkedIn or Portfolio</h3>
              <p className="m-0">
                In today's digital world, a resume alone is not enough. Add:
              </p>
              <ul className="mt-2 space-y-1">
                <li>LinkedIn profile</li>
                <li>GitHub (for tech roles)</li>
                <li>Portfolio (for designers, writers)</li>
              </ul>
              <p className="mt-3 mb-0 font-medium">
                This builds credibility instantly.
              </p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4">
              Final Thoughts
            </h2>
            <p>
              Creating a strong resume as a fresher in India is not about having years of experience. 
              It's about presenting your skills in the right way.
            </p>
            <p className="font-medium">
              Avoid these common mistakes, and you'll already be ahead of 80% of candidates.
            </p>

            <div className="bg-muted rounded-xl p-6 my-8">
              <h3 className="text-lg font-bold mb-4 mt-0">Quick Recap:</h3>
              <ul className="space-y-2 m-0">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  Customize your resume
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  Keep it clean and simple
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  Focus on skills and projects
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  Make it ATS-friendly
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  Proofread everything
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-8 my-12 text-center">
              <h3 className="text-2xl font-bold mb-3 mt-0">
                Want an Easy Way to Build a Perfect Resume?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                If you don't want to worry about formatting, keywords, or structure, 
                you can use an AI-powered resume builder to do it for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/builder"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Build My Resume Now
                </Link>
              </div>
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

export default BlogResumeMistakes;
