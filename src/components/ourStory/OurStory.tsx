import "./ourStory.scss";

import type { ReactElement } from "react";

export default function OurStory(): ReactElement {
  const storyMilestones = [
    {
      year: "",
      title: "Notre mission",
      description:
        "Notre mission est de créer un lien qui a du sens pour la marque de nos partenaires, en établissant une proximité originale avec leurs interlocuteurs privilégiés. Ainsi, nous incluons dans notre stratégie commerciale le message et l’image de nos partenaires.",
    },
    {
      year: "",
      title: "Notre approche",
      description:
        "Nous développons une approche flexible pour améliorer la performance commerciale et délivrer une expérience client optimale grâce à des solutions opérationnelles.",
    },
    {
      year: "",
      title: "Notre engagement",
      description:
        "Nous sommes un accélérateur du développement commercial  pour nos partenaires et garantissons un accompagnement personnalisé avec des équipes engagées à tous les niveaux de l’entreprise.",
    },
    {
      year: "",
      title: "Notre vision",
      description:
        "Nous opérons avec une démarche de création de valeur par l’innovation.",
    },
    {
      year: "",
      title: "Notre action",
      description:
        "Nous intervenons à chaque étape du cycle de vie du client pour générer durablement de l’engagement et de la valeur (conquête-développement-fidélisation-rétention).",
    },
  ];

  return (
    <section id="ourStoryComponent" className="ourStory container">
      <header className="ourStoryHeader">
        <h2 className="ourStoryTitle" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-out-back" data-aos-delay="200">
          Qui sommes nous
        </h2>
        <p className="ourStorySubtitle" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-out-back" data-aos-delay="400">
         Nous développons une approche flexible pour améliorer la performance commerciale et délivrer une experience client optimale.
        </p>
      </header>

      <div className="timelineContainer">
        <div className="timelineLine" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-out-back" data-aos-delay="600"></div>
        
        <div className="timelineContent">
          {storyMilestones.map(function(milestone, index) {
            const isEven = index % 2 === 0;
            const delay = 800 + (index * 150);
            
            return (
              <article 
                key={index}
                className={`timelineItem ${isEven ? 'timelineItemLeft' : 'timelineItemRight'}`}
                data-aos={isEven ? "fade-right" : "fade-left"}
                data-aos-duration="800"
                data-aos-easing="ease-out-back"
                data-aos-delay={delay}
              >
                <div className="timelineMarker">
                  <span className="timelineYear">{milestone.year}</span>
                </div>
                
                <div className="timelineCard">
                  <h3 className="milestoneTitle">{milestone.title}</h3>
                  <p className="milestoneDescription">{milestone.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}