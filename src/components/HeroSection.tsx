import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Star, FileSearch } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import { useOneTimeRedirect } from "@/hooks/useOneTimeRedirect";

const BUILD_URL = "https://alarmpenguinmelt.com/hut48qswjv?key=6bd3167a40ceda1a37fbd420457b971d";
const HOWITWORKS_URL = "https://www.profitablecpmratenetwork.com/hut48qswjv?key=6bd3167a40ceda1a37fbd420457b971d";

const HeroSection = () => {
  const navigate = useNavigate();
  const buildBtn = useOneTimeRedirect("cta_build_used", BUILD_URL);
  const howBtn = useOneTimeRedirect("cta_howitworks_used", HOWITWORKS_URL);

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-subtle opacity-60" />
      <div className="absolute top-20 left-1/4 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 rounded-full bg-secondary/5 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Star className="w-4 h-4" /> Smart resumes. Better jobs.
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Create Your{" "}
              <span className="text-gradient">AI-Powered Resume</span>{" "}
              in Minutes
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Get hired faster with ATS-optimized resumes powered by AI. Stand out from the crowd and land your dream job.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <Button
                variant="hero"
                size="lg"
                className="text-base px-8 py-6"
                onClick={(e) => buildBtn.handleClick(e, () => navigate("/builder"))}
              >
                Build My Resume <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
              <Button
                variant="hero-outline"
                size="lg"
                className="text-base px-8 py-6"
                onClick={(e) =>
                  howBtn.handleClick(e, () => {
                    document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
                  })
                }
              >
                See How It Works
              </Button>
            </div>

            <div className="mb-8">
              <Button
                variant="outline"
                size="lg"
                className="text-base px-8 py-6 w-full sm:w-auto"
                onClick={() => navigate("/ats-checker")}
              >
                <FileSearch className="w-5 h-5 mr-1" /> Check ATS Score
              </Button>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-primary" /> ATS Friendly
              </span>
              <span>Used by 10,000+ job seekers</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <img
              src={heroImage}
              alt="AI-powered resume builder preview"
              width={1024}
              height={768}
              loading="eager"
              decoding="async"
              // @ts-expect-error fetchpriority is a valid HTML attribute not yet in React types
              fetchpriority="high"
              className="rounded-2xl shadow-lg animate-float"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
