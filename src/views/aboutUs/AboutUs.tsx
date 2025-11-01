import "./aboutUs.scss";

import backgroundImage from "../../assets/images/background.png";

import type { ReactElement } from "react";

import Header from "../../components/header/Header";
import HeroSection from "../../components/heroSection/HeroSection";
import BackgroundCircle from "../../components/backgroundCircle/BackgroundCircle";
import BackgroundGrid from "../../components/backgroundGrid/BackgroundGrid";
import CallToAction from "../../components/callToAction/CallToAction";
import OurStory from "../../components/ourStory/OurStory";
import WhatWeStandFor from "../../components/whatWeStandFor/WhatWeStandFor";
import MeetOurTeam from "../../components/meetOurTeam/MeetOurTeam";
import Quote from "../../components/quote/Quote";
import JoinUs from "../../components/joinUs/JoinUs";
import GetInTouch from "../../components/getInTouch/GetInTouch";
import Footer from "../../components/footer/Footer";

export default function AboutUs(): ReactElement {
  return (
    <div id="aboutUs">
      <figure className="backgroundContainer">
        <img
          src={backgroundImage}
          alt="A beautiful background"
          className="backgroundImage"
        />
      </figure>
      <BackgroundCircle />
      <BackgroundGrid />
      <Header />
      <main className="container">
        <HeroSection />
        <CallToAction />
        <OurStory />
        <WhatWeStandFor />
        <MeetOurTeam />
        <Quote />
        <JoinUs />
        <GetInTouch />
      </main>
      <Footer />
    </div>
  );
}
