import "./home.scss";

import type { ReactElement } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Header from "../../components/header/Header";
import HeroSection from "../../components/heroSection/HeroSection";
import BackgroundCircle from "../../components/backgroundCircle/BackgroundCircle";
import BackgroundGrid from "../../components/backgroundGrid/BackgroundGrid";
import CallToAction from "../../components/callToAction/CallToAction";
// import ClientLogos from "../../components/clientLogos/ClientLogos";
import OurExpertise from "../../components/ourExpertise/OurExpertise";
// import OurImpact from "../../components/ourImpact/OurImpact";
// import ClientReviews from "../../components/clientReviews/ClientReviews";
import Footer from "../../components/footer/Footer";
import BackToTop from "../../components/backToTop/BackToTop";

export default function Home(): ReactElement {
  const { hash } = useLocation();

  useEffect(function() {
    if (hash) {
      setTimeout(function() {
        const element = document.querySelector(hash);
        if (element) {
          const headerHeight = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    }
  }, [hash]);

  return (
    <div id="home">
      <BackgroundCircle />
      <BackgroundGrid />
      <Header />
      <main className="container">
        <HeroSection />
        <CallToAction />
        {/* <ClientLogos /> */}
        <OurExpertise />
        {/* <OurImpact /> */}
        {/* <ClientReviews /> */}
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
