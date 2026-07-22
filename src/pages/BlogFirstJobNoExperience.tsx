import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, FileText, Send, GraduationCap, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { setSEO } from "@/lib/seo";
import BlogCTA from "@/components/BlogCTA";

const BlogFirstJobNoExperience = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    setSEO({
      title: "How to Get Your First Job in India Without Experience (2026 Guide) | Resumly",
      description:
        "A practical 4-step guide to landing your first job in India with no experience — from building a strong resume to networking on LinkedIn.",
      path: "/blog/first-job-india-without-experience",
      type: "article",
      publishedTime: "2026-04-23",
    });
  }, []);

  const steps = [
    {
      icon: FileText,
      title: "Make a Good Resume",
      body: "Your resume is your first impression. Focus on what you DO have:",
      points: [
        "Skills you've learned (technical and soft)",
        "Projects you've built — college, personal, or freelance",
        "Certifications from platforms like Coursera, Udemy, or NPTEL",
      ],
    },
    {
      icon: Send,
      title: "Apply for Jobs the Smart Way",
      body: "Don't spray-and-pray. Be intentional about where you apply:",
      points: [
        "Use job portals like Naukri, LinkedIn, and Internshala",
        "Visit company career pages directly — many roles never hit portals",
        "Tailor your resume for each application instead of sending the same one",
      ],
    },
    {
      icon: GraduationCap,
      title: "Get Better at Things",
      body: "Use the waiting time to level up. Recruiters love candidates who keep learning.",
      points: [
        "Take online courses in your target field",
        "Build small projects to apply what you learn",
        "Document your work on GitHub, a portfolio, or LinkedIn",
      ],
    },
    {
      icon: Users,
      title: "Meet New People",
      body: "Most jobs are filled through connections, not job boards.",
      points: [
        "Connect with recruiters and people in your dream companies on LinkedIn",
        "Attend webinars, hackathons, and meetups",
        "Send polite, personalised messages — not generic copy-paste",
      ],
    },
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
            Career Advice
          </span>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            How to Get Your First Job in India{" "}
            <span className="text-gradient">Without Experience</span>
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
            <p className="text-lg">
              Getting your first job without experience seems really tough — but it is
              absolutely possible. Thousands of freshers in India do it every year. Here's
              the no-fluff playbook.
            </p>

            <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg my-8">
              <p className="font-semibold text-lg mb-2">The Mindset Shift</p>
              <p className="m-0">
                Companies don't only hire experience — they hire <strong>potential</strong>.
                Your job is to make that potential visible.
              </p>
            </div>

            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="mt-12">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                      {i + 1}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mt-0 pt-1 flex items-center gap-2">
                      <Icon className="w-6 h-6 text-primary" /> {step.title}
                    </h2>
                  </div>

                  <div className="pl-14 space-y-3">
                    <p className="m-0">{step.body}</p>
                    <ul className="space-y-1 m-0">
                      {step.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}

            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg my-12">
              <h3 className="text-xl font-bold mb-3 mt-0">💡 One Last Thing to Remember</h3>
              <p className="m-0">
                Being <strong>consistent</strong> is more important than being super
                talented. Apply daily, learn weekly, and keep improving — the first
                offer always feels far away until it suddenly arrives.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-8 my-12 text-center">
              <h3 className="text-2xl font-bold mb-3 mt-0">
                Start With a Resume That Gets Noticed
              </h3>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Build an ATS-friendly, recruiter-ready resume in minutes — even if you
                have zero work experience.
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

export default BlogFirstJobNoExperience;
