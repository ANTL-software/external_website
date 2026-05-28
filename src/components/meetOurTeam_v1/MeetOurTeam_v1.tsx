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

  const memberImages = [ppNA, ppND, ppSH, ppLC, ppMS];
  const memberImageAlts = [
    "Nelly Ahobaut portrait",
    "Nicolas Decressac portrait",
    "Sonia Hadid portrait",
    "Laëtitia Castanet portrait",
    "Mehdi Saad Allah portrait",
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
        {t("meetOurTeam.members", { returnObjects: true }).map(function (member: { name: string; role: string; bio: string }, index: number) {
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
                src={memberImages[index]}
                alt={memberImageAlts[index]}
                className="memberImage"
                loading="lazy"
              />
              <div className="memberOverlay">
                <div className="memberContent">
                  <p className="memberRole">{member.role}</p>
                  <h3 className="memberName">{member.name}</h3>
                  <p className="memberBio">{member.bio}</p>
                </div>
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
