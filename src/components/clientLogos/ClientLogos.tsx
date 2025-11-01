import "./clientLogos.scss";

import type { ReactElement } from "react";

export default function ClientLogos(): ReactElement {
  const clientData = [
    { icon: "⚡", name: "Boltshift", className: "boltshift" },
    { icon: "📦", name: "Lightbox", className: "lightbox" },
    { icon: "🍃", name: "FeatherDev", className: "featherdev" },
    { icon: "🔮", name: "Spherule", className: "spherule" },
    { icon: "🌐", name: "GlobalBank", className: "globalbank" },
    { icon: "☀️", name: "Nietzsche", className: "nietzsche" }
  ];

  return (
    <section id="clientLogosComponent" className="clientLogosSection">
      <h2 data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-out-back" data-aos-delay="200">
        Join in our ever growing client list
      </h2>
      <ul 
        className="clientLogos" 
        role="list" 
        aria-label="Our client companies"
        data-aos="fade-right" 
        data-aos-duration="1200" 
        data-aos-easing="ease-out-quart" 
        data-aos-delay="400"
      >
        {clientData.map(function(client, index) {
          return (
            <li 
              key={index} 
              className="logoItem"
            >
              <figure className={`logoIcon ${client.className}`} aria-label={`${client.name} logo`}>
                {client.icon}
              </figure>
              <cite className="logoText">{client.name}</cite>
            </li>
          );
        })}
      </ul>
    </section>
  );
}