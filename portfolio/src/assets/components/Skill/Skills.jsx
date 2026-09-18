import "./Skills.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaLaravel,
  FaDocker,
  FaGitAlt,
  FaAws,
} from "react-icons/fa";

import { SiPhp, SiMysql, SiGithub } from "react-icons/si";

const iconMap = {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaLaravel,
  FaGitAlt,
  SiPhp,
  FaDocker,
  FaAws,
  SiMysql,
  SiGithub,
};

const skills = [
  { id: "html", name: "HTML5", icon: "FaHtml5", level: 95, color: "#e34f26" },
  { id: "css", name: "CSS3", icon: "FaCss3Alt", level: 90, color: "#1572b6" },
  { id: "javascript", name: "JavaScript", icon: "FaJs", level: 85, color: "#f7df1e" },
  { id: "react", name: "React", icon: "FaReact", level: 85, color: "#61dafb" },
  { id: "laravel", name: "Laravel", icon: "FaLaravel", level: 80, color: "#ff2d20" },
  { id: "php", name: "PHP", icon: "SiPhp", level: 80, color: "#777bb4" },
  { id: "mysql", name: "MySQL", icon: "SiMysql", level: 75, color: "#4479a1" },
    { id: "aws", name: "aws", icon: "FaAws", level: 85, color: "#7092de" },
    { id: "docker", name: "docker", icon: "FaDocker", level: 85, color: "#7092de" },

  { id: "git", name: "Git", icon: "FaGitAlt", level: 85, color: "#f05032" },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2>Skills</h2>
<br></br>
        <div className="skills-grid">
          {skills.map((skill) => {
            const Icon = iconMap[skill.icon];

            return (
              <div className="skill-card" key={skill.id}>
                <div className="skill-header">
                  <div className="skill-icon" style={{ color: skill.color }}>
                    {Icon ? <Icon /> : null}
                  </div>

                  <div className="skill-info">
                    <h3>{skill.name}</h3>
                    <span>{skill.level}%</span>
                  </div>
                </div>

                <div className="progress">
                  <div
                    className="progress-fill"
                    style={{
                      width: `${skill.level}%`,
                      background: skill.color,
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
