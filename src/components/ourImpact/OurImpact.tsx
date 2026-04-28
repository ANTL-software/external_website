import "./ourImpact.scss";
import type { ReactElement } from 'react';
import { useTranslation } from "react-i18next";

export default function OurImpact(): ReactElement {
  const { t } = useTranslation();

  const impactData = [
    {
      value: "95%",
      label: t("ourImpact.stat1.label"),
      ariaLabel: t("ourImpact.stat1.ariaLabel")
    },
    {
      value: "300+",
      label: t("ourImpact.stat2.label"),
      ariaLabel: t("ourImpact.stat2.ariaLabel")
    },
    {
      value: "40%",
      label: t("ourImpact.stat3.label"),
      ariaLabel: t("ourImpact.stat3.ariaLabel")
    },
    {
      value: "10+",
      label: t("ourImpact.stat4.label"),
      ariaLabel: t("ourImpact.stat4.ariaLabel")
    }
  ];

  return (
    <section id="ourImpactComponent" className="ourImpact container" aria-labelledby="impactTitle">
      <header className="impactHeader">
        <h2 id="impactTitle" className="impactTitle">{t("ourImpact.title")}</h2>
        <p className="impactSubtitle">
          {t("ourImpact.subtitle")}
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
        <div className="highlightLabel">{t("ourImpact.highlightLabel")}</div>
      </div>
    </section>
  );
}