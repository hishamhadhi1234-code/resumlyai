import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import BlogSection from "@/components/BlogSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AdUnit from "@/components/AdUnit";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <div className="container mx-auto px-4 py-6">
      <AdUnit slot="2931159552" />
    </div>
    <BlogSection />
    <HowItWorksSection />
    <TestimonialsSection />
    <FeaturesSection />
    <FAQSection />
    <CTASection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;

