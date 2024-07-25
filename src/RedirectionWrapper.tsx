import React, { useEffect, useState } from "react";

interface RedirectionWrapperProps {
  children: React.ReactNode;
}

export function RedirectionWrapper({ children }: RedirectionWrapperProps) {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const hasSeenPopup = localStorage.getItem("hasSeenRedirPopup");
    if (searchParams.get("redir") === "sudoflix" && !hasSeenPopup) {
      setShowPopup(true);
    }
  }, []);

  const closePopup = () => {
    setShowPopup(false);
    localStorage.setItem("hasSeenRedirPopup", "true");
  };

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50 p-4">
          <div className="bg-purple-950 p-4 sm:p-8 rounded-xl shadow-2xl text-center text-white w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-purple-300">
              Welcome to Vidbinge.com!
            </h2>
            <div className="space-y-3 sm:space-y-4 text-gray-300 text-xs sm:text-sm leading-relaxed">
              <p>
                Hello there, On July 25th 2024 Sudo-Flix.lol announced its
                closure due to a Cease and Desist Letter. You can discover more
                about this at their respective discord server at
                discord.gg/SudoFlix!
              </p>
              <p>
                In lieu of that, we have been entrusted as the Official
                alternative instance!
              </p>
              <p>
                Our backend has been synced with theirs, ensuring full
                streamlined conversion for our members. This means you can
                safely use this site with all your data securely transferred,
                using the same login credentials as before.
              </p>
              <p>
                We recommend using this site if you were previously using
                Sudo-Flix or any of its Official instances. We also advise
                migrating to our discord server and other social media platforms
                listed on this site or our server if you were part of any
                Sudo-Flix communities.
              </p>
              <p>
                Your support would be greatly appreciated during this
                transition. We highly recommend joining our discord server for
                easier communication and support.
              </p>
              <p>
                We apologize for any inconvenience and appreciate your patience
                at this time.
              </p>
              <p>
                With best regards,
                <br />
                The Sudo-Flix, Movie-Web and VidBinge Team
              </p>
            </div>
            <button
              type="button"
              className="mt-4 sm:mt-6 px-4 sm:px-6 py-2 bg-purple-700 text-white text-sm sm:text-base rounded-full hover:bg-purple-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
      {children}
    </>
  );
}
