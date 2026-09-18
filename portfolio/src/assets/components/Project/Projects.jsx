import "./Projects.css";

import { useMemo, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const jobBoxImage = `${import.meta.env.BASE_URL}images/jobboxglobal.png`;
const eClothingImage = `${import.meta.env.BASE_URL}images/e_clothing.jpeg`;

const projects = [
  {
    id: "jobbox-global",
    title: "Job Box Global",
    description:
      "Worked as a backend Laravel developer on a job platform for candidates, employers, training, and placement support.",
    technology: "Laravel, Backend Development, REST API, MySQL",
    image: jobBoxImage,
    live_demo: "https://www.jobboxglobal.com/",
  },
  {
    id: "e-clothing",
    title: "E_clothing Application",
    description:
      "Worked as a full stack Laravel developer on an e-commerce clothing application with product, cart, and order features.",
    technology: "Laravel, PHP, MySQL, Full Stack Development",
    image: eClothingImage,
    github_link: "https://github.com/Dilbista/E_clothing",
  },
];

const Projects = () => {
  const [selectedTechnology, setSelectedTechnology] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const technologies = useMemo(() => {
    const projectTechnologies = projects.flatMap((project) =>
      project.technology.split(",").map((tech) => tech.trim()),
    );

    return ["All", ...new Set(projectTechnologies)];
  }, []);

  const filteredProjects = projects.filter((project) => {
    const normalizedSearch = searchTerm.trim().toLowerCase();
    const projectTechnology = project.technology.toLowerCase();
    const matchesSelectedTechnology =
      selectedTechnology === "All" ||
      projectTechnology.includes(selectedTechnology.toLowerCase());
    const matchesSearch =
      normalizedSearch === "" || projectTechnology.includes(normalizedSearch);

    return matchesSelectedTechnology && matchesSearch;
  });

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-title">
          <h2>Featured Projects</h2>

         
        </div>

        <div className="project-filter">
          <input
            type="search"
            placeholder="Search by technology..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            aria-label="Search projects by technology"
          />

          <div className="filter-chips" aria-label="Filter projects">
            {technologies.map((technology) => (
              <button
                className={
                  selectedTechnology === technology ? "active" : undefined
                }
                key={technology}
                type="button"
                onClick={() => setSelectedTechnology(technology)}
              >
                {technology}
              </button>
            ))}
          </div>
        </div>

        <div className="project-grid">
          {filteredProjects.map((project) => (
            <div className="project-card" key={project.id}>
              {/* Image */}

              <div className="project-image">
                <img
                  src={
                    project.image
                      ? project.image
                      : jobBoxImage
                  }
                  alt={project.title}
                />
              </div>

              {/* Content */}

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                {/* Technologies */}

                <div className="tech-stack">
                  {project.technology &&
                    project.technology
                      .split(",")
                      .map((tech, index) => <span key={index}>{tech}</span>)}
                </div>

                {/* Buttons */}

                <div className="project-buttons">
                  {project.github_link && (
                    <a
                      href={project.github_link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub />
                      GitHub
                    </a>
                  )}

                  {project.live_demo && (
                    <a
                      href={project.live_demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="empty-projects">No projects found for that technology.</p>
        )}
      </div>
    </section>
  );
};

export default Projects;
