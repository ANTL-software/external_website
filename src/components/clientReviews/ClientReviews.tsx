import "./clientReviews.scss";

import type { ReactElement } from "react";
import { Link } from "react-router-dom";

export default function ClientReviews(): ReactElement {
  const clientReviewsData = [
    {
      title: "Streamlined Operations with Custom ERP",
      description: "Their comprehensive ERP solution helped us streamline operations. Our team's productivity increased by 40% within just 6 months, revolutionizing our workflow and improving efficiency.",
      metrics: "40% productivity increase"
    },
    {
      title: "MVP Delivered Ahead of Schedule",
      description: "We were looking for a partner who could deliver a comprehensive MVP quickly. antl's expert team delivered a fully functional minimum viable product 2 weeks ahead of schedule.",
      metrics: "2 weeks early delivery"
    },
    {
      title: "Seamless Legacy System Migration",
      description: "The legacy system migration we needed was completed without any downtime. Their meticulous planning and execution ensured zero business disruption throughout the process.",
      metrics: "Zero downtime migration"
    }
  ];

  return (
    <section id="clientReviewsComponent" className="clientReviews container">
      <header className="clientReviewsHeader">
        <h2 className="clientReviewsTitle" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-out-back" data-aos-delay="200">
          Client Reviews
        </h2>
        <p className="clientReviewsSubtitle" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-out-back" data-aos-delay="400">
          Discover what our clients say about working with us. Real experiences from real businesses that have transformed their operations.
        </p>
      </header>

      <div className="clientReviewsGrid">
        {clientReviewsData.map(function(review, index) {
          return (
            <article
              key={index}
              className="clientReviewCard"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-easing="ease-out-back"
              data-aos-delay={600 + (index * 150)}
            >
              <div className="reviewContent">
                <h3 className="reviewTitle">{review.title}</h3>
                <p className="reviewDescription">{review.description}</p>

                <div className="reviewMetrics">
                  <span className="metricsLabel">Key Result:</span>
                  <span className="metricsValue">{review.metrics}</span>
                </div>

                <div className="reviewAction">
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