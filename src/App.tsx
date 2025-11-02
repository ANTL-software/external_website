import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./views/home/Home";
import AboutUs from "./views/aboutUs/AboutUs";
import NotFound from "./views/notFound/NotFound";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/case_studies" element={<NotFound />} />
        <Route path="/services" element={<NotFound />} />
        <Route path="/contact_us" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
