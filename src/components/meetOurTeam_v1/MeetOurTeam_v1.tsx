import "./meetOurTeam_v1.scss";

import type { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoInformationCircle } from "react-icons/io5";

import ppNA from "../../assets/images/pp/NA_BW.webp";
import ppSH from "../../assets/images/pp/SH_BW.webp";
import ppLC from "../../assets/images/pp/LC_BW.webp";
import ppMS from "../../assets/images/pp/MS_BW.webp";
import ppND from "../../assets/images/pp/ND_BW.webp";

type TeamMember = {
  name: string;
  role: string;
  bio: string;
};

export default function MeetOurTeam(): ReactElement {
  const { t } = useTranslation();
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  function toggleCardFlip(index: number) {
    setFlippedCards(function (prev) {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  }

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
        {(t("meetOurTeam.members", { returnObjects: true }) as TeamMember[]).map(function (member: TeamMember, index: number) {
          const delay = 900 + index * 100;
          const memberClass = `member-${index}`;
          const isFlipped = flippedCards.has(index);

          return (
            <article
              key={index}
              className={`teamMemberCard ${memberClass} ${isFlipped ? "flipped" : ""}`}
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-easing="ease-out-back"
              data-aos-delay={delay}
            >
              <div className="cardInner">
                <div className="cardFront">
                  <img
                    src={memberImages[index]}
                    alt={memberImageAlts[index]}
                    className="memberImage"
                    loading="lazy"
                  />
                  <button
                    className="infoButton"
                    onClick={function () { return toggleCardFlip(index); }}
                    aria-label="Plus d'informations"
                  >
                    <IoInformationCircle className="infoIcon" />
                  </button>
                </div>
                <div className="cardBack">
                  <div className="memberContent">
                    <p className="memberRole">{member.role}</p>
                    <h3 className="memberName">{member.name}</h3>
                    <p className="memberBio">{member.bio}</p>
                  </div>
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
