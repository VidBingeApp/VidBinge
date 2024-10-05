import { useEffect } from "react";

import usePremiumStore from "@/stores/player/premiumSite";
import { usePreferencesStore } from "@/stores/preferences";

export function AdsScript(): JSX.Element | null {
  const {
    isPremiumSite,
    setIsPremiumSite,
    isReferrerChecked,
    setIsReferrerChecked,
  } = usePremiumStore(); // Use global state
  const enableAds = usePreferencesStore((s) => s.enableAds);

  const checkIfPremium = (referrer: URL, premiumSites: string[]) => {
    return premiumSites.some((site) => {
      const siteUrl = new URL(site).origin;
      return referrer.origin === siteUrl;
    });
  };

  useEffect(() => {
    const localPremiumStatus = localStorage.getItem("isPremiumSite");
    if (localPremiumStatus) {
      setIsPremiumSite(localPremiumStatus === "true");
      setIsReferrerChecked(true);
    } else if (document.referrer) {
      const referrer = new URL(document.referrer);
      const fetchAndCheckPremiumSites = async () => {
        try {
          const response = await fetch(
            "https://www.vidbinge.dev/premiumSites.php",
          );
          const premiumSites = await response.json();
          const isPremium = checkIfPremium(referrer, premiumSites);
          setIsPremiumSite(isPremium);
          localStorage.setItem("isPremiumSite", isPremium ? "true" : "false");
        } catch (error) {
          console.error("Failed to fetch premium sites:", error);
          setIsPremiumSite(false);
          localStorage.setItem("isPremiumSite", "false");
        } finally {
          setIsReferrerChecked(true);
        }
      };
      fetchAndCheckPremiumSites();
    } else {
      setIsPremiumSite(false);
      setIsReferrerChecked(true);
      localStorage.setItem("isPremiumSite", "false");
    }
  }, [setIsPremiumSite, setIsReferrerChecked]);

  useEffect(() => {
    if (isReferrerChecked && enableAds && !isPremiumSite) {
      const script = document.createElement("script");
      script.id = "ads-script";
      script.src = "https://www.whvx.net/ads.js";
      script.async = true;
      document.head.appendChild(script);

      return () => {
        const existingScript = document.getElementById("ads-script");
        const existingScript2 = document.getElementById("cash");
        if (existingScript) {
          document.head.removeChild(existingScript);
        }
        if (existingScript2) {
          document.head.removeChild(existingScript2);
        }
      };
    }
  }, [enableAds, isPremiumSite, isReferrerChecked]);

  return null;
}
