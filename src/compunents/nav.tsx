import React from 'react';
import './nav.css';
import logo from '../Static/image/logo.svg'; // Import the SVG logo

const Nav = () => {
  return (
    <div className="nav-wrapper">
    
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">Home</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Programs</li>
          <li className="nav-item">Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
