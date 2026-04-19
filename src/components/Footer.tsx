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
        <div className="flex items-center gap-6">
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
