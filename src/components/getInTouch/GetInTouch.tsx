import "./getInTouch.scss";
import type { ReactElement } from "react";
import mockup1 from "../../assets/images/mockup/Stationery_Mockup_1.webp";
import mockup2 from "../../assets/images/mockup/Stationery_Mockup_2.webp";
import mockup3 from "../../assets/images/mockup/Stationery_Mockup_3.webp";

export default function GetInTouch(): ReactElement {
  return (
    <section id="getInTouchComponent" data-aos="fade-up" data-aos-duration="800" aria-labelledby="contact-heading">
      <header className="getInTouchHeader">
        <h2 id="contact-heading">Get in Touch Today</h2>
        <p>Let's discuss the future of your business together. Whether you need consulting, development, or expert digital solutions, we're ready to help bring your vision to life.</p>
      </header>
      
      <div className="contactCards" role="group" aria-label="Contact information">
        <article className="contactCard" data-aos="fade-up" data-aos-delay="100">
          <figure className="cardImage">
            <img src={mockup1} alt="" role="presentation" loading="lazy" />
          </figure>
          <h3>Email Us</h3>
          <address>
            <a href="mailto:hello@company.com" aria-label="Send email to hello@company.com">
              hello@company.com
            </a>
          </address>
        </article>
        
        <article className="contactCard" data-aos="fade-up" data-aos-delay="200">
          <figure className="cardImage">
            <img src={mockup2} alt="" role="presentation" loading="lazy" />
          </figure>
          <h3>Call Us</h3>
          <address>
            <a href="tel:+15551234567" aria-label="Call us at +1 (555) 123-4567">
              +1 (555) 123-4567
            </a>
          </address>
        </article>
        
        <article className="contactCard" data-aos="fade-up" data-aos-delay="300">
          <figure className="cardImage">
            <img src={mockup3} alt="" role="presentation" loading="lazy" />
          </figure>
          <h3>Visit Us</h3>
          <address>123, Main Road, London, UK</address>
        </article>
      </div>
    </section>
  );
}