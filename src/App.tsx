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
const BlogUltimateGuide = lazy(() => import("./pages/BlogUltimateGuide.tsx"));
const BlogResumeVsCVDifference = lazy(() => import("./pages/BlogResumeVsCVDifference.tsx"));
const BlogLinkedInGuide = lazy(() => import("./pages/BlogLinkedInGuide.tsx"));
const BlogHighIncomeSkills = lazy(() => import("./pages/BlogHighIncomeSkills.tsx"));
const BlogAIHiring = lazy(() => import("./pages/BlogAIHiring.tsx"));
const BlogResumePastComputers = lazy(() => import("./pages/BlogResumePastComputers.tsx"));
const BlogFirstInterviewIndia = lazy(() => import("./pages/BlogFirstInterviewIndia.tsx"));
const BlogResumeSkills2026 = lazy(() => import("./pages/BlogResumeSkills2026.tsx"));
const AtsChecker = lazy(() => import("./pages/AtsChecker.tsx"));
const Auth = lazy(() => import("./pages/Auth.tsx"));
const ResumeTemplates = lazy(() => import("./pages/ResumeTemplates.tsx"));
const ResumeTemplateDetail = lazy(() => import("./pages/ResumeTemplateDetail.tsx"));

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
            <Route path="/blog/ultimate-guide-resume-freshers-india-2026" element={<BlogUltimateGuide />} />
            <Route path="/blog/resume-vs-cv-difference-indian-job-seekers" element={<BlogResumeVsCVDifference />} />
            <Route path="/blog/linkedin-guide-freshers-india-2026" element={<BlogLinkedInGuide />} />
            <Route path="/blog/high-income-skills-learn-free-2026" element={<BlogHighIncomeSkills />} />
            <Route path="/blog/ai-changing-hiring-job-seekers-guide" element={<BlogAIHiring />} />
            <Route path="/blog/resume-gets-past-computers-interviews-2026" element={<BlogResumePastComputers />} />
            <Route path="/blog/first-job-interview-india-2026" element={<BlogFirstInterviewIndia />} />
            <Route path="/blog/resume-skills-freshers-2026" element={<BlogResumeSkills2026 />} />
            <Route path="/blog/resume-skills-freshers-2026-guide" element={<BlogResumeSkills2026 />} />
            <Route path="/ats-checker" element={<AtsChecker />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/resume-templates" element={<ResumeTemplates />} />
            <Route path="/resume-templates/:slug" element={<ResumeTemplateDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
