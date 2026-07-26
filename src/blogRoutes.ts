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

type BlogRouteDef = {
  slug: string;
  file: string;
  /** Historical slugs that should 301-style redirect to `slug`. */
  aliases?: string[];
};

const registry: BlogRouteDef[] = [
  { slug: "will-ai-replace-jobs-2026", file: "./pages/BlogAIJobs.tsx", aliases: ["ai-replace-jobs-2026", "ai-jobs-2026"] },
  { slug: "top-10-resume-mistakes-freshers-india", file: "./pages/BlogResumeMistakes.tsx", aliases: ["resume-mistakes-freshers-india", "top-resume-mistakes-freshers"] },
  { slug: "simple-resume-format-freshers-india", file: "./pages/BlogSimpleResumeFormat.tsx", aliases: ["simple-resume-format-freshers"] },
  { slug: "best-skills-resume-freshers-india", file: "./pages/BlogBestSkills.tsx", aliases: ["best-skills-freshers-india", "best-skills-resume-freshers"] },
  { slug: "first-job-india-without-experience", file: "./pages/BlogFirstJobNoExperience.tsx", aliases: ["first-job-without-experience-india", "first-job-no-experience-india"] },
  { slug: "resume-vs-cv-india-freshers", file: "./pages/BlogResumeVsCV.tsx", aliases: ["resume-vs-cv-freshers-india"] },
  { slug: "pass-ats-resume-screening-india", file: "./pages/BlogPassATS.tsx", aliases: ["pass-ats-screening-india", "ats-resume-screening-india"] },
  { slug: "best-resume-templates-freshers-india", file: "./pages/BlogBestResumeTemplates.tsx", aliases: ["best-resume-templates-india", "resume-templates-freshers-india"] },
  { slug: "ultimate-guide-resume-freshers-india-2026", file: "./pages/BlogUltimateGuide.tsx", aliases: ["ultimate-guide-resume-freshers-2026", "ultimate-resume-guide-freshers-india-2026"] },
  { slug: "resume-vs-cv-difference-indian-job-seekers", file: "./pages/BlogResumeVsCVDifference.tsx", aliases: ["resume-vs-cv-difference", "resume-vs-cv-difference-india"] },
  { slug: "linkedin-guide-freshers-india-2026", file: "./pages/BlogLinkedInGuide.tsx", aliases: ["complete-linkedin-guide-freshers-india-2026", "linkedin-guide-freshers-2026"] },
  { slug: "high-income-skills-learn-free-2026", file: "./pages/BlogHighIncomeSkills.tsx", aliases: ["25-high-income-skills-2026", "high-income-skills-2026"] },
  { slug: "ai-changing-hiring-job-seekers-guide", file: "./pages/BlogAIHiring.tsx", aliases: ["ai-hiring-guide", "how-ai-is-changing-hiring"] },
  { slug: "resume-gets-past-computers-interviews-2026", file: "./pages/BlogResumePastComputers.tsx", aliases: ["resume-past-computers-2026", "resume-gets-past-computers-2026"] },
  { slug: "first-job-interview-india-2026", file: "./pages/BlogFirstInterviewIndia.tsx", aliases: ["prepare-first-job-interview-india-2026", "first-interview-india-2026"] },
  {
    slug: "resume-skills-freshers-2026",
    file: "./pages/BlogResumeSkills2026.tsx",
    aliases: ["resume-skills-freshers-2026-guide", "resume-skills-2026"],
  },
  { slug: "job-search-checklist-before-you-apply", file: "./pages/BlogJobSearchChecklist.tsx", aliases: ["ultimate-job-search-checklist", "job-search-checklist-2026"] },
];

export type BlogRoute = {
  slug: string;
  path: string;
  Component: LazyExoticComponent<ComponentType<unknown>>;
};

/** Historical `/blog/<from>` → canonical `/blog/<to>` redirect pairs. */
export type BlogRedirect = { from: string; to: string };

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

export const blogRedirects: BlogRedirect[] = registry.flatMap(({ slug, aliases }) =>
  (aliases ?? []).map((from) => ({ from: `/blog/${from}`, to: `/blog/${slug}` }))
);

// Dev-mode safety net: warn about any Blog*.tsx that isn't wired to a route,
// and about alias collisions with real slugs.
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
  const slugs = new Set(registry.map((r) => r.slug));
  for (const { from } of blogRedirects) {
    const aliasSlug = from.replace(/^\/blog\//, "");
    if (slugs.has(aliasSlug)) {
      // eslint-disable-next-line no-console
      console.warn(
        `[blogRoutes] alias "${aliasSlug}" collides with a real slug — remove it from aliases.`
      );
    }
  }
}

