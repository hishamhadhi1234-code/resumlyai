import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, CheckCircle, Sparkles, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { setSEO } from "@/lib/seo";
import BlogCTA from "@/components/BlogCTA";

const BlogBestSkills = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    setSEO({
      title: "Best Skills to Add in Resume for Freshers in India (2026) | Resumly",
      description:
        "The best technical and soft skills to add to your resume as a fresher in India. Learn what recruiters look for and how to pick the right skills.",
      path: "/blog/best-skills-resume-freshers-india",
      type: "article",
      publishedTime: "2026-04-23",
    });
  }, []);

  const technicalSkills = ["MS Excel", "Python", "Digital Marketing", "Data Analysis"];
  const softSkills = ["Communication", "Problem-Solving", "Time Management"];

  const tips = [
    "Match the skills with the job description.",
    "Focus on skills that are relevant to the role.",
    "Avoid adding skills that are not related to the job.",
    "Add skills that you are genuinely good at — be honest.",
    "Stick to 6–10 strong skills instead of listing everything you know.",
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
            Best Skills to Add in Resume for{" "}
            <span className="text-gradient">Freshers in India</span>
          </h1>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-10 pb-8 border-b border-border">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" /> Apr 23, 2026
            </span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" /> 4 min read
            </span>
          </div>

          <article className="prose prose-lg max-w-none text-foreground/90 space-y-6 leading-relaxed">
            <p className="text-lg">
              When it comes to making a resume, freshers often wonder what skills they
              should include. The skills section is one of the most important parts of
              your resume — it can make your application stand out, or get it ignored.
            </p>

            <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg my-8">
              <p className="font-semibold text-lg mb-2">Why Skills Matter</p>
              <p className="m-0">
                Recruiters and ATS software both scan your resume for specific skills.
                The right ones get you shortlisted; the wrong ones get you filtered out.
              </p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">
              Top Technical Skills Companies Want
            </h2>
            <p>
              Here are the top technical skills companies in India are actively looking
              for in freshers right now:
            </p>

            <div className="not-prose grid sm:grid-cols-2 gap-3 my-6">
              {technicalSkills.map((s) => (
                <div
                  key={s}
                  className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span className="font-medium">{s}</span>
                </div>
              ))}
            </div>

            <BlogCTA
              variant="inline"
              title="Not sure which skills to list?"
              description="Resumly's AI picks the right skills for your target role."
              buttonText="Try Free"
            />


            <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4">
              Top Soft Skills for Freshers
            </h2>
            <p>
              Technical skills get you noticed, but soft skills get you hired. These are
              the ones recruiters value most:
            </p>

            <div className="not-prose grid sm:grid-cols-3 gap-3 my-6">
              {softSkills.map((s) => (
                <div
                  key={s}
                  className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <span className="font-medium">{s}</span>
                </div>
              ))}
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4">
              How to Choose the Right Skills
            </h2>
            <p>
              You shouldn't dump every skill you've ever touched into your resume.
              Here's how to pick the ones that actually move the needle:
            </p>

            <div className="bg-muted rounded-xl p-6 my-6">
              <ul className="space-y-3 m-0">
                {tips.map((tip) => (
                  <li key={tip} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg my-10">
              <h3 className="text-xl font-bold mb-3 mt-0">💡 Quick Rule</h3>
              <p className="m-0">
                Add around <strong>6 to 10 strong skills</strong> to your resume — not
                every single thing you've ever learned. Quality always beats quantity.
              </p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4">Final Thoughts</h2>
            <p>
              Your skills section is small, but it carries huge weight. Be specific, be
              honest, and tailor it to every job you apply to. Done right, it's the
              fastest way to stand out from hundreds of other freshers.
            </p>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-8 my-12 text-center">
              <h3 className="text-2xl font-bold mb-3 mt-0">
                Not Sure Which Skills to Add?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Resumly's AI suggests the perfect skills for your target role and
                matches them to the job description automatically.
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

export default BlogBestSkills;
