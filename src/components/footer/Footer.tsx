import "./footer.scss";
import type { ReactElement } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer(): ReactElement {
  return (
    <footer id="footerComponent" role="contentinfo">
      <div className="container">
        <div className="footerContent">
          <section className="footerSection companySection" aria-labelledby="company-heading">
            <header className="companyLogo">
              <div className="logoIcon" role="img" aria-label="ABC Company logo"></div>
              <h3 id="company-heading">ABC Company</h3>
            </header>
            <p>We offer a comprehensive suite of digital marketing services that cover all aspects of our online presence. From SEO and social media marketing to content creation and PPC advertising, they have the expertise and resources to handle our diverse marketing needs.</p>
            <nav className="socialIcons" aria-label="Social media links">
              <a href="#" aria-label="Follow us on Facebook" rel="noopener noreferrer">
                <FaFacebookF aria-hidden="true" />
              </a>
              <a href="#" aria-label="Follow us on Twitter" rel="noopener noreferrer">
                <FaTwitter aria-hidden="true" />
              </a>
              <a href="#" aria-label="Connect with us on LinkedIn" rel="noopener noreferrer">
                <FaLinkedinIn aria-hidden="true" />
              </a>
              <a href="#" aria-label="Follow us on Instagram" rel="noopener noreferrer">
                <FaInstagram aria-hidden="true" />
              </a>
            </nav>
          </section>
          
          <section className="footerSection" aria-labelledby="navigation-heading">
            <h4 id="navigation-heading">Navigation</h4>
            <nav aria-label="Footer navigation">
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Case Studies</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </nav>
          </section>
          
          <section className="footerSection" aria-labelledby="services-heading">
            <h4 id="services-heading">Services</h4>
            <nav aria-label="Services navigation">
              <ul>
                <li><a href="#">Legacy System Migration</a></li>
                <li><a href="#">ERP Implementation</a></li>
                <li><a href="#">Engineering Consulting</a></li>
                <li><a href="#">Product Consulting</a></li>
                <li><a href="#">Automated Teams</a></li>
                <li><a href="#">Cybersecurity Services</a></li>
              </ul>
            </nav>
          </section>
        </div>
        
        <div className="footerBottom">
          <p><small>© ABC Company 2025 | All Rights Reserved</small></p>
        </div>
      </div>
    </footer>
  );
}