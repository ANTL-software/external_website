import "./header.scss";

import antlLogo from "../../assets/brand/antlLogo.png";

import { Link, NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

import type { ReactElement } from "react";

import GoToConsultationLink from "../goToConsultationLink/GoToConsultationLink";

export default function Header(): ReactElement {
  const { t } = useTranslation();
  const headerRef = useRef<HTMLElement>(null);
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState("");
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

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

  // Update active tab based on current path
  useEffect(function() {
    setActiveTab(window.location.pathname);
  }, []);

  // Auto-scroll to active tab on mount
  useEffect(function() {
    if (tabsContainerRef.current) {
      const activeTabElement = tabsContainerRef.current.querySelector('.tabLink.active');
      if (activeTabElement) {
        activeTabElement.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  }, []);

  // Check if we can scroll left or right
  useEffect(function() {
    function checkScroll() {
      if (tabsContainerRef.current) {
        const el = tabsContainerRef.current;
        const tolerance = 2;
        setCanScrollLeft(el.scrollLeft > tolerance);
        setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - tolerance);
      }
    }

    const container = tabsContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
      // Initial check with delay to ensure DOM is ready
      setTimeout(checkScroll, 100);
      setTimeout(checkScroll, 300);
    }

    return function() {
      if (container) {
        container.removeEventListener('scroll', checkScroll);
      }
      window.removeEventListener('resize', checkScroll);
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

      {/* Mobile Horizontal Tabs Navigation */}
      <nav className="mobileTabsContainer">
        {canScrollLeft && <span className="ellipsis ellipsisLeft">...</span>}
        <div className="tabsWrapper" ref={tabsContainerRef}>
          <NavLink
            to="/"
            className="tabLink"
            onClick={function() { setActiveTab("/"); }}
          >
            <span className="tabLabel">{t("header.home")}</span>
          </NavLink>
          <NavLink
            to="/about_us"
            className="tabLink"
            onClick={function() { setActiveTab("/about_us"); }}
          >
            <span className="tabLabel">{t("header.about")}</span>
          </NavLink>
          <NavLink
            to="/contact_us"
            className="tabLink"
            onClick={function() { setActiveTab("/contact_us"); }}
          >
            <span className="tabLabel">{t("header.contact")}</span>
          </NavLink>
          <NavLink
            to="/join_us"
            className="tabLink"
            onClick={function() { setActiveTab("/join_us"); }}
          >
            <span className="tabLabel">{t("header.join")}</span>
          </NavLink>
        </div>
        {canScrollRight && <span className="ellipsis ellipsisRight">...</span>}
      </nav>

      <div className="headerActions">
        <div className="desktopOnly">
          <GoToConsultationLink />
        </div>
      </div>
    </header>
  );
}
