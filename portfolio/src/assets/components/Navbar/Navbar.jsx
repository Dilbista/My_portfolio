import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        Dil <span>Bista</span>
      </div>

      {/* Navigation */}
      <ul className={open ? "nav-links active" : "nav-links"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to={{ pathname: "/", hash: "skills" }} onClick={closeMenu}>
            Skills
          </Link>
        </li>
        <li>
          <Link to={{ pathname: "/", hash: "#projects" }} onClick={closeMenu}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        {/* Mobile Button */}
        <li className="mobile-btn">
          <button className="btn" onClick={closeMenu}>
            Hire Me
          </button>
        </li>
      </ul>

      {/* Desktop Button */}
      <Link to="/contact">
        <button className="btn desktop-btn">Hire Me</button>
      </Link>
      {/* Toggle Button */}
      <div className="menu-icon" onClick={toggleMenu}>
        {open ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
