import React from "react";
import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import Banner1 from "../Banner1/Banner1";
import Experience from "../Experience/Experience";
import Header from "../Navbar/Header";
import PackageTravel from "../Package/PackageTravel";
import ServiceSearch from "../ServiceSearch/ServiceSearch";
import Tours from "../Tours/Tours";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <div className="home-container">
        <Header></Header>
        <div className="text-container">
          <div className="home-left">
            <h4>Buy tickets to museum all over the world</h4>
            <p>
              Travel Tour helps travellers get best from destination by
              providing a great choice of local tours and attraction bookable on
              multiple devices.
            </p>
            <button className="package-btn">Tour Package</button>
          </div>
          <div className="place-container">
            <Link to="/sreemongol">
              <div className="sreemongol">
                <h5>SREEMONGOL</h5>
              </div>
            </Link>

            <Link to="/sundorbon">
              <div className="sundorban">
                <h5>SUNDARBANS</h5>
              </div>
            </Link>

            <Link to="/sajeck">
              <div className="sejeck">
                -<h5>SAJEK</h5>
              </div>
            </Link>

            <Link to="/coxs">
              <div className="cox">
                <h5>COX'S BAZAR</h5>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Tours></Tours>
      <Banner></Banner>
      <PackageTravel></PackageTravel>
      <Experience></Experience>
      <ServiceSearch></ServiceSearch>
      <Banner1></Banner1>
    </div>
  );
};

export default Home;
