import React, { useState } from "react";
import "./HowItWorks.css";
import nutritionImg from "../assets/images/nutrition.jpg";
import physicalImg from "../assets/images/physical.jpg";
import restorativeImg from "../assets/images/restorative.jpg";
import stressImg from "../assets/images/stress.jpg";
import socialImg from "../assets/images/social.jpg";
import substanceImg from "../assets/images/substance.jpg";

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState("Nutrition");

  const topics = [
    {
      title: "Nutrition",
      image: nutritionImg,
      description:
        "Evidence supports the use of a whole-food, plant-predominant diet to prevent, treat, and reverse chronic illness.",
      metric: "121/80 mmHg",
    },
    {
      title: "Physical Activity",
      image: physicalImg,
      description:
        "Regular physical activity is key to managing weight, improving mental health, and reducing the risk of chronic disease.",
      metric: "32 minutes",
    },
    {
      title: "Restorative Sleep",
      image: restorativeImg,
      description:
        "Consistent, quality sleep enhances brain function and physical health.",
      metric: "8 hours",
    },
    {
      title: "Stress Management",
      image: stressImg,
      description:
        "Effective stress management techniques are crucial for mental well-being and overall health.",
    },
    {
      title: "Social Connection",
      image: socialImg,
      description:
        "Strong social connections are associated with a lower risk of many chronic diseases and enhanced mental health.",
    },
    {
      title: "Substance Abuse",
      image: substanceImg,
      description:
        "Avoiding tobacco, limiting alcohol use, and abstaining from harmful substances are vital for long-term health.",
    },
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="how-it-works">
      <h2>How It Works</h2>
      <p className="lifestyle-title">
        <span className="gradient-text">Lifestyle as medicine:</span>{" "}
        <span className="six-pillars">The six pillars</span>
      </p>

      {/* Tab Navigation */}
      <div className="tabs">
        {topics.map((topic) => (
          <button
            key={topic.title}
            className={`tab ${activeTab === topic.title ? "active" : ""}`}
            onClick={() => handleTabClick(topic.title)}
          >
            {topic.title}
          </button>
        ))}
      </div>

      {/* Horizontal Sliding Cards */}
      <div className="slider-container">
  <div className="card-slider">
    {topics.map((topic, index) => (
      <div key={index} className="how-it-works-card">
        <div className="image-container">
          <img src={topic.image} alt={topic.title} className="card-image" />
          <div className="card-metric">{topic.metric}</div>
        </div>
        <h3 className="card-title">{topic.title}</h3>
        <p className="card-description">{topic.description}</p>
      </div>
    ))}
  </div>
</div>

    </div>
  );
};

export default HowItWorks;
