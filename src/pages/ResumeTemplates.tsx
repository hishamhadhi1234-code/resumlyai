import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResumeTemplatePreview from "@/components/ResumeTemplatePreview";
import { RESUME_TEMPLATES } from "@/data/resumeTemplates";
import { setSEO } from "@/lib/seo";

const SITE_URL = "https://resumlyai.lovable.app";

const ResumeTemplates = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    setSEO({
      title: "Free Resume Templates — ATS-Friendly Designs | Resumly",
      description:
        "Browse free, ATS-friendly resume templates: simple, modern, professional, creative, fresher, Word & Google Docs. Pick a template and build your resume in minutes.",
      path: "/resume-templates",
      type: "website",
    });

    // ItemList JSON-LD for the gallery
    const ldId = "resume-templates-jsonld";
    document.getElementById(ldId)?.remove();
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.id = ldId;
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Free Resume Templates",
      itemListElement: RESUME_TEMPLATES.map((t, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${SITE_URL}/resume-templates/${t.slug}`,
        name: `${t.name} Resume Template`,
      })),
    });
    document.head.appendChild(ld);
    return () => {
      document.getElementById(ldId)?.remove();
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary mb-4">
              {RESUME_TEMPLATES.length} free templates
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Free <span className="text-gradient">Resume Templates</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              ATS-friendly resume templates for every role and experience level. Pick one,
              fill in your details, and download a recruiter-ready PDF in minutes.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {RESUME_TEMPLATES.map((t, i) => (
              <motion.article
                key={t.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="group rounded-2xl border border-border bg-card overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <Link to={`/resume-templates/${t.slug}`} className="block">
                  <div className="aspect-[3/4] bg-muted/30 flex items-center justify-center p-4 border-b border-border">
                    <ResumeTemplatePreview
                      template={t}
                      className="w-full h-full max-w-[200px] drop-shadow-md group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-5">
                    <h2 className="text-lg font-semibold mb-1">{t.name} Resume Template</h2>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {t.tagline}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-1 text-emerald-600">
                        <CheckCircle2 className="w-4 h-4" /> ATS-friendly
                      </span>
                      <span className="text-primary font-medium inline-flex items-center gap-1">
                        View <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ResumeTemplates;
