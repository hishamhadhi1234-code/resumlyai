import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import heroImageUrl from "@/assets/hero-image.jpg?url";
import "./index.css";

// Inject a high-priority preload for the LCP hero image as early as possible,
// so the browser starts fetching it before React renders the <img>.
if (typeof document !== "undefined") {
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

createRoot(document.getElementById("root")!).render(<App />);
