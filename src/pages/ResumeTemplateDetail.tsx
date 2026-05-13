import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles, Users, Layers } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResumeTemplatePreview from "@/components/ResumeTemplatePreview";
import { Button } from "@/components/ui/button";
import { RESUME_TEMPLATES, getTemplateBySlug } from "@/data/resumeTemplates";
import { setSEO } from "@/lib/seo";
import NotFound from "./NotFound";

const SITE_URL = "https://resumlyai.lovable.app";

const ResumeTemplateDetail = () => {
  const { slug = "" } = useParams();
  const navigate = useNavigate();
  const template = getTemplateBySlug(slug);

  useEffect(() => {
    if (!template) return;
    window.scrollTo(0, 0);
    setSEO({
      title: template.metaTitle,
      description: template.metaDescription,
      path: `/resume-templates/${template.slug}`,
      type: "article",
    });

    // BreadcrumbList JSON-LD
    const ldId = "template-detail-jsonld";
    document.getElementById(ldId)?.remove();
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.id = ldId;
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL + "/" },
        { "@type": "ListItem", position: 2, name: "Resume Templates", item: `${SITE_URL}/resume-templates` },
        {
          "@type": "ListItem",
          position: 3,
          name: `${template.name} Resume Template`,
          item: `${SITE_URL}/resume-templates/${template.slug}`,
        },
      ],
    });
    document.head.appendChild(ld);
    return () => {
      document.getElementById(ldId)?.remove();
    };
  }, [template]);

  if (!template) return <NotFound />;

  const related = RESUME_TEMPLATES.filter((t) => t.slug !== template.slug).slice(0, 3);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <Link
            to="/resume-templates"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> All templates
          </Link>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-muted/30 rounded-2xl border border-border p-8 flex items-center justify-center"
            >
              <ResumeTemplatePreview
                template={template}
                className="w-full max-w-[320px] drop-shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary mb-3">
                Free template
              </span>
              <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
                {template.name} <span className="text-gradient">Resume Template</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6">{template.tagline}</p>

              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Button variant="hero" size="lg" onClick={() => navigate("/builder")}>
                  Use this template <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
                <Button variant="outline" size="lg" onClick={() => navigate("/ats-checker")}>
                  Check ATS Score
                </Button>
              </div>

              <div className="space-y-5">
                <section>
                  <h2 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2">
                    <Sparkles className="w-4 h-4 text-primary" /> Features
                  </h2>
                  <ul className="grid grid-cols-2 gap-2">
                    {template.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h2 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2">
                    <Users className="w-4 h-4 text-primary" /> Best for
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {template.bestFor.map((b) => (
                      <span
                        key={b}
                        className="text-xs px-2.5 py-1 rounded-full bg-secondary/10 text-secondary-foreground border border-border"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </section>
              </div>
            </motion.div>
          </div>

          <article className="prose prose-lg max-w-none mt-14 text-foreground/90 leading-relaxed">
            <h2>About the {template.name} resume template</h2>
            <p>{template.description}</p>

            <h2>Why this template works</h2>
            <p>
              Recruiters spend an average of 7 seconds scanning a resume before deciding whether to
              read further. The {template.name} template is engineered to win that 7 seconds by
              putting the most important information — your name, target role, and most recent
              experience — exactly where the eye lands first.
            </p>

            <h2>How to fill it out</h2>
            <ol>
              <li>Click <strong>Use this template</strong> above to open the Resumly builder.</li>
              <li>Enter your details step-by-step — personal info, experience, projects, education.</li>
              <li>Let the built-in AI suggest stronger action verbs and ATS keywords.</li>
              <li>Download as PDF (or .docx for the Word template) and start applying.</li>
            </ol>
          </article>

          <section className="mt-16">
            <h2 className="flex items-center gap-2 text-2xl font-bold mb-6">
              <Layers className="w-5 h-5 text-primary" /> Related templates
            </h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {related.map((t) => (
                <Link
                  key={t.slug}
                  to={`/resume-templates/${t.slug}`}
                  className="group rounded-xl border border-border bg-card overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <div className="aspect-[3/4] bg-muted/30 flex items-center justify-center p-3 border-b border-border">
                    <ResumeTemplatePreview
                      template={t}
                      className="w-full h-full max-w-[160px] group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">{t.name}</h3>
                    <p className="text-xs text-muted-foreground line-clamp-2">{t.tagline}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ResumeTemplateDetail;
