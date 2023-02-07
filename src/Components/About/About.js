import React from "react";
import Header from "../Navbar/Header";
import "./About.css";
import golof from "../../images/golof.png";
import car from "../../images/car.png";
import packag from "../../images/package.png";
import PackageTravel from "../Package/PackageTravel";
import bar from "../../images/bar.png";
import bus from "../../images/bus.png";
import plain from "../../images/plain.png";
import OnlineContact from "../OnlineContact/OnlineContact";
const About = () => {
  return (
    <div>
      <div className="about-container">
        <Header></Header>
      </div>
      <div className="golof-container">
        <div className="golof">
          <img src={golof} alt="" />
          <h4>Golf Tour</h4>
          <p>
            We will take care of each detail offering a unique and exclusive
            experience
          </p>
          <button>Lern More</button>
        </div>
        <div className="golof">
          <img src={car} alt="" />
          <h4>Golf Tour</h4>
          <p>
            We will take care of each detail offering a unique and exclusive
            experience
          </p>
          <button>Lern More</button>
        </div>
        <div className="golof">
          <img src={packag} alt="" />
          <h4>Golf Tour</h4>
          <p>
            We will take care of each detail offering a unique and exclusive
            experience
          </p>
          <button>Lern More</button>
        </div>
      </div>

      <div className="about-golf-container">
        <div className="about-text">
          <h3>One of the world’s best all year round golf locations</h3>
          <p>
            The main contributory factors are an excellent climate, the superb
            Europe golf courses, the charming caddies and the high standard of
            hotels.
          </p>
        </div>
        <div className="about-golof-package">
          <div className="about-golf">
            <div className="about-img">
              <img src={bar} alt="" />
              <h5>Golf Packages</h5>
            </div>
            <p>
              All Inclusive Travel Tour Golf Packages offer a selection of the
              best golf courses, carefully selected hotels and VIP
              transportation.
            </p>
          </div>
          <div className="about-golf">
            <div className="about-img">
              <img src={bus} alt="" />
              <h5>Golf Packages</h5>
            </div>
            <p>
              All Inclusive Travel Tour Golf Packages offer a selection of the
              best golf courses, carefully selected hotels and VIP
              transportation.
            </p>
          </div>
          <div className="about-golf">
            <div className="about-img">
              <img src={plain} alt="" />
              <h5>Golf Packages</h5>
            </div>
            <p>
              All Inclusive Travel Tour Golf Packages offer a selection of the
              best golf courses, carefully selected hotels and VIP
              transportation.
            </p>
          </div>
        </div>
      </div>
      <PackageTravel></PackageTravel>
      <OnlineContact></OnlineContact>
    </div>
  );
};

export default About;
