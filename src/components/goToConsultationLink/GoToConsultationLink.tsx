import "./goToConsultationLink.scss";

import type { ReactElement } from "react";

import { Link } from "react-router-dom";
import { IoChevronForward } from "react-icons/io5";

export default function GoToConsultationLink(): ReactElement {
  return (
    <div id="goToConsultationLink">
      <Link
        to={"/"}
        className="consultationLink"
        aria-label="Obtenir une consultation"
      >
        <span className="consultationLinkText">Get a consultation</span>
        <div className="chevronContainer">
          <IoChevronForward className="chevronBack" />
          <IoChevronForward className="chevronFront" />
        </div>
      </Link>
    </div>
  );
}
