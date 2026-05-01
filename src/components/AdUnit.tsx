import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    adsbygoogle: unknown[];
    requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
  }
}

interface AdUnitProps {
  slot: string;
  format?: string;
  responsive?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const AdUnit = ({
  slot,
  format = "auto",
  responsive = true,
  className = "",
  style = { display: "block" },
}: AdUnitProps) => {
  const pushed = useRef(false);
  const [ready, setReady] = useState(false);

  // Defer rendering + initialization of the ad until the browser is idle,
  // so AdSense doesn't trigger forced reflows during the critical render path / LCP.
  useEffect(() => {
    const schedule =
      typeof window !== "undefined" && typeof window.requestIdleCallback === "function"
        ? (cb: () => void) => window.requestIdleCallback!(cb, { timeout: 3000 })
        : (cb: () => void) => window.setTimeout(cb, 1500);

    const id = schedule(() => setReady(true));
    return () => {
      if (typeof id === "number") clearTimeout(id);
    };
  }, []);

  useEffect(() => {
    if (!ready || pushed.current) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch (e) {
      // adsbygoogle not yet available
    }
  }, [ready]);

  if (!ready) {
    // Reserve the slot space silently to avoid layout shift when the ad mounts.
    return <div aria-hidden="true" style={style} className={className} />;
  }

  return (
    <ins
      className={`adsbygoogle ${className}`}
      style={style}
      data-ad-client="ca-pub-9724637936499460"
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={responsive ? "true" : "false"}
    />
  );
};

export default AdUnit;
