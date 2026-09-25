import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const Button = ({ children, to, className = "", arrow = false }) => {
  return (
    <Link to={to} className={`common-btn ${className}`}>
      <span>{children}</span>

      {arrow && <span className="common-btn-arrow">→</span>}
    </Link>
  );
};

export default Button;