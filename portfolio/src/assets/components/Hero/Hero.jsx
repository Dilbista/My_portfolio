import "./Hero.css";
import { useNavigate } from "react-router-dom";

const heroImage = `${import.meta.env.BASE_URL}images/Dil_Bista.png`;

const Hero = () => {
  const navigate = useNavigate();

  const handleViewWork = () => {
    if (window.location.pathname === "/") {
      document.getElementById("projects")?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      navigate("/");

      setTimeout(() => {
        document.getElementById("projects")?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    }
  };

  return (
    <section className="hero" id="home">

      <div className="hero-text">

        {/* Typing Text */}
        <h1 className="typing-text">
          Hello, I'm Dil Bista
        </h1>

        <h2>Full Stack Developer</h2>

        <p >
          <strong>
             I build modern, responsive, and user-friendly web applications
          with clean code and thoughtful user experiences.
          </strong>
         
        </p>

        <button type="button" onClick={handleViewWork}>
          View My Work
        </button>

      </div>

      <div className="hero-image">

        <div className="image-wrapper">

          <span className="tech-name tech-top">
            React.js
          </span>

          <span className="tech-name tech-right">
            Laravel
          </span>

          <span className="tech-name tech-bottom">
            Docker
          </span>

          <span className="tech-name tech-left">
            PHP
          </span>

          <span className="tech-name tech-top-right">
            AWS
          </span>

          <span className="tech-name tech-bottom-left">
            MySQL
          </span>

          <div className="glow"></div>

          <img
            src={heroImage}
            alt="Dil Bista"
          />

        </div>

      </div>

    </section>
  );
};

export default Hero;