import { motion } from "framer-motion";
import { Brain, Target, BarChart3, Briefcase } from "lucide-react";

const features = [
  { icon: Brain, title: "AI-Generated Summary", desc: "Get a powerful professional summary tailored to your target role automatically." },
  { icon: Target, title: "ATS Keyword Optimization", desc: "Your resume is optimized with the right keywords to pass applicant tracking systems." },
  { icon: BarChart3, title: "Resume Scoring System", desc: "Get a score out of 100 with actionable suggestions to improve your resume." },
  { icon: Briefcase, title: "Job-Specific Customization", desc: "Match your resume to any job description for maximum relevance and impact." },
];

const FeaturesSection = () => (
  <section id="features" className="py-20">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Powered by <span className="text-gradient">AI Technology</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Our AI analyzes thousands of successful resumes to help you create the perfect one.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group p-6 rounded-2xl bg-gradient-card border border-border hover:shadow-md transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <f.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
