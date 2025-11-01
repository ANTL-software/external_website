import "./callToAction.scss";

import type { ReactElement } from "react";
import { Link } from "react-router-dom";

import GoToConsultationLink from "../goToConsultationLink/GoToConsultationLink";

export default function CallToAction(): ReactElement {
  const pathname = window.location.pathname;

  const getContent = () => {
    switch (pathname) {
      case "/":
        return {
          paragraph:
            "Transform your business with expert engineering, seamless migrations, and innovative digital solutions, no matter where you are.",
        };

      case "/about_us":
        return {
          paragraph:
            "At ABC Company, we are more than just a service provider—we’re your trusted partner in engineering success. With decades of experience and a commitment to excellence, we deliver tailored solutions that help businesses, from startups to global enterprises, achieve their goals.",
        };

      default:
        return {
          paragraph:
            "Transform your business with expert engineering, seamless migrations, and innovative digital solutions, no matter where you are.",
        };
    }
  };

  const content = getContent();

  return (
    <section id="callToActionComponent" className="callToActionSection">
      <p>{content.paragraph}</p>
      <div className="buttonContainer">
        <GoToConsultationLink />
        <Link to="/contact" className="button">
          View Case Studies
        </Link>
      </div>
    </section>
  );
}
