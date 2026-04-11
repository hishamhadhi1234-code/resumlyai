import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Free",
    price: "₹0",
    period: "forever",
    features: ["Basic resume generation", "1 resume template", "Limited AI suggestions", "Standard formatting"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro Monthly",
    price: "₹29",
    period: "/month",
    features: ["Full AI optimization", "Resume score & feedback", "All templates", "ATS keyword analysis", "Job description matching", "Priority support"],
    cta: "Upgrade to Pro",
    popular: true,
  },
  {
    name: "Yearly",
    price: "₹99",
    period: "/year",
    features: ["Everything in Pro", "Save 72% vs monthly", "Advanced analytics", "Multiple resume versions"],
    cta: "Get Yearly Plan",
    popular: false,
  },
  {
    name: "Lifetime",
    price: "₹199",
    period: "one-time",
    features: ["Everything in Pro", "Unlimited resumes forever", "All future features", "Lifetime updates", "VIP support"],
    cta: "Get Lifetime Access",
    popular: false,
  },
];

const PricingSection = () => (
  <section id="pricing" className="py-20 bg-gradient-subtle">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Simple <span className="text-gradient">Pricing</span>
        </h2>
        <p className="text-muted-foreground">Choose the plan that works for you.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`relative p-6 rounded-2xl border ${
              plan.popular
                ? "border-primary shadow-glow bg-background"
                : "border-border bg-gradient-card"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-primary text-primary-foreground text-xs font-semibold flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Most Popular
              </div>
            )}
            <h3 className="font-bold text-lg mb-1">{plan.name}</h3>
            <div className="mb-4">
              <span className="text-3xl font-extrabold">{plan.price}</span>
              <span className="text-sm text-muted-foreground ml-1">{plan.period}</span>
            </div>
            <ul className="space-y-3 mb-6">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Button
              variant={plan.popular ? "hero" : "outline"}
              className="w-full"
            >
              {plan.cta}
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
