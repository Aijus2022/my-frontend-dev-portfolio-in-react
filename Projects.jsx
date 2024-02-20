// Projects.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import projectsData from './projects.json'; // Import the project data

function Projects() {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-4">
      {projectsData.map(project => (
        <div className="col" key={project.id}>
          <div className="card h-100">
            <img src={project.image} className="card-img-top" alt={project.title} />
            <div className="card-body">
              <h5 className="card-title">{project.id}: {project.title}</h5>
              <p className="card-text">{project.description}</p>
              <Link to={`/projects/${project.id}`} className="btn btn-primary">View Project</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
