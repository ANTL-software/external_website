import "./contactUs.scss";

import type { ReactElement } from "react";

import Header from "../../components/header/Header";
import BackgroundCircle from "../../components/backgroundCircle/BackgroundCircle";
import BackgroundGrid from "../../components/backgroundGrid/BackgroundGrid";
import GetInTouch from "../../components/getInTouch/GetInTouch";
import Footer from "../../components/footer/Footer";

export default function ContactUs(): ReactElement {
  return (
    <div id="contactUs">
      <BackgroundCircle />
      <BackgroundGrid />
      <Header />
      <main className="container">
        <GetInTouch />
      </main>
      <Footer />
    </div>
  );
}
