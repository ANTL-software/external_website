import "./meetOurTeam.scss";

import type { ReactElement } from "react";
import { Link } from "react-router-dom";

// import ppNA from "../../assets/images/pp/ppNA.webp";
// import ppSH from "../../assets/images/pp/ppSH.webp";
// import ppLC from "../../assets/images/pp/ppLC.webp";
// import ppTB from "../../assets/images/pp/ppTB.webp";
// import ppMS from "../../assets/images/pp/ppMS.webp";
import ppND from "../../assets/images/pp/ppND.webp";

export default function MeetOurTeam(): ReactElement {
  const teamMembers = [
    {
      name: "Nelly Ahobaut",
      position: "Chief Executive Officer, Founder",
      positionFr: "Directrice Générale, Fondatrice",
      image: 'ppNA',
      imageAlt: "Nelly Ahobaut portrait"
    },
    {
      name: "Sonia Hadid",
      position: "Sales Manager",
      positionFr: "Responsable Commerciale",
      image: 'ppSH',
      imageAlt: "Sonia Hadid portrait"
    },
    {
      name: "Laëtitia Castanet",
      position: "QA Manager",
      positionFr: "Responsable Qualité et formation",
      image: 'ppLC',
      imageAlt: "Laëtitia Castanet portrait"
    },
    {
      name: "Théo Becquet",
      position: "Business Developer",
      positionFr: "Développeur Business",
      image: 'ppTB',
      imageAlt: "Théo Becquet portrait"
    },
    {
      name: "Mehdi Saad Allah",
      position: "Office Manager",
      positionFr: "Responsable Administrative",
      image: 'ppMS',
      imageAlt: "Mehdi Saad Allah portrait"
    },
    {
      name: "Nicolas Decressac",
      position: "Chief Technology Officer",
      positionFr: "Directeur Technique",
      image: ppND,
      imageAlt: "Nicolas Decressac portrait"
    }
  ];

  return (
    <section id="meetOurTeamComponent" className="meetOurTeam container">
      <header className="meetOurTeamHeader">
        <h2
          className="meetOurTeamTitle"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-easing="ease-out-back"
          data-aos-delay="200"
        >
          Rencontrer notre équipe
        </h2>
        <p
          className="meetOurTeamSubtitle"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-easing="ease-out-back"
          data-aos-delay="400"
        >
          La rencontre de 6 talents qui partagent la même vision.
        </p>
      </header>

      <div className="teamGrid">
        {teamMembers.map(function (member, index) {
          const delay = 600 + index * 100;

          return (
            <article
              key={index}
              className="teamMemberCard"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-easing="ease-out-back"
              data-aos-delay={delay}
            >
              <div className="memberImageContainer">
                <img
                  src={member.image}
                  alt={member.imageAlt}
                  className="memberImage"
                  loading="lazy"
                />
              </div>

              <div className="memberContent">
                <h3 className="memberName">{member.name}</h3>
                <p className="memberPosition">{member.position}</p>
                <p className="memberPositionFr">{member.positionFr}</p>
              </div>
            </article>
          );
        })}
      </div>

      <div
        className="teamAction"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-easing="ease-out-back"
        data-aos-delay="1200"
      >
        <Link to="/contact_us" className="joinTeamLink">
          <span className="linkText">Rejoingez notre équipe</span>
          <span className="linkArrow">→</span>
        </Link>
      </div>
    </section>
  );
}