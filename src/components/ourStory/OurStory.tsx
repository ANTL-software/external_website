import "./ourStory.scss";

import type { ReactElement } from "react";
import { useTranslation } from "react-i18next";

export default function OurStory(): ReactElement {
  const { t } = useTranslation();

  const storyMilestones = [
    {
      title: t("ourStory.mission"),
      description: t("ourStory.missionDesc"),
    },
    {
      title: t("ourStory.approach"),
      description: t("ourStory.approachDesc"),
    },
    {
      title: t("ourStory.commitment"),
      description: t("ourStory.commitmentDesc"),
    },
    {
      title: t("ourStory.vision"),
      description: t("ourStory.visionDesc"),
    },
    {
      title: t("ourStory.action"),
      description: t("ourStory.actionDesc"),
    },
  ];

  return (
    <section id="ourStoryComponent" className="ourStory container">
      <header className="ourStoryHeader">
        <h2 className="ourStoryTitle" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-out-back" data-aos-delay="200">
          {t("ourStory.title")}
        </h2>
        <p className="ourStorySubtitle" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-out-back" data-aos-delay="400">
          {t("ourStory.subtitle")}
        </p>
      </header>

      <div className="timelineContainer">
        <div className="timelineLine" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-out-back" data-aos-delay="600"></div>

        <div className="timelineContent">
          {storyMilestones.map(function(milestone, index) {
            const isEven = index % 2 === 0;
            const delay = 400 + (index * 150);

            return (
              <article
                key={index}
                className={`timelineItem ${isEven ? 'timelineItemLeft' : 'timelineItemRight'}`}
                data-aos={isEven ? "fade-right" : "fade-left"}
                data-aos-duration="800"
                data-aos-easing="ease-out-back"
                data-aos-delay={delay}
              >
                <div className="timelineMarker" />

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
