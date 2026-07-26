import { lazy, type LazyExoticComponent, type ComponentType } from "react";

/**
 * Blog route registry — single source of truth for /blog/* pages.
 *
 * To add a new blog:
 *   1. Create the page component at `src/pages/BlogYourName.tsx`.
 *   2. Add ONE entry below with `slug` and matching `file`.
 * That's it — App.tsx picks it up automatically.
 *
 * A dev-mode warning fires if any `Blog*.tsx` file exists without a
 * matching entry here, so 404s from forgotten registrations are caught
 * on first page load.
 */

// Non-eager glob: paths are known at build time, modules load on demand.
const loaders = import.meta.glob("./pages/Blog*.tsx") as Record<
  string,
  () => Promise<{ default: ComponentType<unknown> }>
>;

type BlogRouteDef = { slug: string; file: string };

const registry: BlogRouteDef[] = [
  { slug: "will-ai-replace-jobs-2026", file: "./pages/BlogAIJobs.tsx" },
  { slug: "top-10-resume-mistakes-freshers-india", file: "./pages/BlogResumeMistakes.tsx" },
  { slug: "simple-resume-format-freshers-india", file: "./pages/BlogSimpleResumeFormat.tsx" },
  { slug: "best-skills-resume-freshers-india", file: "./pages/BlogBestSkills.tsx" },
  { slug: "first-job-india-without-experience", file: "./pages/BlogFirstJobNoExperience.tsx" },
  { slug: "resume-vs-cv-india-freshers", file: "./pages/BlogResumeVsCV.tsx" },
  { slug: "pass-ats-resume-screening-india", file: "./pages/BlogPassATS.tsx" },
  { slug: "best-resume-templates-freshers-india", file: "./pages/BlogBestResumeTemplates.tsx" },
  { slug: "ultimate-guide-resume-freshers-india-2026", file: "./pages/BlogUltimateGuide.tsx" },
  { slug: "resume-vs-cv-difference-indian-job-seekers", file: "./pages/BlogResumeVsCVDifference.tsx" },
  { slug: "linkedin-guide-freshers-india-2026", file: "./pages/BlogLinkedInGuide.tsx" },
  { slug: "high-income-skills-learn-free-2026", file: "./pages/BlogHighIncomeSkills.tsx" },
  { slug: "ai-changing-hiring-job-seekers-guide", file: "./pages/BlogAIHiring.tsx" },
  { slug: "resume-gets-past-computers-interviews-2026", file: "./pages/BlogResumePastComputers.tsx" },
  { slug: "first-job-interview-india-2026", file: "./pages/BlogFirstInterviewIndia.tsx" },
  // Same page served under two historical URLs.
  { slug: "resume-skills-freshers-2026", file: "./pages/BlogResumeSkills2026.tsx" },
  { slug: "resume-skills-freshers-2026-guide", file: "./pages/BlogResumeSkills2026.tsx" },
  { slug: "job-search-checklist-before-you-apply", file: "./pages/BlogJobSearchChecklist.tsx" },
];

export type BlogRoute = {
  slug: string;
  path: string;
  Component: LazyExoticComponent<ComponentType<unknown>>;
};

export const blogRoutes: BlogRoute[] = registry.map(({ slug, file }) => {
  const loader = loaders[file];
  if (!loader) {
    // Fail loudly at module load — misspelled file path in the registry.
    throw new Error(
      `[blogRoutes] No component found for ${file}. Check the filename in src/blogRoutes.ts.`
    );
  }
  return {
    slug,
    path: `/blog/${slug}`,
    Component: lazy(loader),
  };
});

// Dev-mode safety net: warn about any Blog*.tsx that isn't wired to a route.
if (import.meta.env.DEV) {
  const registered = new Set(registry.map((r) => r.file));
  for (const file of Object.keys(loaders)) {
    if (!registered.has(file)) {
      // eslint-disable-next-line no-console
      console.warn(
        `[blogRoutes] ${file} exists but has no route registered. Add an entry to src/blogRoutes.ts to prevent a 404.`
      );
    }
  }
}
