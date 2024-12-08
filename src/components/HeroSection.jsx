import React from "react";
import "./HeroSection.css";
import "../App.css";
import ImageCarousel from "./ImageCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import i1 from "../assets/images/search.svg";
import i2 from "../assets/images/c.svg";
import i3 from "../assets/images/i.svg";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <ImageCarousel />
      <div className="hero-content">
        <div className="book-appointment-text">
          <span className="span-whitespace">Book an appointment with </span>
          <span className="lifestyle-medicine-text">lifestyle medicine </span>
          <span className="span-experts">experts</span>
        </div>
        <div className="optimize-text">
          Optimize your lifestyle and reverse chronic diseases
        </div>

        {/* Search Bar Section */}
        <div className="search-bar-container">
          {/* First Input Field - Condition, Procedure, Specialty */}
          <div className="search-box search-box-1">
            <input
              type="text"
              className="search-input-condition"
              data-icon={i1}
              placeholder="Condition, procedure, specialty..."
            />
          </div>

          {/* Second Input Field - City, State, Zipcode */}
          <div className="search-box search-box-2">
            <input
              type="text"
              className="search-input-location"
              data-icon={i2}
              placeholder="City, state, or zipcode"
            />
          </div>

          {/* Third Input Field - Insurance Carrier */}
          <div className="search-box search-box-3">
            <input
              type="text"
              className="search-input-insurance"
              data-icon={i3}
              placeholder="Insurance carrier"
            />
          </div>

          {/* Find Now Button */}
          <button className="find-now-button">
            <FontAwesomeIcon icon={faSearch} /> Find now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
<div className="how-it-works-card">
  <img src="path-to-image" alt="card image" className="card-image" />
  <div className="card-content">
    <h3 className="card-title">Card Title</h3>
    <p className="card-description">Description goes here</p>
  </div>
  <div className="card-metric-container">
    <img src="path-to-icon" alt="icon" className="metric-icon" />
    <span>120/80 mins</span>
  </div>
</div>