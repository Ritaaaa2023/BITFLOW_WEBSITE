import React from "react";
import { Link } from "react-router-dom";


const PrivacyPolicy = () => {
  return (
    <div className="policy-container">
      <h1>Privacy Policy</h1>
      <p>Last updated: 03-15-2025</p>
      <p>
        We respect your privacy and are committed to protecting your personal
        data. This Privacy Policy explains how we collect, use, and protect your
        information.
      </p>
      <h2>1. Information We Collect</h2>
      <p>
        We collect data such as name, email, and contact details when you
        interact with our website.
      </p>
      <h2>2. How We Use Your Data</h2>
      <p>
        We use your information to provide services, improve user experience,
        and comply with legal requirements.
      </p>
      <h2>3. Data Protection</h2>
      <p>
        We implement industry-standard security measures to protect your data.
      </p>
      <Link to="/" className="btn btn-primary">
        Back to Home
      </Link>
    </div>
  );
};

export default PrivacyPolicy;
