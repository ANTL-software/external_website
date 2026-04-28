import "./quote.scss";

import type { ReactElement } from "react";
import { useTranslation } from "react-i18next";

export default function Quote(): ReactElement {
  const { t } = useTranslation();

  return (
    <section id="quoteComponent" className="quote container">
      <div className="quoteContainer" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-out-back" data-aos-delay="200">
        <blockquote className="quoteText">
          {t("quote.text")}
        </blockquote>

        <footer className="quoteFooter">
          <cite className="quoteAuthor">
            <span className="authorName">{t("quote.author")}</span>
          </cite>
        </footer>
      </div>
    </section>
  );
}
