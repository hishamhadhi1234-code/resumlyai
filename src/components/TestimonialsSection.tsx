import { motion } from "framer-motion";
import { Star, StarHalf } from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
  text: string;
  rating: number; // supports halves like 4.5
};

const testimonials: Testimonial[] = [
  {
    name: "Priya S.",
    role: "CSE final year, Pune",
    text: "Honestly I was just trying it out before my campus drive. Took me like 15 mins to fill everything. Got shortlisted by 2 companies that week — not sure if it's the resume or luck tbh, but it definitely looked way cleaner than what I had before.",
    rating: 5,
  },
  {
    name: "Rahul V.",
    role: "Marketing fresher",
    text: "The summary it wrote for me was a bit too fancy at first, had to tweak a couple lines to sound like me. After that it was solid. Got my first interview call after 3 weeks of zero replies.",
    rating: 4,
  },
  {
    name: "Ananya P.",
    role: "Data Analyst, 1 yr exp",
    text: "Used the JD matching thing for a Swiggy role. It picked up keywords I had completely missed (SQL joins, dashboarding). Didn't get that one but used the same resume for another company and got the offer 🙌",
    rating: 4.5,
  },
  {
    name: "Karthik R.",
    role: "MCA student, Bangalore",
    text: "Pretty good for free. The score thing is a bit harsh lol, started at 64 and i kept editing till 88. Wish there were more template options but the default one is fine for now.",
    rating: 4,
  },
  {
    name: "Sneha M.",
    role: "Switching from teaching to UX",
    text: "Was nervous about how to show transferable skills. The AI did an okay job rephrasing my teaching experience into something product-y. Took me a few tries but the final version felt much more confident.",
    rating: 4.5,
  },
  {
    name: "Aman K.",
    role: "B.Tech ECE, 2024 batch",
    text: "Worked. That's it. No fluff. Downloaded the PDF, sent it out, got 2 calls in 10 days. Coming from someone who got 0 calls in 2 months with my old resume.",
    rating: 5,
  },
];

const Rating = ({ value }: { value: number }) => {
  const full = Math.floor(value);
  const hasHalf = value - full >= 0.5;
  return (
    <div className="flex items-center gap-1 mb-4" aria-label={`Rated ${value} out of 5`}>
      {Array.from({ length: full }).map((_, j) => (
        <Star key={`f-${j}`} className="w-4 h-4 fill-primary text-primary" />
      ))}
      {hasHalf && (
        <div className="relative w-4 h-4">
          <Star className="w-4 h-4 text-primary absolute inset-0" />
          <StarHalf className="w-4 h-4 fill-primary text-primary absolute inset-0" />
        </div>
      )}
      <span className="text-xs text-muted-foreground ml-1">{value.toFixed(1)}</span>
    </div>
  );
};

const TestimonialsSection = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What <span className="text-gradient">Real Users</span> Say
        </h2>
        <p className="text-muted-foreground text-sm">Honest words from students &amp; early-career folks.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="p-6 rounded-2xl bg-gradient-card border border-border"
          >
            <Rating value={t.rating} />
            <p className="text-foreground/85 text-sm mb-4 leading-relaxed">"{t.text}"</p>
            <div>
              <p className="font-semibold text-sm">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
