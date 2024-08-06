import React, { useEffect } from "react";

import { usePreferencesStore } from "@/stores/preferences";

interface AdsWrapperProps {
  children: React.ReactNode;
}

export function AdsWrapper({ children }: AdsWrapperProps) {
  const enableAds = usePreferencesStore((s) => s.enableAds);

  useEffect(() => {
    if (enableAds) {
      const script = document.createElement("script");
      script.src = "https://www.whvx.net/ads.js";
      script.async = true;
      document.head.appendChild(script);

      // Cleanup script when component unmounts or enableAds changes
      return () => {
        document.head.removeChild(script);
      };
    }

    // Remove the "cash" script if enableAds is false
    const cashScript = document.getElementById("cash");
    if (cashScript) {
      document.head.removeChild(cashScript);
    }
  }, [enableAds]);

  return <div>{children}</div>;
}
