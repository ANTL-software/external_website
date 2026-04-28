import "./aboutUs.scss";

import type { ReactElement } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Header from "../../components/header/Header";
import BackgroundCircle from "../../components/backgroundCircle/BackgroundCircle";
import BackgroundGrid from "../../components/backgroundGrid/BackgroundGrid";
import OurStory from "../../components/ourStory/OurStory";
import WhatWeStandFor from "../../components/whatWeStandFor/WhatWeStandFor";
import MeetOurTeam from "../../components/meetOurTeam/MeetOurTeam";
import Quote from "../../components/quote/Quote";
import JoinUs from "../../components/joinUs/JoinUs";
import GetInTouch from "../../components/getInTouch/GetInTouch";
import Footer from "../../components/footer/Footer";
import BackToTop from "../../components/backToTop/BackToTop";

export default function AboutUs(): ReactElement {
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
    <div id="aboutUs">
      <BackgroundCircle />
      <BackgroundGrid />
      <Header />
      <main className="container">
        <OurStory />
        <WhatWeStandFor />
        <MeetOurTeam />
        <Quote />
        <JoinUs />
        <GetInTouch />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
