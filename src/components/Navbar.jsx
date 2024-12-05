import React from "react";
import { Dropdown } from 'react-bootstrap';
import "./Navbar.css";
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        {/* Replace text with logo image */}
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
        
        {/* Dropdown for Login/Signup */}
        <div className="navbar-option">
          <Dropdown>
            <Dropdown.Toggle variant="link" id="dropdown-basic" className="dropdown-toggle">
              Login/Signup
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-menu">
              <Dropdown.Item href="#/action-1" className="dropdown-item">Doctors</Dropdown.Item>
              <div className="separator"></div>
              <Dropdown.Item href="#/action-2" className="dropdown-item">Patients</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;