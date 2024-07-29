import React, { useEffect, useState } from "react";

interface RedirectionWrapperProps {
  children: React.ReactNode;
}

export function RedirectionWrapper({ children }: RedirectionWrapperProps) {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.get("redir") === "sudoflix") {
      setShowPopup(true);
    }
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
          <div className="relative bg-purple-950 p-4 md:p-8 rounded-xl shadow-2xl text-center text-white w-11/12 md:w-3/4 lg:w-1/2 xl:w-2/5 2xl:max-w-2xl max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={handleClose}
              className="absolute top-0 right-0 mt-2 mr-2 text-white bg-transparent hover:bg-purple-700 p-1 rounded-full focus:outline-none"
              aria-label="Close modal"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h2 className="text-xl md:text-3xl font-bold mb-4 md:mb-6 text-purple-300">
              Welcome to VidBinge.com!
            </h2>
            <div className="space-y-3 md:space-y-4 text-sm md:text-base leading-relaxed text-gray-300">
              <p>
                Hello there, On July 25th 2024 Sudo-Flix.lol announced its
                closure due to a Cease and Desist Letter. You can discover more
                about this at their respective discord server!
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
              className="mt-4 md:mt-6 px-5 md:px-6 py-2 text-sm md:text-base bg-purple-700 text-white rounded-full hover:bg-purple-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
              onClick={handleClose}
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
