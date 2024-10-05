import { useEffect, useState } from "react";

import { usePreferencesStore } from "@/stores/preferences";

export function AdsScript(): JSX.Element | null {
  const enableAds = usePreferencesStore((s) => s.enableAds);
  const [isPremiumSite, setIsPremiumSite] = useState(false);
  const [isReferrerChecked, setIsReferrerChecked] = useState(false); // Track when referrer check is complete

  // Function to determine if the referrer URL is a premium site
  const checkIfPremium = (referrer: URL, premiumSites: string[]) => {
    return premiumSites.some((site) => {
      const siteUrl = new URL(site).origin;
      return referrer.origin === siteUrl;
    });
  };

  // Check If Premium Site or Handle No Referrer
  useEffect(() => {
    // Check local storage first
    const localPremiumStatus = localStorage.getItem("isPremiumSite");
    if (localPremiumStatus) {
      setIsPremiumSite(localPremiumStatus === "true");
      setIsReferrerChecked(true);
    } else if (document.referrer) {
      // Changed this part to an else if
      const referrer = new URL(document.referrer);
      const fetchAndCheckPremiumSites = async () => {
        try {
          const response = await fetch(
            "https://www.vidbinge.dev/premiumSites.php",
          );
          const premiumSites = await response.json();
          const isPremium = checkIfPremium(referrer, premiumSites);
          setIsPremiumSite(isPremium);
          // Save the result to local storage
          localStorage.setItem("isPremiumSite", isPremium ? "true" : "false");
        } catch (error) {
          setIsPremiumSite(false); // If fetch fails, assume it's not a premium site
          localStorage.setItem("isPremiumSite", "false");
        } finally {
          setIsReferrerChecked(true); // Mark the referrer check as complete
        }
      };
      fetchAndCheckPremiumSites();
    } else {
      setIsPremiumSite(false); // No referrer, assume not a premium site
      setIsReferrerChecked(true); // No referrer, so the check is complete
      localStorage.setItem("isPremiumSite", "false");
    }
  }, []);

  // If Ads Are Enabled Or Not A Premium Site, Load Ads
  useEffect(() => {
    // Only proceed after referrer check is complete
    if (isReferrerChecked) {
      if (enableAds && !isPremiumSite) {
        const script = document.createElement("script");
        script.id = "ads-script";
        script.src = "https://www.whvx.net/ads.js";
        script.async = true;
        document.head.appendChild(script);
        return () => {
          const existingScript = document.getElementById("ads-script");
          if (existingScript) {
            document.head.removeChild(existingScript);
          }
        };
      }
      // Remove any existing ads script if conditions aren't met
      const existingScript = document.getElementById("ads-script");
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    }
  }, [enableAds, isPremiumSite, isReferrerChecked]);

  return null;
}
