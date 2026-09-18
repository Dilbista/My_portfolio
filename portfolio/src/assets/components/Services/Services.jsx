import React from "react";
import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaCloud,
  FaTools,
} from "react-icons/fa";

import "./Services.css";

const services = [
  {
    id: 1,
    icon: <FaCode />,
    title: "Full Stack Web Development",
    description:
      "Building complete, modern, and scalable web applications from frontend to backend.",
  },
  {
    id: 2,
    icon: <FaLaptopCode />,
    title: "Frontend Development",
    description:
      "Creating responsive and interactive user interfaces using React.js and modern web technologies.",
  },
  {
    id: 3,
    icon: <FaServer />,
    title: "Backend & API Development",
    description:
      "Developing secure backend systems and RESTful APIs using Laravel, PHP, and modern development practices.",
  },
  {
    id: 4,
    icon: <FaDatabase />,
    title: "Database Development",
    description:
      "Designing and managing efficient databases using MySQL with reliable data structures and relationships.",
  },
  {
    id: 5,
    icon: <FaCloud />,
    title: "AWS & Docker Deployment",
    description:
      "Deploying and managing web applications using AWS, Docker, and cloud-based development practices.",
  },
  {
    id: 6,
    icon: <FaTools />,
    title: "Website Maintenance",
    description:
      "Maintaining, updating, optimizing, and improving websites for performance and reliability.",
  },
];

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="services-container">

        <div className="services-header">
          <span>What I Offer</span>

          <h2>My Services</h2>

          <p>
            Full stack development solutions from frontend and backend
            development to database management and cloud deployment.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.id}>

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <div className="service-number">
                0{service.id}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;