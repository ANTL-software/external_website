import "./meetOurTeam.scss";

import type { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import ppNA from "../../assets/images/pp/NA.png";
// import ppSH from "../../assets/images/pp/ppSH.webp";
// import ppLC from "../../assets/images/pp/ppLC.webp";
// import ppTB from "../../assets/images/pp/ppTB.webp";
import ppMS from "../../assets/images/pp/MS.png";
import ppND from "../../assets/images/pp/ND.png";

export default function MeetOurTeam(): ReactElement {
  const { t } = useTranslation();

  const teamMembers = [
    {
      name: "Mehdi Saad Allah",
      position: t("meetOurTeam.members.4.role"),
      positionFr: t("meetOurTeam.members.4.role_fr"),
      image: ppMS,
      imageAlt: "Mehdi Saad Allah portrait",
    },
    // {
    //   name: "Théo Becquet",
    //   position: t("meetOurTeam.members.3.role"),
    //   positionFr: t("meetOurTeam.members.3.role_fr"),
    //   image: "ppTB",
    //   imageAlt: "Théo Becquet portrait",
    // },
    {
      name: "Laëtitia Castanet",
      position: t("meetOurTeam.members.2.role"),
      positionFr: t("meetOurTeam.members.2.role_fr"),
      image: "ppLC",
      imageAlt: "Laëtitia Castanet portrait",
    },
    {
      name: "Sonia Hadid",
      position: t("meetOurTeam.members.1.role"),
      positionFr: t("meetOurTeam.members.1.role_fr"),
      image: "ppSH",
      imageAlt: "Sonia Hadid portrait",
    },
    {
      name: "Nicolas Decressac",
      position: t("meetOurTeam.members.5.role"),
      positionFr: t("meetOurTeam.members.5.role_fr"),
      image: ppND,
      imageAlt: "Nicolas Decressac portrait",
    },
    {
      name: "Nelly Ahobaut",
      position: t("meetOurTeam.members.0.role"),
      positionFr: t("meetOurTeam.members.0.role_fr"),
      image: ppNA,
      imageAlt: "Nelly Ahobaut portrait",
    },
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
          {t("meetOurTeam.title")}
        </h2>
        <p
          className="meetOurTeamSubtitle"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-easing="ease-out-back"
          data-aos-delay="400"
        >{t("meetOurTeam.subtitle")}</p>
      </header>

      <div className="teamGrid">
        {teamMembers.map(function (member, index) {
          const delay = 600 + index * 100;
          const isNelly = member.name === "Nelly Ahobaut";
          const isNicolas = member.name === "Nicolas Decressac";
          const isMehdi = member.name === "Mehdi Saad Allah";

          return (
            <article
              key={index}
              className={`teamMemberCard ${isNelly ? "nellyCard" : ""} ${isNicolas ? "nicolasCard" : ""} ${isMehdi ? "mehdiCard" : ""}`}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-easing="ease-out-back"
              data-aos-delay={delay}
            >
              <div className={`memberImageContainer ${isNelly ? "nellyImageContainer" : ""} ${isNicolas ? "nicolasImageContainer" : ""} ${isMehdi ? "mehdiImageContainer" : ""}`}>
                <img
                  src={member.image}
                  alt={member.imageAlt}
                  className={`memberImage ${isNelly ? "nellyImage" : ""} ${isNicolas ? "nicolasImage" : ""} ${isMehdi ? "mehdiImage" : ""}`}
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
          <span className="linkText">{t("meetOurTeam.cta")}</span>
          <span className="linkArrow">→</span>
        </Link>
      </div>
    </section>
  );
}
