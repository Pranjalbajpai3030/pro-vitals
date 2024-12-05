import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import GradientDivider from "./GradientDivider.jsx";
import HowItWorks from "./components/HowItWorks";
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <GradientDivider /> {/* Gradient divider added here */}
      <HowItWorks />
    </div>
  );
};

export default App;
