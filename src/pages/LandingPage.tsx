import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import NotFound from "@/pages/NotFound";
import { getLandingPage } from "@/data/landingPages";
import { setSEO } from "@/lib/seo";

const SITE_URL = "https://resumlyai.lovable.app";

const LandingPage = () => {
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\/+|\/+$/g, "");
  const page = getLandingPage(slug);

  useEffect(() => {
    if (!page) return;
    window.scrollTo(0, 0);
    setSEO({
      title: page.title,
      description: page.metaDescription,
      path: `/${page.slug}`,
      type: "website",
    });

    const ldId = "landing-jsonld";
    document.getElementById(ldId)?.remove();
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.id = ldId;
    ld.text = JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: page.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: page.h1, item: `${SITE_URL}/${page.slug}` },
        ],
      },
    ]);
    document.head.appendChild(ld);

    return () => {
      document.getElementById(ldId)?.remove();
    };
  }, [page]);

  if (!page) return <NotFound />;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Hero */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-4">
              <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">{page.keyword}</span>
            </nav>

            <span className="inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full mb-4">
              <Sparkles className="w-4 h-4" /> Free • No login • Made for India
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              {page.h1}
            </h1>
            <p className="text-lg text-muted-foreground mb-6">{page.intro}</p>

            <ul className="grid sm:grid-cols-2 gap-3 mb-8">
              {page.heroBullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/builder"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                {page.primaryCta} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/ats-checker"
                className="inline-flex items-center justify-center gap-2 border border-border px-6 py-3 rounded-lg font-medium hover:bg-muted transition-colors"
              >
                Check My ATS Score
              </Link>
            </div>
          </motion.section>

          {/* Content sections */}
          {page.sections.map((s) => (
            <section key={s.heading} className="mt-14">
              <h2 className="text-2xl font-bold mb-3">{s.heading}</h2>
              <p className="text-muted-foreground leading-relaxed">{s.body}</p>
              {s.points && (
                <ul className="mt-4 space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{p}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {/* Steps */}
          <section className="mt-14">
            <h2 className="text-2xl font-bold mb-6">How it works</h2>
            <ol className="grid sm:grid-cols-2 gap-4">
              {page.steps.map((step, i) => (
                <li key={step.title} className="p-5 rounded-xl border border-border bg-card">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-semibold mb-3">
                    {i + 1}
                  </div>
                  <h3 className="font-semibold mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.body}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* Lead capture */}
          <LeadCaptureForm sourceSlug={page.slug} />

          {/* CTA */}
          <section className="mt-14 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">{page.primaryCta}</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Free AI resume builder for India. No login, no payment — download a recruiter-ready
              resume as PDF or DOCX in minutes.
            </p>
            <Link
              to="/builder"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Build My Resume Now <ArrowRight className="w-4 h-4" />
            </Link>
          </section>

          {/* FAQs */}
          <section className="mt-14">
            <h2 className="text-2xl font-bold mb-6">Frequently asked questions</h2>
            <div className="space-y-5">
              {page.faqs.map((f) => (
                <div key={f.q}>
                  <h3 className="font-semibold mb-1">{f.q}</h3>
                  <p className="text-muted-foreground">{f.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related */}
          <section className="mt-14">
            <h2 className="text-2xl font-bold mb-4">Keep reading</h2>
            <ul className="space-y-2">
              {page.relatedLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-primary hover:underline inline-flex items-center gap-1">
                    {l.label} <ArrowRight className="w-4 h-4" />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;
