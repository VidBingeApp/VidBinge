import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { Icon, Icons } from "@/components/Icon";

export function BackLink(props: { url: string }) {
  const { t } = useTranslation();
  const linkRef = useRef<HTMLAnchorElement>(null);

  // Function to check if the site is loaded in an iframe
  const isInIframe = () => {
    try {
      return window.top && window.self !== window.top;
    } catch (e) {
      return true; // Catching security exceptions in case of cross-origin iframes
    }
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (isInIframe()) {
        e.preventDefault();
        if (window.top) {
          window.top.location.href = props.url;
        }
      }
    };

    const linkElement = linkRef.current;
    if (linkElement) {
      linkElement.addEventListener("click", handleClick);
    }

    return () => {
      if (linkElement) {
        linkElement.removeEventListener("click", handleClick);
      }
    };
  }, [props.url]);

  return (
    <div className="flex items-center">
      <Link
        ref={linkRef}
        to={props.url}
        className="py-1 -my-1 px-2 -mx-2 tabbable rounded-lg flex items-center cursor-pointer text-type-secondary hover:text-white transition-colors duration-200 font-medium"
      >
        <Icon className="mr-2" icon={Icons.ARROW_LEFT} />
        <span className="md:hidden">{t("player.back.short")}</span>
        <span className="hidden md:block">{t("player.back.default")}</span>
      </Link>
    </div>
  );
}
