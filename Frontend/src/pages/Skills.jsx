// src/pages/Skills.jsx
import React from 'react';

const skills = [
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'Express.js', level: 75 },
  { name: 'MongoDB', level: 70 },
  { name: 'HTML & CSS', level: 95 }
];

export default function Skills() {
  return (
    <section id="skills" className="py-5 bg-white">
      <div className="container">
        <h2 className="text-primary fw-bold mb-4">Skills</h2>
        <div className="row">
          {skills.map(({ name, level }, idx) => (
            <div className="col-md-6 mb-3" key={idx}>
              <h5>{name}</h5>
              <div className="progress" style={{ height: '20px' }}>
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={{ width: `${level}%` }}
                  aria-valuenow={level}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {level}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
