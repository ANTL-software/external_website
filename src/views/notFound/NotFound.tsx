import "./notFound.scss";

import type { ReactElement } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import BackgroundCircle from "../../components/backgroundCircle/BackgroundCircle";
import BackgroundGrid from "../../components/backgroundGrid/BackgroundGrid";

export default function NotFound(): ReactElement {
  const { t } = useTranslation();

  return (
    <div id="notFound">
      <BackgroundCircle />
      <BackgroundGrid />
      <Header />
      <main className="container">
        <div className="notFoundContent" data-aos="fade-up" data-aos-duration="800">
          <h1 className="notFoundTitle">{t("notFound.title")}</h1>
          <h2 className="notFoundSubtitle">{t("notFound.subtitle")}</h2>
          <p className="notFoundDescription">{t("notFound.description")}</p>
          <Link to="/" className="homeButton">
            <span>{t("notFound.back")}</span>
            <span className="buttonArrow">→</span>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
