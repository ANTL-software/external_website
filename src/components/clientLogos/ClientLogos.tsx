import "./clientLogos.scss";

import type { ReactElement } from "react";
import { useTranslation } from "react-i18next";

export default function ClientLogos(): ReactElement {
  const { t } = useTranslation();

  const clientData = [
    { icon: "⚡", name: t("clientLogos.boltshift"), className: "boltshift" },
    { icon: "📦", name: t("clientLogos.lightbox"), className: "lightbox" },
    { icon: "🍃", name: t("clientLogos.featherdev"), className: "featherdev" },
    { icon: "🔮", name: t("clientLogos.spherule"), className: "spherule" },
    { icon: "🌐", name: t("clientLogos.globalbank"), className: "globalbank" },
    { icon: "☀️", name: t("clientLogos.nietzsche"), className: "nietzsche" }
  ];

  return (
    <section id="clientLogosComponent" className="clientLogosSection">
      <h2 data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-out-back" data-aos-delay="200">
        {t("clientLogos.title")}
      </h2>
      <ul
        className="clientLogos"
        role="list"
        aria-label="Our client companies"
        data-aos="fade-right"
        data-aos-duration="1200"
        data-aos-easing="ease-out-quart"
        data-aos-delay="400"
      >
        {clientData.map(function(client, index) {
          return (
            <li
              key={index}
              className="logoItem"
            >
              <figure className={`logoIcon ${client.className}`} aria-label={`${client.name} logo`}>
                {client.icon}
              </figure>
              <cite className="logoText">{client.name}</cite>
            </li>
          );
        })}
      </ul>
    </section>
  );
}