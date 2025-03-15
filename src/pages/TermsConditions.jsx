import React from "react";
import { Link } from "react-router-dom";


const TermsConditions = () => {
  return (
    <div className="policy-container">
      <h1>Terms and Conditions</h1>
      <p>Last updated: 03-15-2025</p>
      <h2>1. Introduction</h2>
      <p>By using our website and services, you agree to these terms.</p>
      <h2>2. Use of Services</h2>
      <p>
        You must follow our guidelines and policies when using our services.
      </p>
      <h2>3. Limitations of Liability</h2>
      <p>
        We are not liable for indirect damages resulting from the use of our
        services.
      </p>

      {/* <Link to="/" className="btn btn-primary">
        Back to Home
      </Link> */}
    </div>
  );
};

export default TermsConditions;
