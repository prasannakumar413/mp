import React, { useState } from 'react';
import './Navbar.css';
import {FaUserCircle } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';


const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="logo">Logo</div>
      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="icons">
        <FaBars className="hamburger-icon" onClick={handleMenuClick} />
        <FaUserCircle className="profile-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
