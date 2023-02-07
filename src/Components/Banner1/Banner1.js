import React from "react";
import "./Banner1.css";
const Banner1 = () => {
  return (
    <div className="banners-container">
      <div className="banner1-text">
        <p>Subscribe to our newsletter today!</p>
        <h3>
          Join our subscribers list to get the latest news, updates and special
          offers directly in your inbox!
        </h3>
        <input type="text" placeholder="Enter your Email Address" />
        <button type="submit">Subscribe</button>
      </div>
    </div>
  );
};

export default Banner1;
