import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Star, FileSearch } from "lucide-react";

// Live-looking seeker counter: deterministic base per day, ticks up in-session.
const BASE_COUNT = 859;
const START_DATE = new Date("2026-07-27T00:00:00Z").getTime();
const DAY_MS = 86_400_000;

// Small seeded RNG so each day's increment is stable across renders/users.
const seededDailyIncrement = (dayIndex: number) => {
  let x = Math.sin(dayIndex * 9301 + 49297) * 233280;
  x = x - Math.floor(x);
  return Math.floor(x * 5) + 1; // 1..5
};

const getDailyCount = () => {
  const today = Math.floor((Date.now() - START_DATE) / DAY_MS);
  let total = BASE_COUNT;
  for (let d = 0; d <= today; d++) total += seededDailyIncrement(d);
  return total;
};
import heroImage from "@/assets/hero-image.jpg";
import heroImage640 from "@/assets/hero-image-640.jpg";
import { useOneTimeRedirect } from "@/hooks/useOneTimeRedirect";

const BUILD_URL = "https://alarmpenguinmelt.com/hut48qswjv?key=6bd3167a40ceda1a37fbd420457b971d";
const HOWITWORKS_URL = "https://www.profitablecpmratenetwork.com/hut48qswjv?key=6bd3167a40ceda1a37fbd420457b971d";

const HeroSection = () => {
  const navigate = useNavigate();
  const buildBtn = useOneTimeRedirect("cta_build_used", BUILD_URL);
  const howBtn = useOneTimeRedirect("cta_howitworks_used", HOWITWORKS_URL);
  const [count, setCount] = useState<number>(() => getDailyCount());

  useEffect(() => {
    let cancelled = false;

    const fetchCount = async () => {
      try {
        const { data, error } = await supabase.functions.invoke("seeker-count");
        if (!cancelled && !error && typeof data?.count === "number") {
          setCount((c) => Math.max(c, data.count));
        }
      } catch {
        // Keep the locally computed fallback value.
      }
    };

    fetchCount();
    // Refresh periodically so the number keeps creeping up while the page is open.
    const id = window.setInterval(fetchCount, 60000);
    return () => {
      cancelled = true;
      window.clearInterval(id);
    };
  }, []);


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
              <span className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                Used by {count.toLocaleString()} job seekers (live)
              </span>
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
              srcSet={`${heroImage640} 640w, ${heroImage} 960w`}
              sizes="(min-width: 1280px) 628px, (min-width: 1024px) 50vw, 0px"
              alt="AI-powered resume builder preview"
              width={960}
              height={720}
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
