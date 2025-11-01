import "./backgroundGrid.scss";

import type { ReactElement } from "react";

export default function BackgroundGrid(): ReactElement {
  return (
    <div id="backgroundGridComponent" className="gridOverlay">
      <div className="gridPattern"></div>
    </div>
  );
}