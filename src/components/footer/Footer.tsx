import "./footer.scss";
import type { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import antlLogo from "../../assets/brand/antlLogo.png";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import LanguageSelector from "../languageSelector/LanguageSelector";

export default function Footer(): ReactElement {
  const { t } = useTranslation();

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
            <p>{t("footer.description")}</p>
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
            <h4 id="navigation-heading">{t("footer.navigation")}</h4>
            <nav aria-label="Footer navigation">
              <ul>
                <li><Link to="/#ourExpertiseComponent">{t("footer.expertises")}</Link></li>
                <li><Link to="/about_us">{t("footer.about")}</Link></li>
                <li><Link to="/about_us#meetOurTeamComponent">{t("footer.team")}</Link></li>
                <li><Link to="/about_us#getInTouchComponent">{t("footer.contact")}</Link></li>
                <li><Link to="/join_us">{t("footer.join")}</Link></li>
                <li><Link to="/legal">{t("footer.legal")}</Link></li>
              </ul>
            </nav>
          </section>

          <section className="footerSection" aria-labelledby="services-heading">
            <h4 id="services-heading">{t("footer.services")}</h4>
            <nav aria-label="Services navigation">
              <ul>
                <li><Link to="/#conquete">{t("footer.conquest")}</Link></li>
                <li><Link to="/#fidelisation">{t("footer.loyalty")}</Link></li>
                <li><Link to="/#retention">{t("footer.retention")}</Link></li>
                <li><Link to="/#conception">{t("footer.conception")}</Link></li>
                <li><Link to="/#branding">{t("footer.branding")}</Link></li>
                <li><Link to="/#conseil">{t("footer.consulting")}</Link></li>
              </ul>
            </nav>
          </section>
        </div>

        <div className="footerBottom">
          <div className="footerBottomLeft">
            <p><small>{t("footer.copyright")}</small></p>
          </div>
          <div className="footerBottomRight">
            <LanguageSelector />
          </div>
        </div>
      </div>
    </footer>
  );
}