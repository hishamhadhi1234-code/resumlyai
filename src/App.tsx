import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Builder from "./pages/Builder.tsx";
import ResumePage from "./pages/ResumePage.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import BlogAIJobs from "./pages/BlogAIJobs.tsx";
import BlogResumeMistakes from "./pages/BlogResumeMistakes.tsx";
import BlogSimpleResumeFormat from "./pages/BlogSimpleResumeFormat.tsx";
import BlogBestSkills from "./pages/BlogBestSkills.tsx";
import BlogFirstJobNoExperience from "./pages/BlogFirstJobNoExperience.tsx";
import AtsChecker from "./pages/AtsChecker.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/builder" element={<Builder />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
<Route path="/blog/will-ai-replace-jobs-2026" element={<BlogAIJobs />} />
          <Route path="/blog/top-10-resume-mistakes-freshers-india" element={<BlogResumeMistakes />} />
          <Route path="/blog/simple-resume-format-freshers-india" element={<BlogSimpleResumeFormat />} />
          <Route path="/blog/best-skills-resume-freshers-india" element={<BlogBestSkills />} />
          <Route path="/blog/first-job-india-without-experience" element={<BlogFirstJobNoExperience />} />
          <Route path="/ats-checker" element={<AtsChecker />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
