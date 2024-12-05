import React from "react";
import ItemsSlider from "./ItemSlider.jsx"; // Importing the slider
import "./HowItWorks.css";

const HowItWorks = () => {
  const topics = [
    {
      title: "Nutrition",
      image: "nutrition.jpg",
      description:
        "Evidence supports the use of a whole-food, plant-predominant diet to prevent, treat, and reverse chronic illness.",
    },
    {
      title: "Physical Activity",
      image: "physical.jpg",
      description:
        "Regular physical activity is key to managing weight, improving mental health, and reducing the risk of chronic disease.",
    },
    {
      title: "Restorative Sleep",
      image: "restorative.jpg",
      description:
        "Consistent, quality sleep enhances brain function and physical health.",
    },
    {
      title: "Stress Management",
      image: "stress.jpg",
      description:
        "Effective stress management techniques are crucial for mental well-being and overall health.",
    },
    {
      title: "Social Connection",
      image: "social.jpg",
      description:
        "Strong social connections are associated with a lower risk of many chronic diseases and enhanced mental health.",
    },
    {
      title: "Substance Abuse",
      image: "substance.jpg",
      description:
        "Avoiding tobacco, limiting alcohol use, and abstaining from harmful substances are vital for long-term health.",
    },
  ];

  return (
    <div className="how-it-works">
      <h2>How It Works</h2>
      <p className="lifestyle-title">
        <span className="gradient-text">Lifestyle as medicine:</span>{" "}
        <span className="six-pillars">The six pillars</span>
      </p>
      <ItemsSlider title="The Six Pillars">
        {topics.map((topic, index) => (
          <div key={index} className="how-it-works-card">
            <img src={topic.image} alt={topic.title} className="card-image" />
            <h3 className="card-title">{topic.title}</h3>
            <p className="card-description">{topic.description}</p>
          </div>
        ))}
      </ItemsSlider>
    </div>
  );
};

export default HowItWorks;
