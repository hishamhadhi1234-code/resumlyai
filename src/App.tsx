import { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import { lazy } from "react";
import { blogRoutes } from "./blogRoutes";

// Lazy-load non-home routes to reduce initial JS parse/eval on the main thread.
// UX is preserved — these pages still render identically when navigated to.
const Builder = lazy(() => import("./pages/Builder.tsx"));
const ResumePage = lazy(() => import("./pages/ResumePage.tsx"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy.tsx"));
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
            {blogRoutes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
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
