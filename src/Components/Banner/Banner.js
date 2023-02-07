import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-text">
        <p>All Inclusive Golf Tour Packages</p>
        <h4>
          Whether you're a small group or a corporate group, we will have the
          perfect package for you.
        </h4>
        <button className="view-btn">View Tours</button>
      </div>
    </div>
  );
};

export default Banner;
