import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./views/home/Home";
import AboutUs from "./views/aboutUs/AboutUs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about_us" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
