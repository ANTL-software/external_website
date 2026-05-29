import "./team.scss";

import type { ReactElement } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import BackgroundCircle from "../../components/backgroundCircle/BackgroundCircle";
import BackgroundGrid from "../../components/backgroundGrid/BackgroundGrid";
import MeetOurTeam_v1 from "../../components/meetOurTeam_v1/MeetOurTeam_v1";
import Quote from "../../components/quote/Quote";
import JobApplication from "../../components/jobApplication/JobApplication";
import Footer from "../../components/footer/Footer";
import BackToTop from "../../components/backToTop/BackToTop";

export default function Team(): ReactElement {
  const { hash } = useLocation();
  useEffect(
    function () {
      if (hash) {
        setTimeout(function () {
          const element = document.querySelector(hash);
          if (element) {
            const headerHeight = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition =
              elementPosition + window.pageYOffset - headerHeight;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        }, 100);
      }
    },
    [hash],
  );
  return (
    <div id="aboutUs">
      <BackgroundCircle />
      <BackgroundGrid />
      <Header />
      <main className="container">        
        <MeetOurTeam_v1 />
        <Quote />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
