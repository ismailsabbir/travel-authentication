import React from "react";
import "./Tours.css";
import mens from "../../images/mens.png";
import men from "../../images/men.png";
import trv from "../../images/trav.png";
const Tours = () => {
  return (
    <div className="hole-tour">
      <div>
        <p>Museums, Art, Tours, Attractions and Much More</p>
        <h4>We create tours for groups around the world</h4>
        <p>
          We help you get the best from museums, tours, activities and
          destinations by providing a great choice of local tours and
          attractions.
        </p>
      </div>
      <div className="toues-container">
        <div className="tours1">
          <img src={mens} alt="" />
          <h5>Ticket Tours</h5>
          <p>
            We will take care of each detail offering a unique and exclusive
            experience
          </p>
          <button className="lern-tour-btn">Learn More</button>
        </div>
        <div className="tours1" id="mid-tour">
          <img src={men} alt="" />
          <h5>Ticket Tours</h5>
          <p>
            We will take care of each detail offering a unique and exclusive
            experience
          </p>
          <button className="lern-tour-btn">Learn More</button>
        </div>
        <div className="tours1">
          <img src={trv} alt="" />
          <h5>Ticket Tours</h5>
          <p>
            We will take care of each detail offering a unique and exclusive
            experience
          </p>
          <button className="lern-tour-btn">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Tours;
