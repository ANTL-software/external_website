import "./goToConsultationLink.scss";

import type { ReactElement } from "react";
import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";
import { IoChevronForward } from "react-icons/io5";

export default function GoToConsultationLink(): ReactElement {
  const { t } = useTranslation();

  return (
    <div id="goToConsultationLink">
      <Link
        to={"/contact_us"}
        className="consultationLink"
        aria-label={t("header.consultation")}
      >
        <span className="consultationLinkText">{t("header.consultation")}</span>
        <div className="chevronContainer">
          <IoChevronForward className="chevronBack" />
          <IoChevronForward className="chevronFront" />
        </div>
      </Link>
    </div>
  );
}
