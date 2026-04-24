import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, FileSearch } from "lucide-react";
import { useOneTimeRedirect } from "@/hooks/useOneTimeRedirect";

const BUILD_URL = "https://alarmpenguinmelt.com/hut48qswjv?key=6bd3167a40ceda1a37fbd420457b971d";

const CTASection = () => {
  const navigate = useNavigate();
  const buildBtn = useOneTimeRedirect("cta_build_used", BUILD_URL);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Building Your Resume <span className="text-gradient">Now</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Join thousands of students and job seekers who landed their dream jobs with Resumly.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              variant="hero"
              size="lg"
              className="text-base px-10 py-6"
              onClick={(e) => buildBtn.handleClick(e, () => navigate("/builder"))}
            >
              Build My Resume <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base px-10 py-6"
              onClick={() => navigate("/ats-checker")}
            >
              <FileSearch className="w-5 h-5 mr-1" /> Check ATS Score
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
