import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

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
      <Link to="/" className="logo" onClick={closeMenu}>
        Dil <span>Bista</span>
      </Link>

      {/* Navigation */}
      <ul className={open ? "nav-links active" : "nav-links"}>
        <li>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>

        <li>
          <Link to={{ pathname: "/", hash: "#skills" }} onClick={closeMenu}>
            Skills
          </Link>
        </li>

        <li>
          <Link to={{ pathname: "/", hash: "#projects" }} onClick={closeMenu}>
            Projects
          </Link>
        </li>

        <li>
          <Link to="/about" onClick={closeMenu}>
            About
          </Link>
        </li>

        {/* Blog */}
        <li>
          <Link to="/blog" onClick={closeMenu}>
            Blog
          </Link>
        </li>

        <li>
          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </li>

        {/* Mobile Button */}
        <li className="mobile-btn">
          <Button to="/contact">
            Hire Me
          </Button>
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
