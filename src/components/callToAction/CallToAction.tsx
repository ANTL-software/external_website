import "./callToAction.scss";

import type { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

export default function CallToAction(): ReactElement {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const getDescription = () => {
    switch (pathname) {
      case "/":
        return t("callToAction.home");
      case "/about_us":
        return t("callToAction.about");
      default:
        return t("callToAction.home");
    }
  };

  return (
    <section id="callToActionComponent" className="callToActionSection">
      <p>{ getDescription() }</p>
    </section>
  );
}
