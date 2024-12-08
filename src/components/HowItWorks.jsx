import React, { useState, useRef } from "react";
import "./HowItWorks.css";
import nutritionImg from "../assets/images/nutrition.jpg";
import physicalImg from "../assets/images/physical.jpg";
import restorativeImg from "../assets/images/restorative.jpg";
import stressImg from "../assets/images/stress.jpg";
import socialImg from "../assets/images/social.jpg";
import substanceImg from "../assets/images/substance.jpg";
import iconVector from "../assets/images/Vector (2).svg";
import iconVector1 from "../assets/images/Vector (1).svg";
import iconVector2 from "../assets/images/Vector.svg";
import iconVector3 from "../assets/images/Mask group.svg";
import iconVector4 from "../assets/images/Vector5.svg";

const metricData = [
  {
    icon: iconVector2,
    text: "121/80 mmHg",
  },
  {
    icon: iconVector3,
    text: "32 minutes",
  },
  {
    icon: iconVector1,
    text: "8 hours",
  },
  {
    icon: iconVector4,
    text: "60 bpm",
  },
  {
    icon: iconVector3,
    text: "Feeling Better",
  },
  {
    icon: iconVector,
    text: "62 Days",
  },
];

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState("Nutrition");
  const sliderRef = useRef(null);

  const topics = [
    {
      title: "Nutrition",
      image: nutritionImg,
      description:
        "Evidence supports the use of a whole-food, plant-predominant diet to prevent, treat, and reverse chronic illness.",
      metric: metricData[0],
    },
    {
      title: "Physical Activity",
      image: physicalImg,
      description:
        "Regular physical activity is key to managing weight, improving mental health, and reducing the risk of chronic disease.",
      metric: metricData[1],
    },
    {
      title: "Restorative Sleep",
      image: restorativeImg,
      description:
        "Consistent, quality sleep enhances brain function and physical health.",
      metric: metricData[2],
    },
    {
      title: "Stress Management",
      image: stressImg,
      description:
        "Effective stress management techniques are crucial for mental well-being and overall health.",
      metric: metricData[3],
    },
    {
      title: "Social Connection",
      image: socialImg,
      description:
        "Strong social connections are associated with a lower risk of many chronic diseases and enhanced mental health.",
      metric: metricData[4],
    },
    {
      title: "Substance Abuse",
      image: substanceImg,
      description:
        "Avoiding tobacco, limiting alcohol use, and abstaining from harmful substances are vital for long-term health.",
      metric: metricData[5],
    },
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleScroll = (direction) => {
    const slider = sliderRef.current;
    if (slider) {
      slider.scrollBy({ left: direction === "left" ? -300 : 300, behavior: "smooth" });
    }
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

      {/* Arrows Section */}
      <div className="arrows-container">
        <button className="arrow left-arrow" onClick={() => handleScroll("left")}>
          ←
        </button>
        <button className="arrow right-arrow" onClick={() => handleScroll("right")}>
          →
        </button>
      </div>

      {/* Horizontal Sliding Cards */}
      <div className="wrapper">
        <div className="carousel" ref={sliderRef}>
          {topics.map((topic, index) => (
            <div key={index} className="how-it-works-card card">
              <div className="image-container">
                <img src={topic.image} alt={topic.title} className="card-image" />
                {topic.metric && (
                  <div className="card-metric-container">
                    <img src={topic.metric.icon} alt="Icon" className="metric-icon" />
                    <span style={{ fontWeight: "bold" }}>{topic.metric.text}</span>
                  </div>
                )}
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
