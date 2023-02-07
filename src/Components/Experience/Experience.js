import React from "react";
import "./Experience.css";
import image from "../../images/travel1.avif";
const Experience = () => {
  return (
    <div className="experience-container">
      <div className="left-experience">
        <h3>We will help you to create an truly unforgettable experience</h3>
        <p>
          Our travel team are on hand to organise hotels and private houses, all
          transport requirements and even meals in some of the finest
          restaurants in Europe.
        </p>
        <button>Tour Search</button>
      </div>
      <div className="right-experience">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Experience;
