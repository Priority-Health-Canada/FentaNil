import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <Link className="navbar-brand" to="/">
        <span className="logo-text">Fenta∅</span>
      </Link>
      <div className="navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="#home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#the-team">The Team</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#background">Background</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
