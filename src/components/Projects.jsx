import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/projects");
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="projects-container">
      <h2>
        Every project is <span className="highlight">special</span> for <span className="highlight">us</span>.
      </h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project._id} className="project-card">
            <img src={`http://localhost:5001/uploads/${project.image}`} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;