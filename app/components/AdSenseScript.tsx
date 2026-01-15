"use client";

import { useEffect } from "react";

export default function AdSenseScript() {
  useEffect(() => {
    // Load AdSense script directly without Next.js Script component
    // to avoid data-nscript attribute that AdSense doesn't support
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9112023534705295";
    script.crossOrigin = "anonymous";
    
    // Check if script already exists
    const existingScript = document.querySelector(
      'script[src*="adsbygoogle.js"]'
    );
    
    if (!existingScript) {
      document.head.appendChild(script);
    }

    return () => {
      // Cleanup on unmount (though unlikely in layout)
      const scriptToRemove = document.querySelector(
        'script[src*="adsbygoogle.js"]'
      );
      if (scriptToRemove && scriptToRemove === script) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return null;
}
