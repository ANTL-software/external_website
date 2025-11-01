import "./successStories.scss";

import type { ReactElement } from "react";
import { Link } from "react-router-dom";

export default function SuccessStories(): ReactElement {
  const successStoriesData = [
    {
      title: "Streamlined Operations with Custom ERP",
      description: "Our comprehensive ERP solution helped ABC Manufacturing streamline their operations. Their team's productivity increased by 40% within just 6 months, revolutionizing their workflow and improving every step of the way.",
      metrics: "40% productivity increase"
    },
    {
      title: "MVP Delivered Ahead of Schedule",
      description: "We were looking for a solution that allowed us to deliver a comprehensive MVP. Our expert team delivered a fully functional minimum viable product 2 weeks ahead of schedule, exceeding client expectations.",
      metrics: "2 weeks early delivery"
    },
    {
      title: "Seamless Legacy System Migration",
      description: "The legacy system migration ABC Corp needed was completed without any downtime. Our meticulous planning and execution ensured zero business disruption with zero downtime.",
      metrics: "Zero downtime migration"
    }
  ];

  return (
    <section id="successStoriesComponent" className="successStories container">
      <header className="successStoriesHeader">
        <h2 className="successStoriesTitle" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-out-back" data-aos-delay="200">
          Success Stories
        </h2>
        <p className="successStoriesSubtitle" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-out-back" data-aos-delay="400">
          Explore how we've transformed challenges into opportunities, driving success for businesses across various industries.
        </p>
      </header>
      
      <div className="successStoriesGrid">
        {successStoriesData.map(function(story, index) {
          return (
            <article 
              key={index} 
              className="successStoryCard"
              data-aos="fade-up" 
              data-aos-duration="800" 
              data-aos-easing="ease-out-back" 
              data-aos-delay={600 + (index * 150)}
            >
              <div className="storyContent">
                <h3 className="storyTitle">{story.title}</h3>
                <p className="storyDescription">{story.description}</p>
                
                <div className="storyMetrics">
                  <span className="metricsLabel">Key Result:</span>
                  <span className="metricsValue">{story.metrics}</span>
                </div>
                
                <div className="storyAction">
                  <Link to="/case-studies" className="viewCaseStudiesLink">
                    <span className="linkText">View Case Studies</span>
                    <span className="linkArrow">→</span>
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}