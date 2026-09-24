import React from "react";

import { Link } from "react-router-dom";

import "./Footer.css";

import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* About */}
        <div className="footer-column">

          <h2 className="footer-logo">
            Dil<span>Bista</span>
          </h2>

          <p>
            Passionate Full Stack Developer dedicated to building
            modern, responsive, and user-friendly web applications
            with clean code and exceptional user experiences.
          </p>

        </div>


        {/* Quick Links */}
        <div className="footer-column">

          <h3>Quick Links</h3>

          <ul>

            <li>
              <Link to={{ pathname: "/", hash: "#home" }}>
                Home
              </Link>
            </li>

            <li>
              <Link to="/about">
                About
              </Link>
            </li>

            <li>
              <Link to={{ pathname: "/", hash: "#skills" }}>
                Skills
              </Link>
            </li>

            <li>
              <Link to={{ pathname: "/", hash: "#projects" }}>
                Projects
              </Link>
            </li>

            <li>
              <Link to={{ pathname: "/", hash: "#services" }}>
                Services
              </Link>
            </li>

            <li>
              <Link to="/contact">
                Contact
              </Link>
            </li>

          </ul>

        </div>


        {/* Services */}
        <div className="footer-column">

          <h3>Services</h3>

          <ul>

            <li>Web Development</li>

            <li>Frontend Development</li>

            <li>Static Portfolio Websites</li>

            <li>Landing Pages</li>

            <li>Website Maintenance</li>

          </ul>

        </div>


        {/* Contact */}
        <div className="footer-column">

          <h3>Contact</h3>

          <p>
            <FaEnvelope className="icon" />
            bistadil3@example.com
          </p>

          <p>
            <FaPhoneAlt className="icon" />
            +977-9848912874
          </p>

          <p>
            <FaMapMarkerAlt className="icon" />
            Nepal
          </p>


          {/* Social Icons */}
          <div className="social-icons">

            <a
              href="https://github.com/Dilbista"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/dil-bista-177153261/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://facebook.com/dilbista"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>

          </div>

        </div>

      </div>


      {/* Footer Bottom */}
      <div className="footer-bottom">

        <p>
          &copy; {new Date().getFullYear()} Dil Bista.
          All Rights Reserved.
        </p>


        {/* Privacy and Terms */}
        <div className="legal-links">

          <Link to="/privacy">
            Privacy Policy
          </Link>

          <span>|</span>

          <Link to="/terms">
            Terms & Conditions
          </Link>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
