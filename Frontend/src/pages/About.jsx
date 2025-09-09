// src/pages/About.jsx
import { Link } from 'react-router-dom';


export default function About() {
  return (
    <section
      id="about"
      className="py-5 "
      style={{
        height: '89vh',
        background: "linear-gradient(135deg, #182636 0%, #203a43 50%, #2c5364 100%)",
        color: "#f4f8fb"
      }}
    >
      <div className="container d-flex flex-column flex-lg-row align-items-center">
        <div className="flex-grow-1 mb-4 mb-lg-0 pe-lg-5 text-center text-lg-start">
          <h2 className="fw-bold mb-3" style={{ color: "#00bcd4" }}>About Me</h2>

          {/* Highlight Section */}
          <div className="mb-4 d-flex flex-wrap gap-3">
            <span className="badge bg-primary fs-6 py-2 px-3" style={{ background: "#00bcd4", color: "#182636" }}>🎓 M.Sc. in Computer Science</span>
            <span className="badge bg-secondary fs-6 py-2 px-3" style={{ background: "#203a43" }}>💻 MERN Stack Developer</span>
            <span className="badge bg-info text-dark fs-6 py-2 px-3" style={{ background: "#2c5364" }}>☕ Java Programmer</span>
            <span className="badge bg-dark fs-6 py-2 px-3" style={{ background: "#182636" }}>🤖 AI & Tech Enthusiast</span>
          </div>

          {/* Intro & Story */}
          <p className="fs-5 mb-3">
            Hi! I’m <span className="fw-semibold" style={{ color: "#00bcd4" }}>Logeskumar R</span>, passionate about building modern web applications and solving real-world challenges. My journey in tech began with curiosity and has grown into a love for <span style={{ color: "#00bcd4", fontWeight: "bold" }}>full-stack development</span> (MERN, Java) and exploring new frontiers in AI.
          </p>



          {/* Personal Touch */}
          <p className="fs-5 mb-3">
            I love collaborating with others, tackling logic puzzles, and finding ways technology can make an impact. My approach blends creativity, logical problem-solving, and a commitment to continuous learning.
          </p>

          {/* Value & CTA */}
          <p className="fs-5 mb-4">
            My goal is to create responsive, elegant, and scalable solutions—always striving to deliver value for users and teams. <br />
            <span className="fw-semibold" style={{ color: "#00bcd4" }}>Want to see my work?</span>
            <span>
              Check out my{" "}
              <Link
                to="/projects"
                style={{ color: "#00bcd4", textDecoration: "underline" }}
              >
                Projects
              </Link>
              {" "}or{" "}
              <a
                href="https://linkedin.com/in/logeskumar"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#00bcd4", textDecoration: "underline" }}
              >
                connect with me on LinkedIn
              </a>
              !
            </span>

          </p>
        </div>

        {/* Right: Themed SVG Illustration */}
        <div>
          <svg
            width="260"
            height="260"
            viewBox="0 0 260 260"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Developer illustration"
            className="img-fluid rounded shadow"
            style={{ display: 'block', margin: '0 auto' }}
          >
            <circle cx="130" cy="130" r="120" fill="#203a43" />
            <rect x="60" y="90" width="140" height="80" rx="16" fill="#00bcd4" />
            <rect x="88" y="110" width="84" height="40" rx="8" fill="#182636" />
            <rect x="110" y="124" width="40" height="12" rx="6" fill="#00bcd4" />
            <circle cx="170" cy="170" r="14" fill="#182636" />
            <rect x="160" y="162" width="20" height="6" rx="3" fill="#00bcd4" />
            <text x="130" y="155" textAnchor="middle" fill="#f4f8fb" fontWeight="bold" fontFamily="monospace" fontSize="18">{"</>"}</text>
          </svg>
        </div>
      </div>
    </section>
  );
}
