import "./heroSection.scss";

import type { ReactElement } from "react";

export default function HeroSection(): ReactElement {
  const pathname = window.location.pathname;

  const getContent = () => {
    switch (pathname) {
      case "/":
        return {
          title: "Expert de l'experience client",
          firstLine:
            "Votre partenaire pour optimiser vos performances commerciales,",
          secondLine:
            "et améliorer votre relation client.",
        };

      case "/about_us":
        return {
          title: "About Us",
          firstLine: "Driving Innovation, Empowering Businesses Worldwide",
          secondLine: null,
        };

      default:
        return {
          title: "Empowering Global Businesses",
          firstLine:
            "From startups to multinational corporations, we deliver scalable,",
          secondLine:
            "reliable, and cost-effective services to address your unique challenges.",
        };
    }
  };

  const content = getContent();

  return (
    <section id="heroSectionComponent" className="heroSection">
      <h1>{content.title}</h1>
      <blockquote>
        <span className="firstLine">{content.firstLine}</span>
        {content.secondLine && (
          <span className="secondLine">{content.secondLine}</span>
        )}
      </blockquote>
    </section>
  );
}
