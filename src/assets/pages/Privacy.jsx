
import React from "react";
import { Link } from "react-router-dom";
import "./Legal.css";
const Privacy = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">

        <Link to="/" className="back-home">
          ← Back to Home
        </Link>

        <h1>Privacy Policy</h1>

        <p className="updated">
          Last Updated: September 24, 2026
        </p>

        <p>
          Welcome to the personal portfolio website of Dil Bista.
          Your privacy is important. This Privacy Policy explains
          how information may be handled when you visit or use this
          website.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          This website may collect information that you voluntarily
          provide, such as your name, email address, and message when
          you contact me through a contact form or email.
        </p>

        <h2>2. How Information Is Used</h2>
        <p>
          Information provided through the website may be used to
          respond to inquiries and communicate with you.
        </p>

        <h2>3. Cookies</h2>
        <p>
          This website may use cookies or similar technologies to
          improve website functionality and understand general
          website usage.
        </p>

        <h2>4. Analytics</h2>
        <p>
          Analytics services may be used to understand website
          traffic and improve website performance.
        </p>

        <h2>5. Third-Party Links</h2>
        <p>
          This website may contain links to third-party websites such
          as GitHub, LinkedIn, Facebook, or other external services.
          I am not responsible for the privacy practices of those
          websites.
        </p>

        <h2>6. Data Security</h2>
        <p>
          Reasonable measures may be taken to protect information
          submitted through this website. However, no internet
          transmission can be guaranteed to be completely secure.
        </p>

        <h2>7. Changes to This Policy</h2>
        <p>
          This Privacy Policy may be updated from time to time.
          Changes will be reflected on this page with an updated date.
        </p>

        <h2>8. Contact</h2>
        <p>
          If you have questions about this Privacy Policy, please
          contact me through the contact information available on
          this website.
        </p>

      </div>
    </div>
  );
};

export default Privacy;
