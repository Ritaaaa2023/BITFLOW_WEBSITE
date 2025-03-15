import React from "react";
import { Link } from "react-router-dom";

const CookiePolicy = () => {
  return (
    <div className="policy-container">
      <h1>Cookie Policy</h1>
      <p>Last updated: 03-15-2025</p>
      <h2>1. What Are Cookies?</h2>
      <p>
        Cookies are small data files stored on your device when you visit our
        website.
      </p>
      <h2>2. How We Use Cookies</h2>
      <p>
        We use cookies to analyze traffic, personalize content, and improve user
        experience.
      </p>
      <h2>3. Managing Cookies</h2>
      <p>You can control and disable cookies through your browser settings.</p>

      {/* <Link to="/" className="btn btn-primary">
        Back to Home
      </Link> */}
    </div>
  );
};

export default CookiePolicy;
