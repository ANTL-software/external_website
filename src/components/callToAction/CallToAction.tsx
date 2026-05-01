import "./callToAction.scss";
import callToActionImg from "../../assets/images/callToAction.webp";

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
    <section id="callToActionComponent" className="callToActionSection container">
      <div className="callToActionContent">
        <figure className="callToActionImage">
          <img
            src={callToActionImg}
            alt="Représentation d'un graphique de croissance"
          />
        </figure>
        <div className="callToActionText">
          <p>{getDescription()}</p>
        </div>
      </div>
    </section>
  );
}
