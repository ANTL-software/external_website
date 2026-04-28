import "./header.scss";

import antlLogo from "../../assets/brand/antlLogo.png";

import { Link, NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

import type { ReactElement } from "react";

import GoToConsultationLink from "../goToConsultationLink/GoToConsultationLink";
import LanguageSelector from "../languageSelector/LanguageSelector";

export default function Header(): ReactElement {
  const { t } = useTranslation();
  const headerRef = useRef<HTMLElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(function() {
    // Offset adaptatif selon la taille d'écran
    const isMobile = window.innerWidth <= 1220;
    const offset = isMobile ? 50 : 100;

    AOS.init({
      duration: 800,
      easing: 'ease-out-back',
      offset: offset,
      once: true
    });

    // Réinitialiser AOS lors du redimensionnement
    function handleResize() {
      const newIsMobile = window.innerWidth <= 1220;
      const newOffset = newIsMobile ? 50 : 100;

      AOS.init({
        duration: 800,
        easing: 'ease-out-back',
        offset: newOffset,
        once: true
      });
    }

    window.addEventListener('resize', handleResize);
    return function() {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(function() {
    let ticking = false;

    function handleScroll() {
      if (!ticking) {
        requestAnimationFrame(function() {
          if (headerRef.current) {
            if (window.scrollY > 20) {
              headerRef.current.classList.add('scrolled');
            } else {
              // Retour instantané en haut
              headerRef.current.style.transition = 'none';
              headerRef.current.classList.remove('scrolled');
              // Remettre les transitions après un court délai
              setTimeout(function() {
                if (headerRef.current) {
                  headerRef.current.style.transition = '';
                }
              }, 50);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return function() {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function toggleMobileMenu() {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);
    
    // Disable/enable scroll
    if (newState) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = '';
  }

  // Cleanup on unmount
  useEffect(function() {
    return function() {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <header ref={headerRef} id="header" className="header container">
      <Link to={"/"} className="brandLink" aria-label="Page d'accueil">
        <figure className="brandLogo" aria-label="Logo de l'application">
          <img src={antlLogo} alt="Logo de l'entreprise" />
        </figure>
      </Link>

      {/* Desktop Navigation */}
      <nav className="headerNav desktopNav">
        <ul className="navList">
          <li className="navItem">
            <NavLink to={"/"} className="navLink" aria-label={t("header.home")}>
              <span className="navLinkText">{t("header.home")}</span>
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink to={"/about_us"} className="navLink" aria-label={t("header.about")}>
              <span className="navLinkText">{t("header.about")}</span>
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink to={"/contact_us"} className="navLink" aria-label={t("header.contact")}>
              <span className="navLinkText">{t("header.contact")}</span>
            </NavLink>
          </li>
          <li className="navItem">
            <NavLink to={"/join_us"} className="navLink" aria-label={t("header.join")}>
              <span className="navLinkText">{t("header.join")}</span>
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="headerActions">
        <div className="desktopOnly">
          <GoToConsultationLink />
          <LanguageSelector />
        </div>

        {/* Mobile Language Selector - visible only when menu is open */}
        {isMobileMenuOpen && (
          <div className="mobileLanguageSelector">
            <LanguageSelector />
          </div>
        )}

        {/* Mobile Menu Button */}
        <button
          className="mobileMenuButton"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <div className={`hamburgerIcon ${isMobileMenuOpen ? "open" : ""}`}>
            {isMobileMenuOpen ? <RiCloseLine /> : <RiMenuLine />}
          </div>
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div
          className="mobileMenuOverlay"
          data-aos="slide-left"
          data-aos-duration="300"
        >
          <nav className="mobileNav">
            <ul className="mobileNavList">
              <li className="mobileNavItem">
                <NavLink
                  to={"/"}
                  className="mobileNavLink"
                  onClick={closeMobileMenu}
                >
                  {t("header.home")}
                </NavLink>
              </li>
              <li className="mobileNavItem">
                <NavLink
                  to={"/about_us"}
                  className="mobileNavLink"
                  onClick={closeMobileMenu}
                >
                  {t("header.about")}
                </NavLink>
              </li>
              <li className="mobileNavItem">
                <NavLink
                  to={"/contact_us"}
                  className="mobileNavLink"
                  onClick={closeMobileMenu}
                >
                  {t("header.contact")}
                </NavLink>
              </li>
              <li className="mobileNavItem">
                <NavLink
                  to={"/join_us"}
                  className="mobileNavLink"
                  onClick={closeMobileMenu}
                >
                  {t("header.join")}
                </NavLink>
              </li>
            </ul>
            <div className="mobileMenuActions">
              <GoToConsultationLink />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
