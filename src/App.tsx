import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

// Lazy-load non-home routes to reduce initial JS parse/eval on the main thread.
// UX is preserved — these pages still render identically when navigated to.
const Builder = lazy(() => import("./pages/Builder.tsx"));
const ResumePage = lazy(() => import("./pages/ResumePage.tsx"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy.tsx"));
const BlogAIJobs = lazy(() => import("./pages/BlogAIJobs.tsx"));
const BlogResumeMistakes = lazy(() => import("./pages/BlogResumeMistakes.tsx"));
const BlogSimpleResumeFormat = lazy(() => import("./pages/BlogSimpleResumeFormat.tsx"));
const BlogBestSkills = lazy(() => import("./pages/BlogBestSkills.tsx"));
const BlogFirstJobNoExperience = lazy(() => import("./pages/BlogFirstJobNoExperience.tsx"));
const BlogResumeVsCV = lazy(() => import("./pages/BlogResumeVsCV.tsx"));
const BlogPassATS = lazy(() => import("./pages/BlogPassATS.tsx"));
const BlogBestResumeTemplates = lazy(() => import("./pages/BlogBestResumeTemplates.tsx"));
const AtsChecker = lazy(() => import("./pages/AtsChecker.tsx"));
const Auth = lazy(() => import("./pages/Auth.tsx"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={null}>
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
            <Route path="/blog/resume-vs-cv-india-freshers" element={<BlogResumeVsCV />} />
            <Route path="/blog/pass-ats-resume-screening-india" element={<BlogPassATS />} />
            <Route path="/blog/best-resume-templates-freshers-india" element={<BlogBestResumeTemplates />} />
            <Route path="/ats-checker" element={<AtsChecker />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
