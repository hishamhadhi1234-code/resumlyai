import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

interface BlogCTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  variant?: "full" | "inline";
}

const BlogCTA = ({
  title = "Build Your ATS-Friendly Resume in Minutes",
  description = "Free AI resume builder for Indian freshers and professionals. No login, no payment — just a recruiter-ready resume you can download as PDF or DOCX.",
  buttonText = "Build My Resume Now",
  variant = "full",
}: BlogCTAProps) => {
  if (variant === "inline") {
    return (
      <div className="not-prose my-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 rounded-xl border border-primary/20 bg-primary/5">
        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
          <Sparkles className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <p className="font-semibold m-0">{title}</p>
          <p className="text-sm text-muted-foreground m-0">{description}</p>
        </div>
        <Link
          to="/builder"
          className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded-lg font-medium hover:bg-primary/90 transition-colors whitespace-nowrap"
        >
          {buttonText} <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="not-prose bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-8 my-12 text-center">
      <h3 className="text-2xl font-bold mb-3 mt-0">{title}</h3>
      <p className="text-muted-foreground mb-6 max-w-xl mx-auto">{description}</p>
      <Link
        to="/builder"
        className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
      >
        {buttonText} <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
};

export default BlogCTA;
