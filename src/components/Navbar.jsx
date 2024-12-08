import React from "react";
import { Dropdown } from "react-bootstrap";
import "./Navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </div>
      <div className="navbar-options">
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

        {/* Updated Button for Login/Signup */}
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
    </nav>
  );
};

export default Navbar;
