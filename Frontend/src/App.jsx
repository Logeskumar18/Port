import React, { useEffect, useState } from "react";
import "./App.css"; // Import the external CSS

// Simple SVG icons for projects
const projectIcons = {
  house: (
    <svg
      style={{ width: "40px", height: "40px", fill: "#ff6f61" }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      <path d="M32 12L6 36h8v16h12V40h8v12h12V36h8z" />
    </svg>
  ),
  bank: (
    <svg
      style={{ width: "40px", height: "40px", fill: "#1e90ff" }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      <path d="M2 54h60v4H2v-4zM32 10L2 30h60L32 10zM14 34v18h36V34H14z" />
    </svg>
  ),
};

// Custom fade-in hook
const useFadeIn = (delay = 0) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);
  return visible;
};

const App = () => {
  const fadeIn0 = useFadeIn(200);
  const fadeIn1 = useFadeIn(600);
  const fadeIn2 = useFadeIn(1000);
  const fadeIn3 = useFadeIn(1400);
  const fadeIn4 = useFadeIn(1800);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="page">
      {/* Navbar */}
      <nav className="navbar">
        <ul className="nav-list">
          {["home", "about", "profile", "projects", "contact"].map((section) => (
            <li
              key={section}
              className="nav-item"
              onClick={() => scrollToSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero Section */}
      <header
        id="home"
        className={`header ${fadeIn0 ? "fade-in" : "fade-out"}`}
      >
        <div className="hero-content">
          <img
            src="https://avatars.githubusercontent.com/u/583231?v=4"
            alt="Raj Kumar"
            className="avatar"
          />
          <div className="hero-text">
            <h1 className="name">RAJ KUMAR</h1>
            <p className="title">MERN Stack Developer</p>
            <p className="tagline">
              Crafting modern and scalable web applications to bring ideas to
              life with passion and precision.
            </p>
            <button
              className="cta-button"
              onClick={() => scrollToSection("contact")}
              aria-label="Contact Me"
            >
              Contact Me
            </button>
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/rajkumar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social-link"
              >
                {/* LinkedIn icon */}
                <svg
                  style={{ width: "28px", height: "28px", fill: "#0A66C2" }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12
                  4.98 3.5zM0 24h5V7H0v17zm7 0h5v-9.5c0-5 7-5.4 7 0v9.5h5v-10c0-7-8-6.75-10
                  0V24z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/rajkumar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="social-link"
              >
                {/* Instagram icon */}
                <svg
                  style={{ width: "28px", height: "28px", fill: "#E1306C" }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.75 2C4.68 2 2 4.68 2 7.75v8.5C2 19.32 4.68 22 7.75 22h8.5c3.07 0
                  5.75-2.68 5.75-5.75v-8.5C22 4.68 19.32 2 16.25 2h-8.5zM12 7a5 5 0 110 10 5 5 0 010-
                  10zm6.5-1.5a1.25 1.25 0 11-2.5 
                  0 1.25 1.25 0 012.5 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main">
        {/* About Section */}
        <section
          id="about"
          className={`section ${fadeIn1 ? "fade-in" : "fade-out"}`}
        >
          <h2 className="section-title">About Me</h2>
          <p className="paragraph-large">
            Hi, I'm <strong>Raj Kumar</strong>, a dedicated MERN stack developer
            with 3+ years of experience creating dynamic, user-friendly web
            applications. My passion lies in transforming complex problems into
            elegant and efficient code solutions.
          </p>
          <p className="paragraph-large">
            I specialize in full-stack development, with expertise in MongoDB,
            Express.js, React, and Node.js. I’m always eager to learn new
            technologies and improve my craft.
          </p>
          <p className="paragraph-large">
            When I’m not coding, I enjoy exploring open-source projects and
            contributing to the developer community.
          </p>
        </section>

        {/* Profile Section */}
        <section
          id="profile"
          className={`section ${fadeIn2 ? "fade-in" : "fade-out"}`}
        >
          <h2 className="section-title">Profile & Skills</h2>
          <div className="card">
            <h3 style={{ marginBottom: "20px" }}>Technical Skills</h3>
            {[
              { name: "MongoDB", level: 80 },
              { name: "Express.js", level: 75 },
              { name: "React", level: 90 },
              { name: "Node.js", level: 85 },
              { name: "JavaScript (ES6+)", level: 90 },
              { name: "HTML5 & CSS3", level: 90 },
            ].map(({ name, level }) => (
              <div key={name} className="skill-container">
                <span className="skill-name">{name}</span>
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{
                      width: `${level}%`,
                    }}
                    aria-valuenow={level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    role="progressbar"
                  ></div>
                </div>
              </div>
            ))}
            <h3 style={{ marginTop: "35px", marginBottom: "12px" }}>
              Experience & Goals
            </h3>
            <p className="paragraph-large">
              Developed multiple full-stack web apps for startups and clients,
              focusing on performance, security, and excellent user experience.
            </p>
            <p className="paragraph-large">
              Goal: To continually grow as a developer and contribute to
              impactful projects that solve real-world problems.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className={`section ${fadeIn4 ? "fade-in" : "fade-out"}`}
        >
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-icon">{projectIcons.house}</div>
              <h3 className="project-title">House Management System</h3>
              <p className="project-description">
                A comprehensive system built using PHP and JavaScript for
                managing properties, tenants, and payments efficiently.
              </p>
              <p className="project-tech">
                Technologies: PHP, JavaScript, MySQL, HTML5, CSS3
              </p>
            </div>
            <div className="project-card">
              <div className="project-icon">{projectIcons.bank}</div>
              <h3 className="project-title">Banking Website</h3>
              <p className="project-description">
                A secure banking application built using Java and SQL, featuring
                account management, transaction tracking, and customer service.
              </p>
              <p className="project-tech">Technologies: Java, SQL, JSP</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className={`section ${fadeIn3 ? "fade-in" : "fade-out"}`}
        >
          <h2 className="section-title">Get in Touch</h2>
          <p className="paragraph-large">
            Interested in collaborating or hiring? Reach out via email or
            LinkedIn. I’m always open to exciting opportunities and projects.
          </p>
          <p className="paragraph-large">
            Email:{" "}
            <a
              href="mailto:rajkumar@example.com"
              className="link"
              aria-label="Email Raj Kumar"
            >
              rajkumar@example.com
            </a>
          </p>
          <p className="paragraph-large">
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/rajkumar"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
              aria-label="LinkedIn Profile"
            >
              linkedin.com/in/rajkumar
            </a>
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Raj Kumar. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
