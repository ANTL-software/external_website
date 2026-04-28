import "./callToAction.scss";

import type { ReactElement } from "react";

import GoToConsultationLink from "../goToConsultationLink/GoToConsultationLink";

export default function CallToAction(): ReactElement {
  const pathname = window.location.pathname;

  const getContent = () => {
    switch (pathname) {
      case "/":
        return {
          paragraph:
            "Boostez votre performance commerciale avec des solutions sur mesure. De la conquête à la fidélisation, nous transformons l’expérience client en levier de croissance.",
        };

      case "/about_us":
        return {
          paragraph:
            "Chez antl, nous sommes plus qu’un prestataire—votre partenaire stratégique. Avec une approche centrée sur l’humain et des solutions digitales innovantes, nous accompagnons les entreprises dans leur développement commercial.",
        };

      default:
        return {
          paragraph:
            "Boostez votre performance commerciale avec des solutions sur mesure. De la conquête à la fidélisation, nous transformons l’expérience client en levier de croissance.",
        };
    }
  };

  const content = getContent();

  return (
    <section id="callToActionComponent" className="callToActionSection">
      <p>{content.paragraph}</p>
      <div className="buttonContainer">
        <GoToConsultationLink />
      </div>
    </section>
  );
}
