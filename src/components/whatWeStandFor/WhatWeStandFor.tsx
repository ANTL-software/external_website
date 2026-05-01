import "./whatWeStandFor.scss";

import type { ReactElement } from "react";
import { useTranslation } from "react-i18next";

import branding from "../../assets/images/cards/branding.webp";
import conception from "../../assets/images/cards/conception.webp";
import conquete from "../../assets/images/cards/conquete.webp";
import fidelisation from "../../assets/images/cards/fidelisation.webp";
import retention from "../../assets/images/cards/retention.webp";
import onlineVisibility from "../../assets/images/cards/onlineVisibility.webp";

export default function WhatWeStandFor(): ReactElement {
  const { t } = useTranslation();

  const values = [
    {
      title: t("whatWeStandFor.value1.title"),
      description: t("whatWeStandFor.value1.description")
    },
    {
      title: t("whatWeStandFor.value2.title"),
      description: t("whatWeStandFor.value2.description")
    },
    {
      title: t("whatWeStandFor.value3.title"),
      description: t("whatWeStandFor.value3.description")
    },
    {
      title: t("whatWeStandFor.value4.title"),
      description: t("whatWeStandFor.value4.description")
    }
  ];

  const images = [branding, conception, conquete, fidelisation, retention, onlineVisibility];

  return (
    <section id="whatWeStandForComponent" className="whatWeStandFor container">
      <header className="whatWeStandForHeader">
        <h2 className="whatWeStandForTitle" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-out-back" data-aos-delay="200">
          {t("whatWeStandFor.title")}
        </h2>
      </header>

      <div className="valuesGrid">
        {values.map(function(value, index) {
          const delay = 600 + (index * 150);

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
                  src={images[index] || branding}
                  alt={`Value ${index + 1}`}
                  className="valueImage"
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
