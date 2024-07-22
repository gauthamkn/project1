import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={toggleSidebar}>
        &times;
      </button>
      {/* Sidebar content */}
      <ul className="sidebar-nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        {/* Add more navigation links as needed */}
      </ul>
    </div>
  );
}

export default Sidebar;