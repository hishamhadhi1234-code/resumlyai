import { useEffect } from "react";

// Loads the third-party popunder/CPM ad script once, after the page is idle,
// so it never blocks rendering or interferes with the app.
const PopunderAd = () => {
  useEffect(() => {
    const load = () => {
      const s = document.createElement("script");
      s.async = true;
      s.src =
        "https://pl29193788.profitableratecpmnetwork.com/9a/38/a7/9a38a75978dc088581524d4b43071751.js";
      document.body.appendChild(s);
    };
    if ("requestIdleCallback" in window) {
      (window as Window & { requestIdleCallback: (cb: () => void, o?: { timeout: number }) => void })
        .requestIdleCallback(load, { timeout: 5000 });
    } else {
      setTimeout(load, 3000);
    }
  }, []);
  return null;
};

export default PopunderAd;
