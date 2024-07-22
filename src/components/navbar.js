import React from 'react';
import './navbar.css'
import { Link } from 'react-router-dom'; // Import Link for navigation

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo or website title */}
      <Link to="/" className="nav-brand">My Website</Link>

      {/* Navigation links */}
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </nav>
  );
}

export default Navbar;