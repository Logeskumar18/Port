import React, { useState, useEffect, useRef } from 'react';
import codeIllustration from '../assets/Coding-bro.svg';

const roles = [
  "MERN Developer",
  "Java Programmer",
  "Problem Solver",
  "Tech Enthusiast"
];

export default function Home() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");

  const charIndexRef = useRef(0);
  const deletingRef = useRef(false);

  useEffect(() => {
    let typingTimeout;

    function type() {
      const fullText = roles[currentRoleIndex];
      if (!deletingRef.current) {
        setDisplayedRole(fullText.slice(0, charIndexRef.current + 1));
        charIndexRef.current++;
        if (charIndexRef.current === fullText.length) {
          deletingRef.current = true;
          typingTimeout = setTimeout(type, 1500);
        } else {
          typingTimeout = setTimeout(type, 150);
        }
      } else {
        setDisplayedRole(fullText.slice(0, charIndexRef.current - 1));
        charIndexRef.current--;
        if (charIndexRef.current === 0) {
          deletingRef.current = false;
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          typingTimeout = setTimeout(type, 500);
        } else {
          typingTimeout = setTimeout(type, 100);
        }
      }
    }
    type();

    return () => clearTimeout(typingTimeout);
  }, [currentRoleIndex]);

  return (
    <section
      id="home"
      className="d-flex align-items-center justify-content-center vh-100 text-light"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "2rem"
      }}
    >
      <div className="container d-flex flex-column flex-lg-row align-items-center">
        {/* Left side: Text content */}
        <div className="text-center text-lg-start flex-grow-1">
          <h1 className="display-4 display-lg-3 fw-bold mb-3">
            Hi, I’m <span style={{ color: "#00bcd4" }}>Logeskumar R</span>
          </h1>
          <h2 className="lead fw-semibold mb-3" style={{ fontSize: '1.1rem', fontWeight: '600' }}>
            Full-Stack Developer | Computer Science Postgraduate
          </h2>
          <p className="mb-3 fs-6 fs-lg-5">
            I build modern, responsive, and scalable web applications that bring ideas to life.
          </p>
          <p className="mb-4 fst-italic" style={{ fontSize: "1rem", color: "#a0c4c9" }}>
            I’m currently pursuing my M.Sc. in Computer Science, with a strong focus on
            <span style={{ color: "#00bcd4", fontWeight: "bold" }}> MERN stack</span>,
            <span style={{ color: "#00bcd4", fontWeight: "bold" }}> Java</span>, and
            <span style={{ color: "#00bcd4", fontWeight: "bold" }}> AI technologies</span>.
          </p>
          <p className="mb-4 fs-5" style={{ whiteSpace: 'nowrap', borderRight: '2px solid #00bcd4', paddingRight: '5px' }}>
            {displayedRole}
          </p>
          {/* Call to Action Buttons */}
          <div className="mb-4 d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
            <a href="#projects" className="btn btn-primary btn-lg">
              View My Work
            </a>
            <a href="#contact" className="btn btn-outline-light btn-lg">
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-info btn-lg"
            >
              Download Resume
            </a>
          
          </div>
          {/* Social Icons */}
          <div className="d-flex justify-content-center justify-content-lg-start gap-4 fs-4 fs-lg-3 flex-wrap">
            <a href="https://github.com/logeskumar" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-light">
              <i className="bi bi-github"></i>
            </a>
            <a href="https://linkedin.com/in/logeskumar" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-light">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="mailto:logeskumar@example.com" aria-label="Email" className="text-light">
              <i className="bi bi-envelope"></i>
            </a>
            <a href="https://twitter.com/logeskumar" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-light">
              <i className="bi bi-twitter"></i>
            </a>
          </div>
        </div>

        {/* Right side: SVG Image */}
        <div className="d-none d-lg-block ms-lg-5" style={{ maxWidth: "400px", minWidth: "300px" }}>
          <img
            src={codeIllustration}
            alt="Coding illustration"
            style={{ width: '100%', height: 'auto', filter: 'drop-shadow(0 0 10px rgba(0,188,212,0.5))' }}
          />
        </div>
      </div>

      {/* CSS Enhancements */}
      <style>{`
        /* Animated Gradient Background */
        #home {
          background: linear-gradient(-45deg, #0f2027, #203a43, #2c5364, #1b2735);
          background-size: 400% 400%;
          animation: gradientBG 15s ease infinite;
        }
        @keyframes gradientBG {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* CTA Hover Effects */
        a.btn {
          transition: all 0.3s ease;
        }
        a.btn-primary:hover { background-color: #0288d1; }
        a.btn-info:hover { background-color: #0097a7; }
        a.btn-secondary:hover { background-color: #455a64; }

        /* Social Icons Hover Glow */
        a.text-light:hover {
          color: #00bcd4 !important;
          text-shadow: 0 0 10px rgba(0,188,212,0.7);
        }

        /* Responsive typography and spacing */
        @media (max-width: 991.98px) {
          #home .display-4 { font-size: 2.5rem !important; }
          #home .lead { font-size: 1rem !important; }
          #home p.fs-6 { font-size: 0.9rem !important; }
          #home p.fs-5 { font-size: 1.1rem !important; }
          #home .btn-lg {
            padding: 0.5rem 1rem;
            font-size: 1rem;
          }
          .container > div {
            margin-bottom: 2rem;
          }
        }

        @media (max-width: 575.98px) {
          #home {
            padding: 1rem;
          }
          .container {
            padding: 0;
          }
          #home .display-4 { font-size: 2rem !important; }
          #home p.fs-6 { font-size: 0.85rem !important; }
          #home p.fs-5 { font-size: 1rem !important; }
        }
      `}</style>
    </section>
  );
}
