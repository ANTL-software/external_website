import "./ourImpact.scss";
import type { ReactElement } from 'react';

export default function OurImpact(): ReactElement {
  const impactData = [
    {
      value: "95%",
      label: "Client Satisfaction Rate",
      ariaLabel: "95 percent client satisfaction rate"
    },
    {
      value: "300+",
      label: "Successful Projects Delivered",
      ariaLabel: "Over 300 successful projects delivered"
    },
    {
      value: "40%",
      label: "Average ROI for our Clients",
      ariaLabel: "40 percent average return on investment for our clients"
    },
    {
      value: "10+",
      label: "Years of Industry Experience",
      ariaLabel: "Over 10 years of industry experience"
    }
  ];

  return (
    <section id="ourImpactComponent" className="ourImpact container" aria-labelledby="impactTitle">
      <header className="impactHeader">
        <h2 id="impactTitle" className="impactTitle">Our Impact</h2>
        <p className="impactSubtitle">
          Delivering measurable results that drive real business growth
        </p>
      </header>
      
      <dl className="impactStats" role="list" aria-label="Company performance statistics">
        {impactData.map(function(stat, index) {
          return (
            <div key={index} className="statItem" data-aos="fade-up" data-aos-delay={index * 100} role="listitem">
              <dt className="statValue" aria-label={stat.ariaLabel}>{stat.value}</dt>
              <dd className="statLabel">{stat.label}</dd>
            </div>
          );
        })}
      </dl>

      <div className="highlightStat" data-aos="fade-up" data-aos-delay="400" role="banner" aria-label="99.9 percent service reliability highlight">
        <div className="highlightValue" aria-label="99.9 percent service reliability">99.9%</div>
        <div className="highlightLabel">Service Reliability</div>
      </div>
    </section>
  );
}