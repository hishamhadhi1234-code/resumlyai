import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, Lightbulb, Code, Users, Briefcase, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { setSEO } from "@/lib/seo";
import BlogCTA from "@/components/BlogCTA";
import BlogTOC from "@/components/BlogTOC";

const BlogResumeSkills2026 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    setSEO({
      title: "Resume Skills for Freshers in 2026: What to Add and Avoid | Resumly",
      description:
        "Learn which technical, soft, and industry-specific skills to put in your resume as a fresher in 2026 — plus common mistakes to avoid.",
      path: "/blog/resume-skills-freshers-2026-guide",
      type: "article",
      publishedTime: "2026-05-20",
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
            Resume Skills for Freshers in 2026: <span className="text-gradient">What to Add and Avoid</span>
          </h1>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-10 pb-8 border-b border-border">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" /> May 20, 2026
            </span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" /> 6 min read
            </span>
          </div>

          <article className="prose prose-lg max-w-none text-foreground/90 space-y-6 leading-relaxed">
            <BlogTOC />
            <p className="text-lg">
              When you are making a resume, you need to include the right skills. In 2026, resume
              skills are very important for freshers. You should know what skills to put in your
              resume, because the people who hire want to see them clearly.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 flex items-center gap-2">
              <Lightbulb className="w-6 h-6 text-primary" /> Why Skills Matter More Than Experience for Freshers
            </h2>
            <p>
              For people who are just starting out, skills often matter more than experience. When you
              do not have years of work history, your skills show what you can do. They help recruiters
              understand your potential and fit for the job.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 flex items-center gap-2">
              <Code className="w-6 h-6 text-primary" /> Technical Skills to Add in Your Resume
            </h2>
            <p>
              Technical skills are tools and technologies you can use. These make your resume stronger,
              especially for IT, analytics, and digital roles.
            </p>
            <ul className="space-y-1">
              <li>Excel</li>
              <li>Python</li>
              <li>SQL</li>
              <li>Java</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Canva</li>
              <li>Power BI</li>
              <li>Tableau</li>
              <li>Google Workspace</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 flex items-center gap-2">
              <Users className="w-6 h-6 text-primary" /> Soft Skills That Make Your Resume Stand Out
            </h2>
            <p>
              Soft skills show how you work with others and handle tasks. Many recruiters value these
              just as much as technical skills.
            </p>
            <ul className="space-y-1">
              <li>Communication</li>
              <li>Teamwork</li>
              <li>Leadership</li>
              <li>Time management</li>
              <li>Problem solving</li>
              <li>Critical thinking</li>
              <li>Adaptability</li>
              <li>Creativity</li>
            </ul>

            <BlogCTA
              variant="inline"
              title="Add these skills to your resume in one click"
              description="Resumly's AI matches skills to your target job automatically."
              buttonText="Try Free"
            />


            <h2 className="text-2xl md:text-3xl font-bold mt-12 flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-primary" /> Industry-Specific Skills
            </h2>
            <p>
              Some skills are more useful in certain industries. Choose the ones that match the job
              you are applying for.
            </p>
            <ul className="space-y-1">
              <li>IT skills</li>
              <li>Marketing skills</li>
              <li>Finance skills</li>
              <li>HR skills</li>
              <li>Sales skills</li>
              <li>Design skills</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-primary" /> How to Add Skills to Your Resume
            </h2>
            <p>
              When you add skills to your resume, make sure they are real and relevant. Do not list
              skills just to fill space. Be ready to explain or show evidence if asked in an interview.
            </p>
            <ol className="space-y-3">
              <li>
                <strong>Read the job description</strong> and match the skills mentioned there.
              </li>
              <li>
                <strong>Put your strongest skills first</strong> in a dedicated skills section.
              </li>
              <li>
                <strong>Back them up</strong> with projects, certifications, or internships where possible.
              </li>
              <li>
                <strong>Keep it honest</strong> — do not add skills you cannot explain.
              </li>
            </ol>

            <h2 className="text-2xl md:text-3xl font-bold mt-12">Skills to Avoid in Your Resume</h2>
            <p>
              There are some skills you should avoid. These are skills that are outdated, too general,
              or not relevant to the job. You should not put skills in your resume without evidence.
            </p>
            <ul className="space-y-1">
              <li>Overused buzzwords like "hardworking" without examples</li>
              <li>Outdated technologies not used anymore</li>
              <li>Generic skills that do not add value</li>
              <li>Skills you cannot explain or demonstrate</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-primary" /> Final Thoughts
            </h2>
            <p>
              In the end, having the right skills makes you more employable. Developing resume skills is
              very important for Indian freshers in 2026. Resume skills can make a big difference in your
              job search, so take time to choose them carefully and keep improving them.
            </p>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-8 my-12 text-center">
              <h3 className="text-2xl font-bold mb-3 mt-0">Build a Skills-First Resume</h3>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Use Resumly's AI-powered resume builder to highlight the right skills, add projects, and
                create a resume that impresses recruiters.
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

export default BlogResumeSkills2026;
