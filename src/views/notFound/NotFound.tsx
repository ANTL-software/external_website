import "./notFound.scss";

import type { ReactElement } from "react";
import { Link } from "react-router-dom";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import BackgroundCircle from "../../components/backgroundCircle/BackgroundCircle";
import BackgroundGrid from "../../components/backgroundGrid/BackgroundGrid";

export default function NotFound(): ReactElement {
  return (
    <div id="notFound">
      <BackgroundCircle />
      <BackgroundGrid />
      <Header />
      <main className="container">
        <div className="notFoundContent" data-aos="fade-up" data-aos-duration="800">
          <h1 className="notFoundTitle">404</h1>
          <h2 className="notFoundSubtitle">Page non trouvée</h2>
          <p className="notFoundDescription">
            Désolé, la page que vous recherchez n'existe pas ou n'est pas encore disponible.
          </p>
          <Link to="/" className="homeButton">
            <span>Retour à l'accueil</span>
            <span className="buttonArrow">→</span>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
