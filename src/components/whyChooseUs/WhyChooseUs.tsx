import "./whyChooseUs.scss";

import mockup1 from "../../assets/images/mockup/Stationery_Mockup_1.webp";
import mockup2 from "../../assets/images/mockup/Stationery_Mockup_2.webp";
import mockup3 from "../../assets/images/mockup/Stationery_Mockup_3.webp";

import type { ReactElement } from "react";
import { useTranslation } from "react-i18next";

import GoToConsultationLink from "../goToConsultationLink/GoToConsultationLink";

export default function WhyChooseUs(): ReactElement {
  const { t } = useTranslation();

  const images = [mockup1, mockup2, mockup3];
  const whyChooseUsData = t("whyChooseUs.cards", { returnObjects: true }) as Array<{
    imageAlt: string;
    title: string;
    description: string;
    features: string[];
  }>;

  return (
    <section id="whyChooseUsComponent" className="whyChooseUs container">
      <header className="whyChooseUsHeader">
        <h2 className="whyChooseUsTitle" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-out-back" data-aos-delay="200">
          {t("whyChooseUs.title")}
        </h2>
        <p className="whyChooseUsSubtitle" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-out-back" data-aos-delay="400">
          {t("whyChooseUs.subtitle")}
        </p>
      </header>

      <div className="whyChooseUsGrid">
        {whyChooseUsData.map(function(item, index) {
          return (
            <div
              key={index}
              className="whyChooseUsCard"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-easing="ease-out-back"
              data-aos-delay={600 + (index * 150)}
            >
              <div className="cardImageContainer">
                <img
                  src={images[index]}
                  alt={item.imageAlt}
                  className="cardImage"
                  loading="lazy"
                />
              </div>

              <div className="cardContent">
                <h3 className="cardTitle">{item.title}</h3>
                <p className="cardDescription">{item.description}</p>

                <ul className="cardFeatures">
                  {item.features.map(function(feature, featureIndex) {
                    return (
                      <li key={featureIndex} className="cardFeature">
                        <span className="featureIcon">✓</span>
                        {feature}
                      </li>
                    );
                  })}
                </ul>

                <div className="cardAction">
                  <GoToConsultationLink />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}