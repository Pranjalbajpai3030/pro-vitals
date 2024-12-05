import React from "react";
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <div className="how-it-works">
      <h2>How It Works</h2>
      <p>Lifestyle as medicine: The six pillars</p>
      <div className="how-it-works-tabs">
        <button className="active">Nutrition</button>
        <button>Physical Activity</button>
        <button>Restorative Sleep</button>
      </div>
      <div className="how-it-works-cards">
        <div className="how-it-works-card">
          <img src="nutrition.jpg" alt="Nutrition" />
          <h3>Nutrition</h3>
          <p>Emphasizes whole-food, plant-based diet...</p>
        </div>
        <div className="how-it-works-card">
          <img src="physical.jpg" alt="Physical Activity" />
          <h3>Physical Activity</h3>
          <p>Regular physical activity to maintain weight...</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
