// src/pages/Skills.jsx
import React, { useEffect, useRef, useState } from 'react';

const skillsData = {
  frontend: [
    { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', level: 90 },
    { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', level: 90 },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', level: 90 },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', level: 85 },
  ],
  backend: [
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', level: 80 },
    { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', level: 75 },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', level: 70 },
  ],
  tools: [
    { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    { name: 'Postman', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
    { name: 'NPM', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg' },
    { name: 'Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
  ]
};

function useOnScreen(ref, rootMargin = '0px') {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { rootMargin }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, [ref, rootMargin]);
  return isIntersecting;
}

const SkillBar = ({ name, logo, level }) => {
  const ref = useRef();
  const isVisible = useOnScreen(ref, '-100px');
  const [width, setWidth] = useState('0%');

  useEffect(() => {
    if (isVisible) {
      // Animate fill to level
      setTimeout(() => setWidth(`${level}%`), 150);
    }
  }, [isVisible, level]);

  return (
    <div className="d-flex align-items-center mb-4 skill-bar" ref={ref} tabIndex={0} aria-label={`${name} skill at ${level} percent proficiency`}>
      <img
        src={logo}
        alt={`${name} logo`}
        className="skill-icon"
        loading="lazy"
      />
      <div className="flex-grow-1 ms-3">
        <div className="d-flex justify-content-between align-items-center mb-1">
          <h5 className="m-0 skill-name">{name}</h5>
          <span className="skill-percent">{level}%</span>
        </div>
        <div className="progress skill-progress" aria-hidden="true">
          <div
            className="progress-bar"
            style={{ width }}
          ></div>
        </div>
      </div>
    </div>
  );
};

const ToolCard = ({ name, logo }) => {
  const ref = useRef();
  const isVisible = useOnScreen(ref, '-100px');

  return (
    <div
      className={`tool-card p-3 rounded d-flex flex-column align-items-center justify-content-center`}
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.85)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
        boxShadow: '0 4px 15px rgba(0, 188, 212, 0.25)',
        cursor: 'default',
        backgroundColor: 'rgba(255, 255, 255, 0.05)'
      }}
      tabIndex={0}
      aria-label={`${name} tool`}
    >
      <img src={logo} alt={`${name} logo`} className="tool-logo mb-2" loading="lazy" />
      <span className="text-muted text-center" style={{ color: '#00bcd4', fontWeight: '600' }}>{name}</span>
    </div>
  );
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-5"
      style={{
        background: 'linear-gradient(135deg, #182636 0%, #203a43 50%, #2c5364 100%)',
        color: '#f4f8fb',
        minHeight: '100vh',
      }}
      aria-label="Skills and tools section"
    >
      <div className="container">

        <h2 className="fw-bold mb-2 text-center" style={{ color: '#00bcd4', letterSpacing: '1px', fontSize: '2.4rem' }}>
          Skills & Tools
        </h2>
        <p className="text-center fs-5 mb-5" style={{ maxWidth: 650, margin: '0 auto', color: '#a0c4c9' }}>
          Here are the technologies and tools I work with to build scalable web apps.
        </p>

        {/* Frontend Skills */}
        <h4 className="text-center text-md-start mb-3" style={{ color: '#00bcd4' }}>Frontend Development</h4>
        <div className="mb-5">
          {skillsData.frontend.map(skill => (
            <SkillBar key={skill.name} {...skill} />
          ))}
        </div>

        {/* Backend Skills */}
        <h4 className="text-center text-md-start mb-3" style={{ color: '#00bcd4' }}>Backend Development</h4>
        <div className="mb-5">
          {skillsData.backend.map(skill => (
            <SkillBar key={skill.name} {...skill} />
          ))}
        </div>

        {/* Tools & Platforms */}
        <h4 className="text-center text-md-start mb-4" style={{ color: '#00bcd4' }}>Tools & Platforms</h4>
        <div className="row g-3 justify-content-center justify-content-md-start">
          {skillsData.tools.map(tool => (
            <div key={tool.name} className="col-4 col-sm-3 col-md-2">
              <ToolCard {...tool} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skill-bar:hover .skill-icon, .skill-bar:focus .skill-icon {
          filter: drop-shadow(0 0 6px #00bcd4);
          transform: scale(1.15);
          transition: transform 0.3s ease, filter 0.3s ease;
        }
        .skill-icon {
          width: 42px;
          height: 42px;
          filter: drop-shadow(0 0 3px #00bcd4);
          transition: transform 0.3s ease, filter 0.3s ease;
        }
        .skill-name {
          font-weight: 600;
          font-size: 1.1rem;
          color: #00bcd4;
        }
        .skill-percent {
          font-weight: 600;
          color: #00bcd4;
          min-width: 34px;
          text-align: right;
          font-family: monospace;
        }
        .skill-progress {
          height: 18px;
          border-radius: 9px;
          background-color: #223043;
          overflow: hidden;
          box-shadow: inset 0 1px 3px rgba(0,0,0,0.3);
        }
        .progress-bar {
          background: linear-gradient(90deg, #00bcd4 0%, #00e5ff 100%);
          border-radius: 9px;
          transition: width 1.5s ease;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding-right: 8px;
          color: #182636;
          font-weight: 700;
          font-size: 0.9rem;
          font-family: monospace;
        }
        .tool-card:hover, .tool-card:focus {
          box-shadow: 0 0 16px #00bcd4;
          transform: rotate(6deg) scale(1.05);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          outline: none;
        }
        .tool-card {
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          background-color: rgba(255, 255, 255, 0.05);
          cursor: default;
          outline: none;
        }
        .tool-logo {
          width: 54px;
          height: 54px;
          filter: drop-shadow(0 0 4px #00bcd4);
          transition: transform 0.3s ease, filter 0.3s ease;
        }
        @media (max-width: 767px) {
          .skill-bar {
            flex-direction: column;
            align-items: flex-start !important;
          }
          .skill-bar > .skill-icon {
            margin-bottom: 8px !important;
          }
          .skill-name {
            font-size: 1rem;
          }
          .skill-percent {
            font-size: 0.85rem;
          }
          .progress-bar {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </section>
  );
}
