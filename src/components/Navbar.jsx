import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import "./Navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  // State to manage the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle function for the hamburger menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="logo">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </div>

      {/* Desktop Navbar Options */}
      <div className="navbar-options desktop">
        <div className="navbar-option">
          <a href="#">List Your Practices</a>
        </div>
        <div className="navbar-option">
          <a href="#">For Employers</a>
        </div>
        <div className="navbar-option">
          <a href="#">Courses</a>
        </div>
        <div className="navbar-option">
          <a href="#">Books</a>
        </div>
        <div className="navbar-option">
          <a href="#">Speakers</a>
        </div>
        <div className="navbar-option">
          <a href="#">Doctors</a>
        </div>

        {/* Login/Signup Dropdown */}
        <div className="navbar-option" style={{ display: "flex", alignItems: "center" }}>
          <Dropdown>
            <Dropdown.Toggle
              variant="link"
              id="dropdown-basic"
              className="dropdown-toggle"
              style={{ color: "#838383" }}
            >
              Login/Signup
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-menu">
              <Dropdown.Item href="#/doctor-login" className="dropdown-item">
                Doctor Login/Signup
              </Dropdown.Item>
              <div className="dropdown-separator"></div>
              <Dropdown.Item href="#/patient-login" className="dropdown-item">
                Patient Login/Signup
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      {/* Hamburger Menu Icon */}
      <button
        className="hamburger-menu-icon"
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>

      {/* Mobile Navbar Options */}
      <div className={`navbar-options mobile ${isMobileMenuOpen ? "show" : ""}`}>
        <div className="login-signup-section">
          <div className="login-item">
            <strong>Doctor</strong>
            <a href="#doctor-login">Login</a> | <a href="#doctor-signup">Sign up</a>
          </div>
          <div className="login-item">
            <strong>Patients</strong>
            <a href="#patient-login">Login</a> | <a href="#patient-signup">Sign up</a>
          </div>
        </div>
        <div className="menu-items">
          <div className="menu-item">Doctors ➔</div>
          <div className="menu-item">List your practice ➔</div>
          <div className="menu-item">For Employers ➔</div>
          <div className="menu-item">Courses ➔</div>
          <div className="menu-item">Books ➔</div>
          <div className="menu-item">Speakers ➔</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
