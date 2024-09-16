import { useEffect } from "react";

import { usePreferencesStore } from "@/stores/preferences";

export function AdsScript(): JSX.Element | null {
  const enableAds = usePreferencesStore((s) => s.enableAds);

  useEffect(() => {
    if (enableAds) {
      const script = document.createElement("script");
      script.id = "ads-script"; // Assigning an ID for easy reference
      script.src = "https://www.whvx.net/ads.js";
      script.async = true;
      document.head.appendChild(script);

      // Cleanup script when component unmounts or enableAds changes
      return () => {
        const existingScript = document.getElementById("cash");
        if (existingScript) {
          document.head.removeChild(existingScript);
        }
      };
    }
    // Remove the script if enableAds is false
    const existingScript = document.getElementById("cash");
    if (existingScript) {
      document.head.removeChild(existingScript);
    }
  }, [enableAds]);

  // You can return null or any other JSX if you want to display something
  return null;
}
