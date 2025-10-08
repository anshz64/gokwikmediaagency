// src/components/Navbar.js
import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <Link to="/">
          <img src="/assets/main-logo.png" alt="GoKwik Media" />
        </Link>
      </div>

      {/* Menu */}
      <nav className="navbar-menu">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
          end
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About Us
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Blog
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Services
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contact Us
        </NavLink>
      </nav>

      {/* Button */}
      <Link to="/contact">
        <button className="navbar-button">Get In Touch</button>
      </Link>
    </header>
  );
}

export default Navbar;
