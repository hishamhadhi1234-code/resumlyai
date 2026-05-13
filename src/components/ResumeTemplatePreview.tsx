import type { ResumeTemplate, TemplateAccent } from "@/data/resumeTemplates";

const ACCENT_HEX: Record<TemplateAccent, string> = {
  blue: "#3b82f6",
  purple: "#8b5cf6",
  emerald: "#10b981",
  rose: "#f43f5e",
  amber: "#f59e0b",
  slate: "#475569",
  indigo: "#6366f1",
  teal: "#14b8a6",
  sky: "#0ea5e9",
};

type Props = {
  template: ResumeTemplate;
  className?: string;
};

/**
 * Lightweight inline SVG mock of a resume layout.
 * Pure presentation — no real data, no images. Renders fast, scales crisply.
 */
const ResumeTemplatePreview = ({ template, className }: Props) => {
  const accent = ACCENT_HEX[template.accent];
  const { layout } = template;

  return (
    <svg
      viewBox="0 0 240 320"
      className={className}
      role="img"
      aria-label={`${template.name} resume template preview`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="240" height="320" fill="#ffffff" />

      {layout === "header-band" && (
        <>
          <rect x="0" y="0" width="240" height="48" fill={accent} />
          <rect x="16" y="16" width="100" height="8" rx="2" fill="#ffffff" />
          <rect x="16" y="30" width="60" height="5" rx="2" fill="#ffffff" opacity="0.85" />
        </>
      )}

      {layout === "single" && (
        <>
          <rect x="16" y="20" width="120" height="10" rx="2" fill="#0f172a" />
          <rect x="16" y="36" width="80" height="5" rx="2" fill="#64748b" />
          <rect x="16" y="48" width="200" height="1" fill={accent} />
        </>
      )}

      {layout === "minimal" && (
        <>
          <rect x="24" y="32" width="100" height="9" rx="2" fill="#0f172a" />
          <rect x="24" y="46" width="50" height="4" rx="2" fill="#94a3b8" />
        </>
      )}

      {layout === "two-column" && (
        <>
          <rect x="0" y="0" width="80" height="320" fill={accent} opacity="0.12" />
          <rect x="12" y="20" width="56" height="8" rx="2" fill={accent} />
          <rect x="12" y="34" width="40" height="4" rx="2" fill="#475569" />
          {/* Sidebar bullets */}
          {[60, 76, 92, 108, 130, 146, 162].map((y) => (
            <rect key={y} x="12" y={y} width="56" height="3" rx="1" fill="#64748b" />
          ))}
          {/* Right column */}
          <rect x="92" y="20" width="100" height="7" rx="2" fill="#0f172a" />
          {[40, 56, 72, 92, 108, 124, 144, 160, 176, 196, 212, 228].map((y) => (
            <rect key={y} x="92" y={y} width={y % 2 === 0 ? 130 : 110} height="3" rx="1" fill="#94a3b8" />
          ))}
        </>
      )}

      {/* Body lines for non two-column layouts */}
      {layout !== "two-column" && (
        <g>
          {/* Section: Experience */}
          <rect x="16" y={layout === "header-band" ? 70 : 70} width="60" height="6" rx="2" fill={accent} />
          {[86, 100, 114, 128].map((y) => (
            <rect key={y} x="16" y={y} width={y % 28 === 0 ? 200 : 180} height="3" rx="1" fill="#94a3b8" />
          ))}
          {/* Section: Education */}
          <rect x="16" y="156" width="60" height="6" rx="2" fill={accent} />
          {[172, 186, 200].map((y) => (
            <rect key={y} x="16" y={y} width={y % 28 === 0 ? 200 : 170} height="3" rx="1" fill="#94a3b8" />
          ))}
          {/* Section: Skills */}
          <rect x="16" y="226" width="60" height="6" rx="2" fill={accent} />
          {[242, 256, 270].map((y) => (
            <rect key={y} x="16" y={y} width={y % 28 === 0 ? 200 : 160} height="3" rx="1" fill="#94a3b8" />
          ))}
        </g>
      )}
    </svg>
  );
};

export default ResumeTemplatePreview;
