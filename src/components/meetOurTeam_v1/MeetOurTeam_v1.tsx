import "./meetOurTeam_v1.scss";

import type { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import ppNA from "../../assets/images/pp/NA_BW.webp";
import ppSH from "../../assets/images/pp/SH_BW.webp";
import ppLC from "../../assets/images/pp/LC_BW.webp";
import ppMS from "../../assets/images/pp/MS_BW.webp";
import ppND from "../../assets/images/pp/ND_BW.webp";

export default function MeetOurTeam(): ReactElement {
  const { t } = useTranslation();

  const teamMembers = [
    {
      name: "Nelly Ahobaut",
      image: ppNA,
      imageAlt: "Nelly Ahobaut portrait",
      role: "CEO",
      roleFr: "Présidente",
    },
    {
      name: "Nicolas Decressac",
      image: ppND,
      imageAlt: "Nicolas Decressac portrait",
      role: "CTO",
      roleFr: "Directeur technique",
    },
    {
      name: "Sonia Hadid",
      image: ppSH,
      imageAlt: "Sonia Hadid portrait",
      role: "Sales Manager",
      roleFr: "Responsable commercial",
    },
    {
      name: "Laëtitia Castanet",
      image: ppLC,
      imageAlt: "Laëtitia Castanet portrait",
      role: "QA Manager",
      roleFr: "Responsable Qualité",
    },
    {
      name: "Mehdi Saad Allah",
      image: ppMS,
      imageAlt: "Mehdi Saad Allah portrait",
      role: "Office Manager",
      roleFr: "Responsable administratif",
    },
  ];

  return (
    <section
      id="meetOurTeamComponent"
      className="meetOurTeam container"
    >
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
      </header>

      <div className="teamGrid">
        {teamMembers.map(function (member, index) {
          const delay = 900 + index * 100;
          const memberClass = `member-${index}`;

          return (
            <article
              key={index}
              className={`teamMemberCard ${memberClass}`}
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-easing="ease-out-back"
              data-aos-delay={delay}
            >
              <img
                src={member.image}
                alt={member.imageAlt}
                className="memberImage"
                loading="lazy"
              />
              <div className="memberOverlay">
                <h3 className="memberName">{member.name}</h3>
                <p className="memberRole">{member.role}</p>
                <p className="memberRoleFr">{member.roleFr}</p>
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
