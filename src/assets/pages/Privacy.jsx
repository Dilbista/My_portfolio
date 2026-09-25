import React from "react";
import "./Legal.css";

const Privacy = () => {
  return (
    <div className="privacy-page">
      <div className="privacy-container">
        <h1>Privacy Policy</h1>

        <p className="privacy-updated">Last updated: September 26, 2026</p>

        <p>
          Welcome to <strong>bistdil.com.np</strong>. This website is my
          personal portfolio and blog where I share my experiences, learning
          journey, projects, tutorials, and technology-related articles.
        </p>

        <h4>Information We Collect</h4>
        <p>
          We may collect information you voluntarily provide, such as your name
          and email address when you contact us. Basic technical information may
          also be collected to improve website performance.
        </p>

        <h4>Cookies & Advertising</h4>
        <p>
          This website may use cookies, analytics, and advertising services such
          as Google AdSense. Third-party providers, including Google, may use
          cookies to display and measure relevant advertisements.
        </p>

        <p>
          You can manage personalized advertising through{" "}
          <a
            href="https://adssettings.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Ads Settings
          </a>
          .
        </p>

        <h4>Third-Party Links</h4>
        <p>
          This website may contain links to third-party websites. We are not
          responsible for their content or privacy practices.
        </p>

        <h4>Data Security</h4>
        <p>
          Reasonable steps are taken to protect information, but no online
          service can guarantee complete security.
        </p>

        <h4>Changes</h4>
        <p>
          This Privacy Policy may be updated when necessary. Changes will be
          posted on this page.
        </p>

        <h4>Contact</h4>
        <p>
          If you have any questions about this Privacy Policy, please contact me
          through the contact information available on this website.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
