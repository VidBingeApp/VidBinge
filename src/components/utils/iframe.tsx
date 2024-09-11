import React, { useEffect, useState } from "react";

function IframeMessage(): JSX.Element | null {
  const [visible, setVisible] = useState(false);
  const [isPremiumSubscriber, setIsPremiumSubscriber] = useState(false);

  useEffect(() => {
    async function fetchPremiumSites() {
      try {
        const response = await fetch(
          "https://embed.vidbinge.com/premiumSites.php",
        );
        if (!response.ok) {
          throw new Error("Failed to fetch premium sites");
        }
        const sites = await response.json();

        // Extract the referrer hostname
        const referrer = document.referrer
          ? new URL(document.referrer).hostname
          : "";

        // Debugging: log referrer and sites
        // eslint-disable-next-line no-console
        console.log("Extracted Referrer:", referrer);
        // eslint-disable-next-line no-console
        console.log("Premium Sites from API:", sites);

        // Check if referrer is in the premium sites list
        if (sites.includes(referrer)) {
          // eslint-disable-next-line no-console
          console.log("Referrer is a premium subscriber.");
          setIsPremiumSubscriber(true);
        } else {
          // eslint-disable-next-line no-console
          console.log("Referrer is NOT a premium subscriber.");
          setIsPremiumSubscriber(false);
        }
      } catch (error) {
        console.error("Error fetching premium sites:", error);
        setIsPremiumSubscriber(false); // Assume not a subscriber if error occurs
      }
    }

    // Only fetch premium sites if inside an iframe
    if (window.top !== window.self) {
      fetchPremiumSites();
    }
  }, []);

  useEffect(() => {
    if (window.top !== window.self && !isPremiumSubscriber) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [isPremiumSubscriber]);

  if (!visible) {
    return null;
  }

  return (
    <div
      id="iframe-message"
      className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white text-center space-y-6 p-4 z-10"
    >
      <a
        className="block tabbable rounded-full text-2xl mb-6"
        href="https://www.vidbinge.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex items-center space-x-2 rounded-full px-4 py-2 text-type-logo bg-pill-background bg-opacity-50 transition-[transform,background-color] hover:scale-105 hover:bg-pill-backgroundHover backdrop-blur-lg hover:text-type-logo active:scale-95">
          <span className="text-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 20.927 20.927"
            >
              <path
                d="M18.186,4.5V6.241H16.445V4.5H9.482V6.241H7.741V4.5H6V20.168H7.741V18.427H9.482v1.741h6.964V18.427h1.741v1.741h1.741V4.5Zm-8.7,12.186H7.741V14.945H9.482Zm0-3.482H7.741V11.464H9.482Zm0-3.482H7.741V7.982H9.482Zm8.7,6.964H16.445V14.945h1.741Zm0-3.482H16.445V11.464h1.741Zm0-3.482H16.445V7.982h1.741Z"
                transform="translate(10.018 -7.425) rotate(45)"
                fill="currentColor"
              />
            </svg>
          </span>
          <span className="font-semibold text-white">Vid Binge</span>
        </div>
      </a>
      <div>
        <p className="text-2xl sm:text-4xl font-bold">
          Watch More Movies & TV Shows in up to 4K
        </p>
        <a
          id="iframe-link"
          href="https://www.vidbinge.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl sm:text-4xl font-bold underline mt-2 block"
        >
          Visit VidBinge.com
        </a>
        <p className="text-xl sm:text-3xl font-bold mt-6">
          This Stream Will Start Shortly...
        </p>
      </div>
      <p className="absolute bottom-4 text-md sm:text-lg font-bold mt-6">
        This Stream is Provided By Vid Binge
      </p>
    </div>
  );
}

export default IframeMessage;
