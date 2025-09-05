// src/components/Navbar.jsx
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-3">
      <a className="navbar-brand ms-3" href="#home">Logeskumar R</a>
      <button
        className="navbar-toggler"
        type="button"
        aria-controls="navbarNav"
        aria-expanded={showMenu}
        aria-label="Toggle navigation"
        onClick={() => setShowMenu(!showMenu)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`collapse navbar-collapse ${showMenu ? 'show' : ''} animated-navbar`} id="navbarNav">
        <ul className="navbar-nav ms-auto me-4">
          {navLinks.map(({ name, href }, idx) => (
            <li className="nav-item" key={name}>
              <a
                className="nav-link"
                href={href}
                style={{
                  animation: `fadeIn 0.7s ${0.2 + idx * 0.12}s ease forwards`,
                  opacity: 0,
                  transform: 'translateY(-15px)'
                }}
                onAnimationEnd={e => {
                  e.currentTarget.style.opacity = '1';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(-15px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .animated-navbar.show .nav-link {
          opacity: 1 !important;
          transform: none !important;
        }

        .nav-link {
          transition: color 0.3s ease, text-shadow 0.3s ease;
          color: #ddd;
        }

        .nav-link:hover, .nav-link:focus {
          color: #0d6efd;
          text-shadow: 0 0 8px rgba(13, 110, 253, 0.7);
        }

        .navbar {
          border-bottom: 2px solid #0d6efd;
        }
      `}</style>
    </nav>
  );
}
