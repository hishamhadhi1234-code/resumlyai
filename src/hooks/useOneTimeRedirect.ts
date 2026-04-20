import { useCallback, useEffect, useState } from "react";

/**
 * Tracks (in localStorage) whether a given key has already been "used".
 * On first click → opens the external URL in a new tab.
 * On subsequent clicks → calls the fallback handler (normal behavior).
 */
export const useOneTimeRedirect = (storageKey: string, externalUrl: string) => {
  const [used, setUsed] = useState(false);

  useEffect(() => {
    try {
      setUsed(localStorage.getItem(storageKey) === "1");
    } catch {
      // ignore
    }
  }, [storageKey]);

  const handleClick = useCallback(
    (e: React.MouseEvent, fallback: () => void) => {
      if (!used) {
        e.preventDefault();
        try {
          localStorage.setItem(storageKey, "1");
        } catch {
          // ignore
        }
        setUsed(true);
        window.open(externalUrl, "_blank", "noopener,noreferrer");
        return;
      }
      // Already used → normal behavior
      fallback();
    },
    [used, storageKey, externalUrl]
  );

  return { used, handleClick };
};
