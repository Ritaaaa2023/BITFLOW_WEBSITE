import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsConditions from "./pages/TermsConditions.jsx";
import CookiePolicy from "./pages/CookiePolicy.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
      </Routes>
    </Router>
  );
};

export default App;
