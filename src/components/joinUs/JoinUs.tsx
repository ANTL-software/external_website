import "./joinUs.scss";

import type { ReactElement } from "react";
import { useTranslation } from "react-i18next";

export default function JoinUs(): ReactElement {
  const { t } = useTranslation();

  return (
    <section id="joinUsComponent" className="joinUs container">
      <header className="joinUsHeader">
        <h2 className="joinUsTitle" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-out-back" data-aos-delay="200">
          {t("joinUs.title")}
        </h2>
      </header>
    </section>
  );
}
