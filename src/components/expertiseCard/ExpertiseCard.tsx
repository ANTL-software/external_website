import "./expertiseCard.scss";

import { Link } from "react-router-dom";
import { IoArrowForward } from "react-icons/io5";

import type { ReactElement } from "react";

interface ExpertiseCardProps {
  image: string;
  imageAlt: string;
  subtitle: string;
  description: string;
  cardId: string;
  linkTo?: string;
  linkText?: string;
  ariaLabel?: string;
  imageClassName?: string;
}

export default function ExpertiseCard({
  image,
  imageAlt,
  subtitle,
  description,
  cardId,
  linkTo,
  linkText,
  ariaLabel,
  imageClassName,
}: ExpertiseCardProps): ReactElement {
  const titleId = `expertise-subtitle-${cardId}`;

  return (
    <article
      id={`expertiseCard-${cardId}`}
      className="expertiseCard"
      role="region"
      aria-labelledby={titleId}
    >
      <figure className="cardImageContainer" aria-hidden="true">
        <img src={image} alt={imageAlt} className={`cardImage ${imageClassName || ""}`} loading="lazy" />
      </figure>

      <header className="cardHeader">
        <h3 id={titleId} className="cardSubtitle">
          {subtitle}
        </h3>
      </header>

      <section className="cardContent">
        <p className="cardDescription">{description}</p>
      </section>

      <footer className="cardFooter">
        {linkTo && linkText && (
          <Link
            to={linkTo}
            className="cardLink"
            aria-label={ariaLabel || `En savoir plus sur ${subtitle}`}
          >
            <span className="cardLinkText">{linkText}</span>
            <IoArrowForward className="cardLinkIcon" aria-hidden="true" />
          </Link>
        )}
      </footer>
    </article>
  );
}
