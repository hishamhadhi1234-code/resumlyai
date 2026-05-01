import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import heroImageUrl from "@/assets/hero-image.jpg?url";
import "./index.css";

// Inject a high-priority preload for the LCP hero image only on viewports where
// it's actually visible (lg breakpoint = 1024px). On mobile the hero image is
// hidden via `hidden lg:block`, so preloading it would waste bandwidth and hurt LCP.
if (typeof document !== "undefined" && typeof window !== "undefined") {
  const isLargeViewport = window.matchMedia("(min-width: 1024px)").matches;
  if (isLargeViewport) {
    const existing = document.head.querySelector(
      `link[rel="preload"][href="${heroImageUrl}"]`
    );
    if (!existing) {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = heroImageUrl;
      link.setAttribute("fetchpriority", "high");
      document.head.appendChild(link);
    }
  }
}

createRoot(document.getElementById("root")!).render(<App />);
