import "./whatWeStandFor.scss";

import type { ReactElement } from "react";
import { useTranslation } from "react-i18next";

import prospection from "../../assets/images/cards/prospection.webp";
import personnalisation from "../../assets/images/cards/personnalisation.webp";
import adaptation from "../../assets/images/cards/adaptation.webp";
import antl from "../../assets/images/cards/antl.webp";

export default function WhatWeStandFor(): ReactElement {
  const { t } = useTranslation();

  const values = [
    {
      title: t("whatWeStandFor.value1.title"),
      description: t("whatWeStandFor.value1.description"),
    },
    {
      title: t("whatWeStandFor.value2.title"),
      description: t("whatWeStandFor.value2.description"),
    },
    {
      title: t("whatWeStandFor.value3.title"),
      description: t("whatWeStandFor.value3.description"),
    },
    {
      title: t("whatWeStandFor.value4.title"),
      description: t("whatWeStandFor.value4.description"),
    },
  ];

  const images = [prospection, antl, personnalisation, adaptation];

  return (
    <section id="whatWeStandForComponent" className="whatWeStandFor container">
      <header className="whatWeStandForHeader">
        <h2
          className="whatWeStandForTitle"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-easing="ease-out-back"
          data-aos-delay="200"
        >
          {t("whatWeStandFor.title")}
        </h2>
      </header>

      <div className="valuesGrid">
        {values.map(function (value, index) {
          const delay = 600 + index * 150;

          return (
            <article
              key={index}
              className="valueCard"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-easing="ease-out-back"
              data-aos-delay={delay}
            >
              <div className="valueImageContainer">
                <img
                  src={images[index]}
                  alt={`Value ${index + 1}`}
                  className={`valueImage ${index === 0 ? "valueImageProspection" : ""} ${index === 1 ? "valueImageAntl" : ""} ${index === 2 ? "valueImagePersonnalisation" : ""} ${index === 3 ? "valueImageAdaptation" : ""}`}
                  loading="lazy"
                />
              </div>

              <div className="valueContent">
                <h3 className="valueTitle">{value.title}</h3>
                <p className="valueDescription">{value.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
