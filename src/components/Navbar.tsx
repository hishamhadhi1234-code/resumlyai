import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">Resumly</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How it Works</a>
          <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          <Link to="/builder">
            <Button variant="hero" size="sm">Build My Resume</Button>
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden glass border-t border-border p-4 flex flex-col gap-4">
          <a href="#features" className="text-sm text-muted-foreground" onClick={() => setIsOpen(false)}>Features</a>
          <a href="#how-it-works" className="text-sm text-muted-foreground" onClick={() => setIsOpen(false)}>How it Works</a>
          <a href="#pricing" className="text-sm text-muted-foreground" onClick={() => setIsOpen(false)}>Pricing</a>
          <a href="#contact" className="text-sm text-muted-foreground" onClick={() => setIsOpen(false)}>Contact</a>
          <Link to="/builder" onClick={() => setIsOpen(false)}>
            <Button variant="hero" className="w-full">Build My Resume</Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
