import React from "react";
import "./HeroSection.css";
import '../App.css';
import ImageCarousel from "./ImageCarousel";

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

         <div className="search-bar-outer">
        <div className="search-bar-inner">
          <input type="text" placeholder="Procedure" className="procedure-box" />
          <input type="text" placeholder="City/State" className="city-state-box" />
          <input type="text" placeholder="Last Box" className="last-box" />
          <button className="find-button">Find</button>
        </div>
      </div>
      </div>
    </section>
  );
};

export default HeroSection;
