// src/pages/Resume.jsx
import React from 'react';

export default function Resume() {
  return (
    <section id="resume" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-primary fw-bold mb-4">Resume</h2>

        <h4 className="fw-semibold">Summary</h4>
        <p>
          Experienced full stack developer skilled in MERN stack. Passionate about building efficient,
          scalable applications with clean, maintainable code.
        </p>

        <h4 className="fw-semibold mt-4">Education</h4>
        <ul>
          <li>
            <strong>Bachelor of Technology in Computer Science</strong> - ABC University (2016 - 2020)
          </li>
          <li>
            <strong>High School Diploma</strong> - XYZ School (2014 - 2016)
          </li>
        </ul>

        <h4 className="fw-semibold mt-4">Experience</h4>
        <ul>
          <li>
            <strong>Full Stack Developer</strong> - Company Name (2021 - Present)
            <p>Developed several projects using React, Node.js, Express, and MongoDB. Improved application performance and user experience.</p>
          </li>
          <li>
            <strong>Intern</strong> - Tech Startup (2020)
            <p>Assisted in frontend development with React and bug fixes in backend APIs.</p>
          </li>
        </ul>

        <a
          href="/resume.pdf" // Replace with the actual resume file path
          className="btn btn-primary mt-4"
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
