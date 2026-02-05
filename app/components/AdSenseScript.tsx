"use client";

import { useEffect } from "react";

export default function AdSenseScript() {
  useEffect(() => {
    // Defer AdSense until after first paint to improve LCP and TBT (Performance)
    const load = () => {
      const existingScript = document.querySelector('script[src*="adsbygoogle.js"]');
      if (existingScript) return;
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9112023534705295";
      script.crossOrigin = "anonymous";
      document.head.appendChild(script);
    };
    if (typeof requestIdleCallback !== "undefined") {
      requestIdleCallback(load, { timeout: 2000 });
    } else {
      setTimeout(load, 1000);
    }
  }, []);

  return null;
}
