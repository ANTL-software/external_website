import "./whatWeStandFor.scss";

import type { ReactElement } from "react";

import mockup1 from "../../assets/images/mockup/Stationery_Mockup_1.jpg";
import mockup2 from "../../assets/images/mockup/Stationery_Mockup_2.jpg";
import mockup3 from "../../assets/images/mockup/Stationery_Mockup_3.jpg";
import mockup4 from "../../assets/images/mockup/Stationery_Mockup_4.jpg";

export default function WhatWeStandFor(): ReactElement {
  const values = [
    {
      title: "Innovation",
      description: "Pioneering cutting-edge solutions tailored to your unique needs.",
      image: mockup1,
      imageAlt: "Innovation concept illustration"
    },
    {
      title: "Reliability",
      description: "Delivering consistent, dependable, and trustworthy excellence.",
      image: mockup2,
      imageAlt: "Reliability concept illustration"
    },
    {
      title: "Collaboration",
      description: "Partnering with clients to achieve shared success.",
      image: mockup3,
      imageAlt: "Collaboration concept illustration"
    },
    {
      title: "Integrity",
      description: "Building trust through transparency and accountability.",
      image: mockup4,
      imageAlt: "Integrity concept illustration"
    }
  ];

  return (
    <section id="whatWeStandForComponent" className="whatWeStandFor container">
      <header className="whatWeStandForHeader">
        <h2 className="whatWeStandForTitle" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-out-back" data-aos-delay="200">
          What We Stand For
        </h2>
        <p className="whatWeStandForSubtitle" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-out-back" data-aos-delay="400">
          Our unwavering values shape our approach to delivering impactful solutions.
        </p>
      </header>

      <div className="valuesGrid">
        {values.map(function(value, index) {
          const delay = 600 + (index * 150);
          
          return (
            <article 
              key={index}
              className="valueCard"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-easing="ease-out-back"
              data-aos-delay={delay}
            >
              <div className="valueImageContainer">
                <img 
                  src={value.image} 
                  alt={value.imageAlt}
                  className="valueImage"
                />
              </div>
              
              <div className="valueContent">
                <h3 className="valueTitle">{value.title}</h3>
                <p className="valueDescription">{value.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}