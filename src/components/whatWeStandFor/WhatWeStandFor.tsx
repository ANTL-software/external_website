import "./whatWeStandFor.scss";

import type { ReactElement } from "react";

import mockup1 from "../../assets/images/mockup/Stationery_Mockup_1.webp";
import mockup2 from "../../assets/images/mockup/Stationery_Mockup_2.webp";
import mockup3 from "../../assets/images/mockup/Stationery_Mockup_3.webp";
import mockup4 from "../../assets/images/mockup/Stationery_Mockup_4.webp";

export default function WhatWeStandFor(): ReactElement {
  const values = [
    {
      title: "Spécialistes de la prospection",
      description:
        "Avec une forte compréhension des besoins spécifiques du secteur et des besoins de ses clients : les commerciaux sont immergés chez le client, formés par antl et informés par des mises à jour régulières de l’évolution du marché et des produits des clients.",
      image: mockup1,
      imageAlt: "Innovation concept illustration",
    },
    {
      title: " Stratégie de personnalisation",
      description:
        "Pour répondre aux attentes de ses partenaires : l’équipe managériale d’antl assure un suivi quotidien de la relation client par des analyses statistiques de la production et de la qualité des appels, ainsi qu’un feed-back régulier avec les commerciaux.",
      image: mockup2,
      imageAlt: "Reliability concept illustration",
    },
    {
      title: "Capacité d’adaptation rapide",
      description:
        "Le recrutement, le renforcement et la formation des équipes sont dédiés à chaque projet, et la possibilité de changer de mission est proposée aux commerciaux selon leurs compétences et leurs appétences. Le télétravail permet à antl de disposer d’un réseau de commerciaux à l’échelle nationale et internationale.",
      image: mockup3,
      imageAlt: "Collaboration concept illustration",
    },

    {
      title: "Faire appel à antl c'est...",
      description:
        "...redéfinir leur stratégie de communication, externaliser la force de vente, réduire les coûts opérationnels, améliorer la qualité de l’expérience client et le fidéliser grace à des technologies avancées.",
      image: mockup4,
      imageAlt: "Collaboration concept illustration",
    },
  ];

  return (
    <section id="whatWeStandForComponent" className="whatWeStandFor container">
      <header className="whatWeStandForHeader">
        <h2 className="whatWeStandForTitle" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-out-back" data-aos-delay="200">
          Nos atouts
        </h2>
        {/* <p className="whatWeStandForSubtitle" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-out-back" data-aos-delay="400">
          Our unwavering values shape our approach to delivering impactful solutions.
        </p> */}
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
                  src={value.image}
                  alt={value.imageAlt}
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