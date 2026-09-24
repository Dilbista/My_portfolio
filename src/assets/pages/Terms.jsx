
import React from "react";
import { Link } from "react-router-dom";
import "./Legal.css";
const Terms = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">

        <Link to="/" className="back-home">
          ← Back to Home
        </Link>

        <h1>Terms & Conditions</h1>

        <p className="updated">
          Last Updated: September 24, 2026
        </p>

        <p>
          By accessing and using this website, you agree to the
          following Terms & Conditions.
        </p>

        <h2>1. Website Purpose</h2>
        <p>
          This website is a personal portfolio created to showcase
          professional skills, projects, services, experience, and
          other relevant information.
        </p>

        <h2>2. Use of Website</h2>
        <p>
          You agree to use this website only for lawful purposes and
          in a way that does not interfere with the operation,
          security, or availability of the website.
        </p>

        <h2>3. Intellectual Property</h2>
        <p>
          Unless otherwise stated, the original content, text,
          graphics, designs, and other materials on this website
          belong to Dil Bista or are used with appropriate permission.
        </p>

        <h2>4. Projects and Information</h2>
        <p>
          Project descriptions and technical information are provided
          for portfolio and informational purposes. Some projects may
          be academic, personal, demonstration, or development work.
        </p>

        <h2>5. External Links</h2>
        <p>
          This website may contain links to external websites and
          services. These links are provided for convenience.
        </p>

        <h2>6. Services</h2>
        <p>
          Information about development and other services displayed
          on this website is for general information. Specific project
          requirements, pricing, timelines, and agreements may be
          discussed separately.
        </p>

        <h2>7. Disclaimer</h2>
        <p>
          The information on this website is provided for general
          informational purposes. Reasonable efforts may be made to
          keep the information accurate and current.
        </p>

        <h2>8. Limitation of Liability</h2>
        <p>
          To the extent permitted by applicable law, I am not
          responsible for losses or damages arising from the use of,
          or inability to use, this website.
        </p>

        <h2>9. Changes to These Terms</h2>
        <p>
          These Terms & Conditions may be updated from time to time.
          Changes will become effective when they are published on
          this page.
        </p>

        <h2>10. Contact</h2>
        <p>
          If you have questions about these Terms & Conditions, please
          use the contact information available on this website.
        </p>

      </div>
    </div>
  );
};

export default Terms;