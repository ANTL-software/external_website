import "./quote.scss";

import type { ReactElement } from "react";

export default function Quote(): ReactElement {
  return (
    <section id="quoteComponent" className="quote container">
      <div className="quoteContainer" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-out-back" data-aos-delay="200">
        <blockquote className="quoteText">
          Our focus is on creating products and services that empower businesses, streamline operations, and foster growth in the digital era.
        </blockquote>
        
        <footer className="quoteFooter">
          <cite className="quoteAuthor">
            <span className="authorName">Randalle Wortranders</span>
            <span className="authorTitle">Co-Founder - ANTEL</span>
          </cite>
        </footer>
      </div>
    </section>
  );
}