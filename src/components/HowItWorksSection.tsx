import { motion } from "framer-motion";
import { FileText, Sparkles, Download } from "lucide-react";

const steps = [
  { icon: FileText, step: "01", title: "Enter Your Details", desc: "Fill in your experience, skills, education, and target job role." },
  { icon: Sparkles, step: "02", title: "AI Enhances Your Resume", desc: "Our AI rewrites, optimizes, and scores your resume for maximum impact." },
  { icon: Download, step: "03", title: "Download Instantly", desc: "Get your polished, ATS-friendly resume as a PDF ready to send." },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-20 bg-gradient-subtle">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          How It <span className="text-gradient">Works</span>
        </h2>
        <p className="text-muted-foreground">Three simple steps to your perfect resume.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((s, i) => (
          <motion.div
            key={s.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="text-center"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-primary mx-auto mb-6 flex items-center justify-center shadow-glow">
              <s.icon className="w-8 h-8 text-primary-foreground" />
            </div>
            <span className="text-sm font-bold text-primary">{s.step}</span>
            <h3 className="text-xl font-bold mt-2 mb-3">{s.title}</h3>
            <p className="text-muted-foreground text-sm">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
