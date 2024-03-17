import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'; // For smooth scrolling to anchors

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <span className="logo-text">Fenta∅</span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="#solution">Solution</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#overview">Overview</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#why-it-matters">Why It Matters</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#the-team">The Team</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#achievements">Achievements</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
