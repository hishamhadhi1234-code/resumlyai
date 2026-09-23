import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="py-12 border-t border-border">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-primary flex items-center justify-center">
            <Sparkles className="w-3.5 h-3.5 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold">Resumly</span>
        </Link>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          <Link to="/resume-templates" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Resume Templates
          </Link>
          <Link to="/ats-checker" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ATS Checker
          </Link>
          <Link to="/ats-tips" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            AI ATS Improvement Tips
          </Link>
          <Link to="/resume-optimization-for-freshers-india" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Resume Optimization for Freshers
          </Link>
          <Link to="/free-ai-resume-optimization-india" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Free AI Resume Optimization
          </Link>
          <Link to="/ats-friendly-resume-builder-india" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ATS-Friendly Resume Builder
          </Link>
          <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Privacy Policy
          </Link>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Resumly. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
