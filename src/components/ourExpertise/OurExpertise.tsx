import "./ourExpertise.scss";

import mockup1 from "../../assets/images/mockup/Stationery_Mockup_1.webp";
import mockup2 from "../../assets/images/mockup/Stationery_Mockup_2.webp";
import mockup3 from "../../assets/images/mockup/Stationery_Mockup_3.webp";
import mockup4 from "../../assets/images/mockup/Stationery_Mockup_4.webp";
import mockup5 from "../../assets/images/mockup/Stationery_Mockup_5.webp";

import type { ReactElement } from "react";

import ExpertiseCard from "../expertiseCard/ExpertiseCard";

export default function OurExpertise(): ReactElement {
  const expertiseData = [
    {
      image: mockup1,
      imageAlt: "Web Development Services",
      subtitle: "Conquête",
      description: "Prospection, prise de rendez-vous et génération de leads.",
      cardId: "conquete",
    },
    {
      image: mockup2,
      imageAlt: "Mobile App Development",
      subtitle: "Fidélisation",
      description:
        "Suivi personalisé des clients, proximité par le contact humain, qualité du discours.",
      cardId: "fidelisation",
    },
    {
      image: mockup3,
      imageAlt: "Cloud Solutions",
      subtitle: "Rétention",
      description:
        "Récupération et maintient de la clientelle, gestion de conflits.",
      cardId: "retention",
    },
    {
      image: mockup4,
      imageAlt: "Conception & AI",
      subtitle: "Conception",
      description: "Generation d'outils administratifs, CRM, intégration IA.",
      cardId: "conception",
    },
    {
      image: mockup5,
      imageAlt: "Branding",
      subtitle: "Branding",
      description: "Visibilité Online (Site vitrine, réseau sociaux...)",
      cardId: "branding",
    },
    {
      image: mockup1,
      imageAlt: "Consulting Services",
      subtitle: "Conseil",
      description:
        "Communication, repositionement marketing, optimisation image de marque.",
      cardId: "conseil",
    },
  ];

  return (
    <section id="ourExpertiseComponent" className="ourExpertise">
      <header className="expertiseHeader">
        <h2 className="expertiseTitle" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-out-back" data-aos-delay="200">
          Notre Expertise
        </h2>
        <p className="expertiseSubtitle" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-out-back" data-aos-delay="400">
          Solutions sur meusure afin de répondre à vos besoins spécifiques
        </p>
      </header>
      
      <div className="expertiseGrid">
        {expertiseData.map(function(expertise, index) {
          // Animation différente selon la position pour forcer l'ordre
          const isFirstRow = index < 3;
          const animationType = isFirstRow ? "fade-right" : "fade-up";
          // Deuxième ligne: toutes les cartes 4,5,6 arrivent ensemble
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
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
