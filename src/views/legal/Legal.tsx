import "./legal.scss";

import type { ReactElement } from "react";
import { useTranslation } from "react-i18next";

import Header from "../../components/header/Header";
import BackgroundCircle from "../../components/backgroundCircle/BackgroundCircle";
import BackgroundGrid from "../../components/backgroundGrid/BackgroundGrid";
import Footer from "../../components/footer/Footer";

export default function Legal(): ReactElement {
  const { t } = useTranslation();

  return (
    <div id="legal">
      <BackgroundCircle />
      <BackgroundGrid />
      <Header />
      <main className="container legalContainer">
        <h1 className="legalTitle">{t("legal.title")}</h1>
        <section className="legalSection">
          <div className="legalContent">
            <p>{t("legal.companyInfo")}</p>
            <p>{t("legal.activity")}</p>
            <p>{t("legal.director")}</p>
            <p>{t("legal.hosting")}</p>
            <h3>{t("legal.contactTitle")}</h3>
            <ul>
              <li>{t("legal.contactPhone")}</li>
              <li>{t("legal.contactEmail")}</li>
              <li>{t("legal.contactAddress")}</li>
            </ul>
            <p>{t("legal.rights")}</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
