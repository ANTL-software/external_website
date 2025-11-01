import "./home.scss";

import backgroundImage from "../../assets/images/background.png";

import type { ReactElement } from "react";


import Header from "../../components/header/Header";
import HeroSection from "../../components/heroSection/HeroSection";
import BackgroundCircle from "../../components/backgroundCircle/BackgroundCircle";
import BackgroundGrid from "../../components/backgroundGrid/BackgroundGrid";
import CallToAction from "../../components/callToAction/CallToAction";
import ClientLogos from "../../components/clientLogos/ClientLogos";
import OurExpertise from "../../components/ourExpertise/OurExpertise";
import OurImpact from "../../components/ourImpact/OurImpact";
import WhyChooseUs from "../../components/whyChooseUs/WhyChooseUs";
import SuccessStories from "../../components/successStories/SuccessStories";
import FAQ from "../../components/faq/FAQ";
import GetInTouch from "../../components/getInTouch/GetInTouch";
import Footer from "../../components/footer/Footer";

export default function Home(): ReactElement {
  return (
    <div id="home">
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
        <ClientLogos />
        <OurExpertise />
        <OurImpact />
        <WhyChooseUs />
        <SuccessStories />
        <FAQ />
        <GetInTouch />
      </main>
      <Footer />
    </div>
  );
}
