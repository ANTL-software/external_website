import "./quote.scss";

import type { ReactElement } from "react";

export default function Quote(): ReactElement {
  return (
    <section id="quoteComponent" className="quote container">
      <div className="quoteContainer" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-out-back" data-aos-delay="200">
        <blockquote className="quoteText">
          Tout seul on va plus vite, mais ensemble on va plus loin.
        </blockquote>
        
        <footer className="quoteFooter">
          <cite className="quoteAuthor">
            <span className="authorName">Proverbe africain</span>
          </cite>
        </footer>
      </div>
    </section>
  );
}