import "./goToConsultationLink.scss";

import type { ReactElement } from "react";

import { Link } from "react-router-dom";
import { IoChevronForward } from "react-icons/io5";

export default function GoToConsultationLink(): ReactElement {
  return (
    <div id="goToConsultationLink">
      <Link
        to={"/contact_us"}
        className="consultationLink"
        aria-label="Nous contacter"
      >
        <span className="consultationLinkText">Contactez-nous</span>
        <div className="chevronContainer">
          <IoChevronForward className="chevronBack" />
          <IoChevronForward className="chevronFront" />
        </div>
      </Link>
    </div>
  );
}
