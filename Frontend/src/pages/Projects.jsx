// src/pages/Projects.jsx
import React from 'react';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A responsive portfolio website built with the MERN stack, showcasing my skills and projects.',
    link: 'https://github.com/yourusername/portfolio-website'
  },
  {
    title: 'E-commerce App',
    description: 'A full-stack e-commerce application with product listings, cart, and user authentication.',
    link: 'https://github.com/yourusername/ecommerce-app'
  },
  {
    title: 'Task Manager',
    description: 'A project management tool that helps organize and track tasks with deadlines and statuses.',
    link: 'https://github.com/yourusername/task-manager'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-primary fw-bold mb-4">Projects</h2>
        <div className="row g-4">
          {projects.map(({ title, description, link }, idx) => (
            <div className="col-md-6 col-lg-4" key={idx}>
              <div className="card h-100 shadow-sm">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text flex-grow-1">{description}</p>
                  {link && (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary mt-3 align-self-start"
                    >
                      View Project
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
