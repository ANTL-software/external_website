import "./footer.scss";
import type { ReactElement } from "react";
import antlLogo from "../../assets/brand/antlLogo.png";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer(): ReactElement {
  return (
    <footer id="footerComponent" role="contentinfo">
      <div className="container">
        <div className="footerContent">
          <section className="footerSection companySection" aria-labelledby="company-heading">
            <header className="companyLogo">
              <figure className="logoIcon" role="img" aria-label="antl logo">
                <img src={antlLogo} alt="antl logo" />
              </figure>
            </header>
            <p>Expert de l'expérience client et du développement commercial. Nous accompagnons les entreprises dans la conquête, la fidélisation et la rétention de leur clientèle grâce à des solutions sur mesure et une approche humaine.</p>
            <nav className="socialIcons" aria-label="Social media links">
              <a href="#" aria-label="Follow us on Facebook" rel="noopener noreferrer">
                <FaFacebookF aria-hidden="true" />
              </a>
              <a href="#" aria-label="Follow us on X" rel="noopener noreferrer">
                <FaXTwitter aria-hidden="true" />
              </a>
              <a href="#" aria-label="Follow us on TikTok" rel="noopener noreferrer">
                <FaTiktok aria-hidden="true" />
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
                <li><a href="/#ourExpertiseComponent">Nos expertises</a></li>
                <li><a href="/about_us">À propos</a></li>
                <li><a href="/about_us#meetOurTeamComponent">Notre équipe</a></li>
                <li><a href="/about_us#getInTouchComponent">Nous contacter</a></li>
                <li><a href="/join_us">Nous rejoindre</a></li>
                <li><a href="/legal">Mentions légales</a></li>
              </ul>
            </nav>
          </section>

          <section className="footerSection" aria-labelledby="services-heading">
            <h4 id="services-heading">Nos services</h4>
            <nav aria-label="Services navigation">
              <ul>
                <li><a href="/#conquete">Conquête</a></li>
                <li><a href="/#fidelisation">Fidélisation</a></li>
                <li><a href="/#retention">Rétention</a></li>
                <li><a href="/#conception">Conception & Outils</a></li>
                <li><a href="/#branding">Branding</a></li>
                <li><a href="/#conseil">Conseil</a></li>
              </ul>
            </nav>
          </section>
        </div>
        
        <div className="footerBottom">
          <p><small>© antl 2026 | All Rights Reserved</small></p>
        </div>
      </div>
    </footer>
  );
}