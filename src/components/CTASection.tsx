import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => (
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
        <Link to="/builder">
          <Button variant="hero" size="lg" className="text-base px-10 py-6">
            Build My Resume <ArrowRight className="w-5 h-5 ml-1" />
          </Button>
        </Link>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
