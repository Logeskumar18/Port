import React from "react";
import pic from "../assets/pic.png";

// Tech Stack Badge Component
const TechBadge = ({ tech }) => (
  <span
    className="badge me-1 mb-2"
    style={{
      background: "#00bcd4",
      color: "#182636",
      fontSize: "0.85rem",
      fontWeight: 600,
      borderRadius: "0.7em",
      letterSpacing: "0.5px",
      boxShadow: "0 2px 8px rgba(0,188,212,0.2)",
    }}
  >
    {tech}
  </span>
);

// Project Data Array
const projectData = [
  {
    title: "Personal Portfolio",
    description:
      "A modern, mobile-friendly portfolio using MERN with animations and dynamic sections.",
    image: pic,
    tech: ["React", "Node.js", "MongoDB", "CSS"],
    demo: "https://yourportfolio.live",
    github: "https://github.com/yourusername/portfolio-website",
    featured: true,
  },
  {
    title: "Task Manager App",
    description:
      "Kanban-style task manager built with React, Node.js, MongoDB, and Bootstrap. Features deadline tracking and reminders.",
    image: pic,
    tech: ["React",  "Bootstrap"],
    demo: "https://yourtaskapp.live",
    github: "https://github.com/yourusername/task-manager",
  },
  {
    title: "E-commerce Store",
    description:
      "Full-stack MERN store: JWT auth, Stripe payments, secure product dashboard, responsive catalog.",
    image: pic,
    tech: ["React", "Express", "MongoDB", "Stripe", "JWT"],
    demo: "https://yourecommercestore.live",
    github: "https://github.com/yourusername/ecommerce-app",
  },
];

// Main Projects Component
export default function Projects() {
  return (
    <section
      id="projects"
      className="py-5"
      style={{
        background:
          "linear-gradient(135deg, #182636 0%, #203a43 50%, #2c5364 100%)",
        color: "#f4f8fb",
      }}
    >
      <div className="container">
        <h2
          className="fw-bold mb-5 text-center"
          style={{
            color: "#00bcd4",
            letterSpacing: "1px",
            fontSize: "2.2rem",
          }}
        >
          Projects
        </h2>

        {/* Featured Project */}
        <div className="row justify-content-center mb-5">
          {projectData
            .filter((p) => p.featured)
            .map((proj, idx) => (
              <div className="col-12 col-lg-10" key={idx}>
                <div
                  className="card featured-card shadow border-0 d-flex flex-column flex-lg-row overflow-hidden"
                  style={{
                    background: "#223043",
                    borderRadius: "1.6rem",
                    alignItems: "center",
                    minHeight: "260px",
                  }}
                >
                  {/* Left Image */}
                  <div className="col-lg-5 d-none d-lg-block p-0">
                    <img
                      src={proj.image}
                      alt={`${proj.title} screenshot`}
                      className="w-100 h-100"
                      style={{
                        objectFit: "cover",
                        height: "100%",
                        borderTopLeftRadius: "1.6rem",
                        borderBottomLeftRadius: "1.6rem",
                        minHeight: "220px",
                      }}
                    />
                  </div>

                  {/* Right Content */}
                  <div
                    className="p-4 d-flex flex-column justify-content-center"
                    style={{ flex: 1 }}
                  >
                    <h3
                      className="fw-bold mb-2"
                      style={{ color: "#00bcd4", fontSize: "1.5rem" }}
                    >
                      {proj.title}{" "}
                      <span className="badge bg-info ms-2 text-dark">
                        Featured
                      </span>
                    </h3>
                    <p
                      className="mb-3"
                      style={{ fontSize: "1.05rem", lineHeight: 1.6 }}
                    >
                      {proj.description}
                    </p>
                    <div className="mb-2">
                      {proj.tech.map((tech) => (
                        <TechBadge key={tech} tech={tech} />
                      ))}
                    </div>
                    <div>
                      <a
                        href={proj.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary me-3 mb-2"
                        style={{
                          background: "#00bcd4",
                          color: "#182636",
                          border: "none",
                          fontWeight: "600",
                          fontSize: "1rem",
                        }}
                      >
                        🔗 Live Demo
                      </a>
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-info mb-2"
                        style={{
                          borderColor: "#00bcd4",
                          color: "#00bcd4",
                          fontWeight: "600",
                          fontSize: "1rem",
                        }}
                      >
                        🐙 Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Other Projects */}
        <div className="row g-4">
          {projectData
            .filter((p) => !p.featured)
            .map((proj, idx) => (
              <div className="col-12 col-md-6 col-lg-4" key={idx}>
                <div
                  className="card project-card shadow border-0 d-flex flex-column h-100"
                  style={{
                    background: "#1b2530",
                    borderRadius: "1.2rem",
                    transition: "transform 0.18s, box-shadow 0.18s",
                  }}
                >
                  <img
                    src={proj.image}
                    alt={`${proj.title} screenshot`}
                    className="card-img-top"
                    style={{
                      maxHeight: "155px",
                      objectFit: "cover",
                      borderTopLeftRadius: "1.2rem",
                      borderTopRightRadius: "1.2rem",
                    }}
                  />
                  <div className="card-body d-flex flex-column flex-grow-1">
                    <h5
                      className="card-title mb-2"
                      style={{
                        color: "#00bcd4",
                        fontWeight: 700,
                        fontSize: "1.18rem",
                      }}
                    >
                      {proj.title}
                    </h5>
                    <div className="mb-2">
                      {proj.tech.map((tech) => (
                        <TechBadge key={tech} tech={tech} />
                      ))}
                    </div>
                    <p
                      className="card-text flex-grow-1"
                      style={{
                        fontSize: "1rem",
                        color: "#f4f8fb",
                        lineHeight: 1.6,
                      }}
                    >
                      {proj.description}
                    </p>
                    <div className="mt-3 d-flex gap-2">
                      <a
                        href={proj.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-primary flex-fill"
                        style={{
                          background: "#00bcd4",
                          color: "#182636",
                          border: "none",
                          fontWeight: "600",
                        }}
                      >
                        Live Demo
                      </a>
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-outline-info flex-fill"
                        style={{
                          borderColor: "#00bcd4",
                          color: "#00bcd4",
                          fontWeight: "600",
                        }}
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        .featured-card:hover {
          box-shadow: 0 12px 48px #00bcd4;
          transform: scale(1.01);
        }
        .project-card:hover {
          transform: translateY(-4px) scale(1.03);
          box-shadow: 0 8px 40px #00bcd4;
        }
        .btn-outline-info:hover,
        .btn-outline-info:focus {
          background: #00bcd4;
          color: #223043 !important;
          border-color: #00bcd4 !important;
        }
        @media (max-width: 991px) {
          .featured-card {
            flex-direction: column !important;
            min-height: auto;
          }
        }
        @media (max-width: 767px) {
          .project-card {
            min-height: auto;
          }
          h2 {
            font-size: 1.8rem !important;
          }
        }
      `}</style>
    </section>
  );
}
