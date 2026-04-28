import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./views/home/Home";
import AboutUs from "./views/aboutUs/AboutUs";
import ContactUs from "./views/contactUs/ContactUs";
import JoinUs from "./views/joinUs/JoinUs";
import NotFound from "./views/notFound/NotFound";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/contact_us" element={<ContactUs />} />
        <Route path="/join_us" element={<JoinUs />} />
        <Route path="/legal" element={<NotFound />} />
        <Route path="/case_studies" element={<NotFound />} />
        <Route path="/services" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
