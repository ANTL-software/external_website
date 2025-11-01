import "./ourStory.scss";

import type { ReactElement } from "react";

export default function OurStory(): ReactElement {
  const storyMilestones = [
    {
      year: "2013",
      title: "Expanding Expertise",
      description: "Started expanding our technical expertise and building a strong foundation for future growth. Our team began specializing in cutting-edge technologies and modern development practices."
    },
    {
      year: "2015", 
      title: "Going Global",
      description: "Extended our services globally to meet the growing demand for quality software solutions. We established partnerships with international clients and expanded our market reach."
    },
    {
      year: "2017",
      title: "Building Advanced Digital Experience",
      description: "Focused on creating advanced digital experiences for our clients. We invested in emerging technologies and developed innovative solutions that set new industry standards."
    },
    {
      year: "2019",
      title: "500+ Projects Completed",
      description: "Reached a significant milestone by completing over 500 successful projects. Our portfolio grew to include diverse industries and complex technical challenges."
    },
    {
      year: "2021",
      title: "Embracing Innovation",
      description: "Embraced cutting-edge innovations and modern development methodologies. We adopted AI, cloud technologies, and agile practices to deliver superior results."
    },
    {
      year: "2023",
      title: "Industry Leadership",
      description: "Established ourselves as industry leaders in software development and digital transformation. We continue to push boundaries and set new benchmarks for excellence."
    }
  ];

  return (
    <section id="ourStoryComponent" className="ourStory container">
      <header className="ourStoryHeader">
        <h2 className="ourStoryTitle" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-out-back" data-aos-delay="200">
          Our Story
        </h2>
        <p className="ourStorySubtitle" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-out-back" data-aos-delay="400">
          Discover our journey from a small startup to a leading software development company. Learn about the milestones, challenges, and achievements that have shaped our growth and success over the years.
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