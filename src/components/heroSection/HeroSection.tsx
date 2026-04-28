import "./heroSection.scss";

import type { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

export default function HeroSection(): ReactElement {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const getContent = () => {
    switch (pathname) {
      case "/":
        return {
          title: t("hero.title"),
          firstLine: t("hero.firstLine"),
          secondLine: t("hero.secondLine"),
        };

      case "/about_us":
        return {
          title: t("hero.aboutTitle"),
          firstLine: t("hero.aboutFirstLine"),
          secondLine: t("hero.aboutSecondLine"),
        };

      default:
        return {
          title: t("hero.title"),
          firstLine: t("hero.firstLine"),
          secondLine: t("hero.secondLine"),
        };
    }
  };

  const content = getContent();

  return (
    <section id="heroSectionComponent" className="heroSection">
      <h1>{content.title}</h1>
      <blockquote>
        <span className="firstLine">{content.firstLine}</span>
        {content.secondLine && <span className="secondLine">{content.secondLine}</span>}
      </blockquote>
    </section>
  );
}
