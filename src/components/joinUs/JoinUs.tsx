import "./joinUs.scss";

import type { ReactElement } from "react";

export default function JoinUs(): ReactElement {
  return (
    <section id="joinUsComponent" className="joinUs container">
      <header className="joinUsHeader">
        <h2 className="joinUsTitle" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-out-back" data-aos-delay="200">
          Rejoignez-nous !
        </h2>
      </header>
    </section>
  );
}