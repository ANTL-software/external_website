import "./ourExpertise.scss";

import branding from "../../assets/images/cards/branding.webp";
import conception from "../../assets/images/cards/conception.webp";
import conquete from "../../assets/images/cards/conquete.webp";
import fidelisation from "../../assets/images/cards/fidelisation.webp";
import retention from "../../assets/images/cards/retention.webp";
import onlineVisibility from "../../assets/images/cards/onlineVisibility.webp";

import type { ReactElement } from "react";
import { useTranslation } from "react-i18next";

import ExpertiseCard from "../expertiseCard/ExpertiseCard";

export default function OurExpertise(): ReactElement {
  const { t } = useTranslation();

  const expertiseData = [
    {
      image: conquete,
      imageAlt: t("ourExpertise.conquest.title"),
      subtitle: t("ourExpertise.conquest.title"),
      description: t("ourExpertise.conquest.description"),
      cardId: "conquete",
    },
    {
      image: fidelisation,
      imageAlt: t("ourExpertise.loyalty.title"),
      subtitle: t("ourExpertise.loyalty.title"),
      description: t("ourExpertise.loyalty.description"),
      cardId: "fidelisation",
    },
    {
      image: retention,
      imageAlt: t("ourExpertise.retention.title"),
      subtitle: t("ourExpertise.retention.title"),
      description: t("ourExpertise.retention.description"),
      cardId: "retention",
    },
    {
      image: conception,
      imageAlt: t("ourExpertise.conception.title"),
      subtitle: t("ourExpertise.conception.title"),
      description: t("ourExpertise.conception.description"),
      cardId: "conception",
    },
    {
      image: onlineVisibility,
      imageAlt: t("ourExpertise.onlineVisibility.title"),
      subtitle: t("ourExpertise.onlineVisibility.title"),
      description: t("ourExpertise.onlineVisibility.description"),
      cardId: "branding",
    },
    {
      image: branding,
      imageAlt: t("ourExpertise.branding.title"),
      subtitle: t("ourExpertise.branding.title"),
      description: t("ourExpertise.branding.description"),
      cardId: "conseil",
    },
  ];

  return (
    <section id="ourExpertiseComponent" className="ourExpertise">
      <header className="expertiseHeader">
        <h2 className="expertiseTitle" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-out-back" data-aos-delay="200">
          {t("ourExpertise.title")}
        </h2>
        <p className="expertiseSubtitle" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-out-back" data-aos-delay="400">
          {t("ourExpertise.subtitle")}
        </p>
      </header>

      <div className="expertiseGrid">
        {expertiseData.map(function(expertise, index) {
          const isFirstRow = index < 3;
          const animationType = isFirstRow ? "fade-right" : "fade-up";
          const delay = isFirstRow ? 400 + (index * 100) : 650;

          return (
            <div
              key={index}
              id={expertise.cardId}
              data-aos={animationType}
              data-aos-duration="800"
              data-aos-easing="ease-out-back"
              data-aos-delay={delay}
            >
              <ExpertiseCard
                image={expertise.image}
                imageAlt={expertise.imageAlt}
                subtitle={expertise.subtitle}
                description={expertise.description}
                linkTo="/contact_us"
                linkText={t("ourExpertise.contactLink")}
                ariaLabel={`En savoir plus sur ${expertise.subtitle}`}
                imageClassName={`expertiseImage ${index === 0 ? "expertiseImageConquete" : ""} ${index === 1 ? "expertiseImageFidelisation" : ""} ${index === 2 ? "expertiseImageRetention" : ""} ${index === 3 ? "expertiseImageConception" : ""} ${index === 4 ? "expertiseImageOnlineVisibility" : ""} ${index === 5 ? "expertiseImageBranding" : ""}`}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
