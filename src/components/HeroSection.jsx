import React from "react";
import "./HeroSection.css";
import '../App.css';
import ImageCarousel from "./ImageCarousel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


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

<div className="search-bar-container">
  <div className="search-box">
    <input type="text" placeholder="Condition, procedure, specialty..." />
  </div>
  <div className="search-box">
    <input type="text" placeholder="City, state, or zipcode" />
  </div>
  <div className="search-box">
    <input type="text" placeholder="Insurance carrier" />
  </div>
  <button className="find-now-button">
    <span role="img" aria-label="search"><FontAwesomeIcon icon={faSearch} />
    </span> Find now
  </button>
</div>


      </div>
    </section>
  );
};

export default HeroSection;
