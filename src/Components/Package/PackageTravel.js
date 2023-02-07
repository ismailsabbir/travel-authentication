import React from "react";
import image1 from "../../images/travel2.avif";
import image2 from "../../images/travel3.avif";
import imag3 from "../../images/travel7.avif";
import image4 from "../../images/travel8.avif";
import imag5 from "../../images/travel9.jpg";
import imag6 from "../../images/travel6.avif";
import OwlCarousel from "react-owl-carousel";
import { FaRegClock, FaCalendarAlt, FaStar } from "react-icons/fa";
import "./Packagetravel.css";
const PackageTravel = () => {
  return (
    <div className="package-container">
      <OwlCarousel className="owl-theme" loop margin={10} nav>
        <div class="item">
          <img src={image2} alt="" />
          <div className="package-text">
            <h5>Adare Manor Golf Resort 1 Night, 1 Rounds</h5>
            <div className="clock">
              <FaRegClock></FaRegClock>
              <p>07:00 - 16:00</p>
            </div>
            <div className="clander">
              <FaCalendarAlt></FaCalendarAlt>
              <p>Availability : Jan 21’ - Dec 24’</p>
            </div>

            <div className="package-midel">
              <div>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
              </div>
              <div>
                <h4>$740</h4>
              </div>
            </div>
            <button className="package-btn">Book Now</button>
          </div>
        </div>
        <div class="item">
          <img src={image1} alt="" />
          <div className="package-text">
            <h5>Enquiry Only : Macdonald Spey Valley</h5>
            <div className="clock">
              <FaRegClock></FaRegClock>
              <p>07:00 - 16:00</p>
            </div>
            <div className="clander">
              <FaCalendarAlt></FaCalendarAlt>
              <p>Availability : Jan 21’ - Dec 24’</p>
            </div>

            <div className="package-midel">
              <div>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
              </div>
              <div>
                <h4>$740</h4>
              </div>
            </div>
            <button className="package-btn">Book Now</button>
          </div>
        </div>
        <div class="item">
          <img src={imag3} alt="" />
          <div className="package-text">
            <h5>Adare Manor Golf Resort 1 Night, 1 Rounds</h5>
            <div className="clock">
              <FaRegClock></FaRegClock>
              <p>07:00 - 16:00</p>
            </div>
            <div className="clander">
              <FaCalendarAlt></FaCalendarAlt>
              <p>Availability : Jan 21’ - Dec 24’</p>
            </div>

            <div className="package-midel">
              <div>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
              </div>
              <div>
                <h4>$740</h4>
              </div>
            </div>
            <button className="package-btn">Book Now</button>
          </div>
        </div>
        <div class="item">
          <img src={image4} alt="" />
          <div className="package-text">
            <h5>Lough Erne Resort 2 Nights , 3 Rounds</h5>
            <div className="clock">
              <FaRegClock></FaRegClock>
              <p>07:00 - 16:00</p>
            </div>
            <div className="clander">
              <FaCalendarAlt></FaCalendarAlt>
              <p>Availability : Jan 21’ - Dec 24’</p>
            </div>

            <div className="package-midel">
              <div>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
              </div>
              <div>
                <h4>$740</h4>
              </div>
            </div>
            <button className="package-btn">Book Now</button>
          </div>
        </div>
        <div class="item">
          <img src={imag5} alt="" />
          <div className="package-text">
            <h5>Old Thorns Manor 4 Nights, 5 Rounds</h5>
            <div className="clock">
              <FaRegClock></FaRegClock>
              <p>07:00 - 16:00</p>
            </div>
            <div className="clander">
              <FaCalendarAlt></FaCalendarAlt>
              <p>Availability : Jan 21’ - Dec 24’</p>
            </div>

            <div className="package-midel">
              <div>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
              </div>
              <div>
                <h4>$740</h4>
              </div>
            </div>
            <button className="package-btn">Book Now</button>
          </div>
        </div>
        <div class="item">
          <img src={imag6} alt="" />
          <div className="package-text">
            <h5>AGleneagles 3 Nights, 4 Rounds</h5>
            <div className="clock">
              <FaRegClock></FaRegClock>
              <p>07:00 - 16:00</p>
            </div>
            <div className="clander">
              <FaCalendarAlt></FaCalendarAlt>
              <p>Availability : Jan 21’ - Dec 24’</p>
            </div>

            <div className="package-midel">
              <div>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
              </div>
              <div>
                <h4>$740</h4>
              </div>
            </div>
            <button className="package-btn">Book Now</button>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
};

export default PackageTravel;
