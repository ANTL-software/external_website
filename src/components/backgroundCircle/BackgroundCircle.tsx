import "./backgroundCircle.scss";

import type { ReactElement } from "react";

export default function BackgroundCircle(): ReactElement {
  return (
    <div id="backgroundCircleComponent" className="logoContainer">
      <div className="circularLogo">
        <div className="quarter quarter-green"></div>
        <div className="quarter quarter-transparent"></div>
        <div className="quarter quarter-red"></div>
        <div className="quarter quarter-blue"></div>
        <div className="center"></div>
      </div>
    </div>
  );
}