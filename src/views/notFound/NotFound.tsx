import "./notFound.scss";

import type { ReactElement } from "react";
import { Link } from "react-router-dom";

export default function NotFound(): ReactElement {
  return (
    <div id="notFound">
      <div className="notFoundContainer">
        <div className="notFoundContent" data-aos="fade-up" data-aos-duration="800">
          <h1 className="notFoundTitle">404</h1>
          <h2 className="notFoundSubtitle">Page Not Found</h2>
          <p className="notFoundDescription">
            Sorry, the page you are looking for does not exist or is not yet available.
          </p>
          <Link to="/" className="homeButton">
            <span>Back to Home</span>
            <span className="buttonArrow">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
