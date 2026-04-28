import "./backToTop.scss";

import type { ReactElement } from "react";
import { useEffect, useState } from "react";
import { IoArrowUp } from "react-icons/io5";
import { useTranslation } from "react-i18next";

export default function BackToTop(): ReactElement {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(function() {
    let ticking = false;

    function handleScroll() {
      if (!ticking) {
        requestAnimationFrame(function() {
          if (window.scrollY > 300) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return function() {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  return (
    <button
      className={`backToTopButton ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
      aria-label={t("backToTop.ariaLabel")}
      title={t("backToTop.title")}
    >
      <IoArrowUp className="backToTopIcon" />
    </button>
  );
}
