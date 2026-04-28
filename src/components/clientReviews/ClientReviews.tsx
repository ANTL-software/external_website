import "./clientReviews.scss";

import type { ReactElement } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ClientReviews(): ReactElement {
  const { t } = useTranslation();

  const clientReviewsData = t("clientReviews.items", { returnObjects: true }) as Array<{
    title: string;
    description: string;
    metrics: string;
  }>;

  return (
    <section id="clientReviewsComponent" className="clientReviews container">
      <header className="clientReviewsHeader">
        <h2 className="clientReviewsTitle" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-out-back" data-aos-delay="200">
          {t("clientReviews.title")}
        </h2>
        <p className="clientReviewsSubtitle" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-out-back" data-aos-delay="400">
          {t("clientReviews.subtitle")}
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
                  <span className="metricsLabel">{t("clientReviews.metricsLabel")}</span>
                  <span className="metricsValue">{review.metrics}</span>
                </div>

                <div className="reviewAction">
                  <Link to="/case-studies" className="viewCaseStudiesLink">
                    <span className="linkText">{t("clientReviews.viewCaseStudies")}</span>
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