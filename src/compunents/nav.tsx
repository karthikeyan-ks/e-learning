import React from 'react';
import './nav.css';

const Nav = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">Home</li>
        <li className="nav-item">About</li>
        <li className="nav-item">Programs</li>
        <li className="nav-item">Contact</li>
      </ul>
    </nav>
  );
};

export default Nav;
