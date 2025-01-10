import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const FsNav = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
      <Link to="/" className="nav-link">
          <img src="/pics/footstepsLOGO-removebg-preview.png" alt="Home" className="nav-icon" />
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/members" className="nav-link">Members</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/events" className="nav-link">Events</Link>
      </div>
    </nav>
  );
};

export default FsNav;