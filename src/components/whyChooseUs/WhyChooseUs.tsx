import "./whyChooseUs.scss";

import mockup1 from "../../assets/images/mockup/Stationery_Mockup_1.webp";
import mockup2 from "../../assets/images/mockup/Stationery_Mockup_2.webp";
import mockup3 from "../../assets/images/mockup/Stationery_Mockup_3.webp";

import type { ReactElement } from "react";

import GoToConsultationLink from "../goToConsultationLink/GoToConsultationLink";

export default function WhyChooseUs(): ReactElement {
  const whyChooseUsData = [
    {
      image: mockup1,
      imageAlt: "Global Reach Services",
      title: "Global Reach",
      description: "Serving clients worldwide, from startups to Fortune 500 companies across all time zones and markets.",
      features: ["24/7 Global Support", "Multi-timezone Coverage", "International Standards"]
    },
    {
      image: mockup2,
      imageAlt: "Scalable Solutions Architecture",
      title: "Scalable Solutions",
      description: "Flexible services tailored to businesses of all sizes with proven scalability frameworks.",
      features: ["Enterprise Ready", "Flexible Architecture", "Growth-oriented"]
    },
    {
      image: mockup3,
      imageAlt: "Expert Team and Quality Assurance",
      title: "Expertise You Can Trust",
      description: "Decades of experience delivering quality solutions with transparent communication.",
      features: ["Proven Track Record", "Expert Team", "Quality Assurance"]
    }
  ];

  return (
    <section id="whyChooseUsComponent" className="whyChooseUs container">
      <header className="whyChooseUsHeader">
        <h2 className="whyChooseUsTitle" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-out-back" data-aos-delay="200">
          Why Choose ANTEL?
        </h2>
        <p className="whyChooseUsSubtitle" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-out-back" data-aos-delay="400">
          We provide end-to-end solutions to help businesses achieve scalable systems, innovative solutions, and more.
        </p>
      </header>
      
      <div className="whyChooseUsGrid">
        {whyChooseUsData.map(function(item, index) {
          return (
            <div 
              key={index} 
              className="whyChooseUsCard"
              data-aos="fade-up" 
              data-aos-duration="800" 
              data-aos-easing="ease-out-back" 
              data-aos-delay={600 + (index * 150)}
            >
              <div className="cardImageContainer">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="cardImage"
                  loading="lazy"
                />
              </div>
              
              <div className="cardContent">
                <h3 className="cardTitle">{item.title}</h3>
                <p className="cardDescription">{item.description}</p>
                
                <ul className="cardFeatures">
                  {item.features.map(function(feature, featureIndex) {
                    return (
                      <li key={featureIndex} className="cardFeature">
                        <span className="featureIcon">✓</span>
                        {feature}
                      </li>
                    );
                  })}
                </ul>
                
                <div className="cardAction">
                  <GoToConsultationLink />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}