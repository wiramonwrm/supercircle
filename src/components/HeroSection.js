import React from "react";
import "../App.css";
import video1 from "../video3.mp4";
import "./HeroSection.css";
function HeroSection() {
  return (
    <div className="hero-container">
      <video src={video1} autoPlay loop muted />
    </div>
  );
}

export default HeroSection;
