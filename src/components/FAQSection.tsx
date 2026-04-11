import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  { q: "Is Resumly really free?", a: "Yes! Our basic plan is completely free. You can create a resume with AI-generated content at no cost. Pro features like advanced scoring and job matching require an upgrade." },
  { q: "What makes Resumly ATS-friendly?", a: "We use a clean, single-column layout with standard section headers and optimized keywords. Our AI ensures your resume passes through applicant tracking systems used by 95% of companies." },
  { q: "Can I customize my resume for different jobs?", a: "Absolutely! Our Pro plan includes a job description matching feature that tailors your resume content for each specific application." },
  { q: "How does the AI improve my resume?", a: "Our AI rewrites your experience with strong action verbs, adds measurable results, generates a professional summary, and suggests relevant skills based on your target role." },
  { q: "Is my data safe?", a: "Yes, your data is encrypted and secure. We never share your personal information with third parties." },
];

const FAQSection = () => (
  <section className="py-20">
    <div className="container mx-auto px-4 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Frequently Asked <span className="text-gradient">Questions</span>
        </h2>
      </motion.div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl px-4">
            <AccordionTrigger className="text-left font-medium">{faq.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
