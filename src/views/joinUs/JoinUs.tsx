import "./joinUs.scss";

import type { ReactElement } from "react";

import Header from "../../components/header/Header";
import BackgroundCircle from "../../components/backgroundCircle/BackgroundCircle";
import BackgroundGrid from "../../components/backgroundGrid/BackgroundGrid";
import JobApplication from "../../components/jobApplication/JobApplication";
import Footer from "../../components/footer/Footer";

export default function JoinUs(): ReactElement {
  return (
    <div id="joinUs">
      <BackgroundCircle />
      <BackgroundGrid />
      <Header />
      <main className="container">
        <JobApplication />
      </main>
      <Footer />
    </div>
  );
}
