import { useState } from 'react';
import { Link } from 'react-router-dom';

// Example SVG logo; Replace with your own SVG if desired
const BrandLogo = () => (
  <svg width="32" height="32" viewBox="0 0 48 48" fill="none" aria-label="Site logo">
    <circle cx="24" cy="24" r="23" fill="#00bcd4" stroke="#182636" strokeWidth="2"/>
    <text x="50%" y="57%" textAnchor="middle" fill="#182636" fontFamily="monospace" fontSize="18" fontWeight="bold" dy=".3em">LR</text>
  </svg>
);

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Projects', to: '/projects' },
  { name: 'Skills', to: '/skills' },
  { name: 'Resume', to: '/resume' },
  { name: 'Contact', to: '/contact' }
];

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg shadow-sm py-3 custom-navbar">
      <Link className="navbar-brand ms-3 d-flex align-items-center gap-2" to="/">
        <BrandLogo />
        <span style={{ color: "#00bcd4", fontWeight: "bold", fontSize: "1.15rem" }}>Logeskumar R</span>
      </Link>
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
          {navLinks.map(({ name, to }, idx) => (
            <li className="nav-item" key={name}>
              <Link
                className="nav-link"
                to={to}
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
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(-15px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .custom-navbar {
          background: linear-gradient(90deg, #182636 0%, #203a43 50%, #2c5364 100%);
          border-bottom: 2px solid #00bcd4;
        }

        .animated-navbar.show .nav-link {
          opacity: 1 !important;
          transform: none !important;
        }

        .nav-link {
          transition: color 0.3s, text-shadow 0.3s;
          color: #eee;
          font-weight: 500;
          padding: 0.6rem 1rem;
          font-size: 1.05rem;
        }

        .nav-link:hover, .nav-link:focus {
          color: #00bcd4;
          text-shadow: 0 0 8px rgba(0, 188, 212, 0.5);
        }

        .navbar-brand span {
          letter-spacing: 1px;
        }

        .navbar-toggler {
          border: 1.5px solid #00bcd4;
          background: #182636;
        }
        .navbar-toggler-icon {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 30 30' width='24' height='24' fill='%2300bcd4' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='30' height='4' y='2'/ %3E%3Crect width='30' height='4' y='13'/ %3E%3Crect width='30' height='4' y='24'/ %3E%3C/svg%3E");
        }
      `}</style>
    </nav>
  );
}
