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
    // Check if there's a referrer
    if (document.referrer) {
      const referrer = new URL(document.referrer);

      // Fetch the premium sites from the server
      const fetchAndCheckPremiumSites = async () => {
        try {
          const response = await fetch(
            "https://www.vidbinge.dev/premiumSites.php",
          );
          const premiumSites = await response.json();
          // Check if the referrer is a premium site
          setIsPremiumSite(checkIfPremium(referrer, premiumSites));
        } catch (error) {
          setIsPremiumSite(false); // If fetch fails, assume it's not a premium site
        } finally {
          setIsReferrerChecked(true); // Mark the referrer check as complete
        }
      };
      fetchAndCheckPremiumSites();
    } else {
      setIsPremiumSite(false); // No referrer, assume not a premium site
      setIsReferrerChecked(true); // No referrer, so the check is complete
    }
  }, []);

  // If Ads Are Enabled Or Not A Premium Site, Load Ads
  useEffect(() => {
    // Only proceed after referrer check is complete
    if (isReferrerChecked) {
      if (enableAds && !isPremiumSite) {
        // If Ads are enabled and it's not a premium site, load the ads
        const script = document.createElement("script");
        script.id = "ads-script"; // Assigning an ID for easy reference
        script.src = "https://www.whvx.net/ads.js";
        script.async = true;

        // Append the script to the head
        document.head.appendChild(script);

        // Cleanup script when component unmounts or enableAds changes
        return () => {
          const adsScript = document.getElementById("cash");
          const existingScript = document.getElementById("ads-script");
          if (adsScript) {
            document.head.removeChild(adsScript);
          }
          if (existingScript) {
            document.head.removeChild(existingScript);
          }
        };
      }

      // Try to remove any existing ads script if the conditions aren't met
      const adsScript = document.getElementById("cash");
      const existingScript = document.getElementById("ads-script");
      if (adsScript) {
        document.head.removeChild(adsScript);
      }
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    }
  }, [enableAds, isPremiumSite, isReferrerChecked]);

  return null;
}
