import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

// Below-the-fold sections are lazy-loaded to shrink the initial JS payload.
// They render in the same order, just fetched after the hero is interactive.
const FeaturesSection = lazy(() => import("@/components/FeaturesSection"));
const HowItWorksSection = lazy(() => import("@/components/HowItWorksSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const BlogSection = lazy(() => import("@/components/BlogSection"));
const CTASection = lazy(() => import("@/components/CTASection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));
const AdUnit = lazy(() => import("@/components/AdUnit"));
const BannerAd = lazy(() => import("@/components/BannerAd"));

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <Suspense fallback={null}>
      <div className="container mx-auto px-4 py-6">
        <AdUnit slot="2931159552" />
      </div>
      <div className="container mx-auto px-4 pb-6">
        <BannerAd />
      </div>
      <BlogSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FeaturesSection />
      <FAQSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </Suspense>
  </div>
);

export default Index;
