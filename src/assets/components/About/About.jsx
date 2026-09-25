import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

const profileImage = `${import.meta.env.BASE_URL}images/Dil_Bista.png`;

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        {/* Profile Image */}
        <div className="about-image">
          <img src={profileImage} alt="Dil Bista" />
        </div>

        {/* About Content */}
        <div className="about-content">
          <span className="about-subtitle">About Me</span>

          <h2>Who Am I?</h2>

          <p>
            I'm <strong>Dil Bista</strong>, a passionate{" "}
            <strong>Full Stack Developer</strong> focused on building modern,
            scalable, and user-friendly web applications.
          </p>

          <p>
            I work with{" "}
            <strong>React.js, Laravel, PHP, JavaScript, MySQL</strong> and{" "}
            <strong>Git</strong>, with knowledge of <strong>AWS</strong> and{" "}
            <strong>Docker</strong> for deployment and containerization.
          </p>

          <p>
            I enjoy solving real-world problems, learning new technologies, and
            turning ideas into reliable software.
          </p>

          {/* Information */}
          <div className="about-info">
            <div>
              <h4>Name</h4>
              <span>Dil Bista</span>
            </div>

            <div>
              <h4>Education</h4>
              <span>BCA Graduate</span>
            </div>

            <div>
              <h4>Location</h4>
              <span>Nepal</span>
            </div>

            <div>
              <h4>Focus</h4>
              <span>Full Stack Development</span>
            </div>
          </div>

          {/* Contact Button */}
          <a href="mailto:bistadil3@example.com" className="about-btn">
            <Link to="/contact" className="about-btn">
              <span>Contact Me</span>
              <span className="about-btn-arrow">→</span>
            </Link>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
