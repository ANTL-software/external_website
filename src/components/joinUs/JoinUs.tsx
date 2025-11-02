import "./joinUs.scss";

import type { ReactElement } from "react";
import { Link } from "react-router-dom";

import mockup1 from "../../assets/images/mockup/Stationery_Mockup_1.webp";
import mockup2 from "../../assets/images/mockup/Stationery_Mockup_2.webp";
import mockup3 from "../../assets/images/mockup/Stationery_Mockup_3.webp";

export default function JoinUs(): ReactElement {
  const benefits = [
    {
      title: "Inclusive Environment",
      description: "We celebrate diversity and create an environment of respect, collaboration, and belonging.",
      image: mockup1,
      imageAlt: "Inclusive workplace environment"
    },
    {
      title: "Flexible Work Options",
      description: "Work remotely or in-office with flexible hours that fit your lifestyle.",
      image: mockup2,
      imageAlt: "Flexible work arrangements"
    },
    {
      title: "Recognition & Rewards",
      description: "Your contributions are valued, recognized, and rewarded - both big and small.",
      image: mockup3,
      imageAlt: "Employee recognition and rewards"
    }
  ];

  return (
    <section id="joinUsComponent" className="joinUs container">
      <header className="joinUsHeader">
        <h2 className="joinUsTitle" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-out-back" data-aos-delay="200">
          Join Us
        </h2>
        <p className="joinUsSubtitle" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-out-back" data-aos-delay="400">
          Looking for a career where you can innovate and make an impact? ABC Company is always on the lookout for passionate individuals to join our growing team.
        </p>
      </header>

      <div className="benefitsGrid">
        {benefits.map(function(benefit, index) {
          const delay = 600 + (index * 150);
          
          return (
            <article 
              key={index}
              className="benefitCard"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-easing="ease-out-back"
              data-aos-delay={delay}
            >
              <div className="benefitImageContainer">
                <img
                  src={benefit.image}
                  alt={benefit.imageAlt}
                  className="benefitImage"
                  loading="lazy"
                />
              </div>
              
              <div className="benefitContent">
                <h3 className="benefitTitle">{benefit.title}</h3>
                <p className="benefitDescription">{benefit.description}</p>
              </div>
            </article>
          );
        })}
      </div>

      <div className="joinUsAction" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-out-back" data-aos-delay="1050">
        <Link to="/contact_us" className="joinOurTeamLink">
          <span className="linkText">Join our team</span>
          <span className="linkArrow">→</span>
        </Link>
      </div>
    </section>
  );
}