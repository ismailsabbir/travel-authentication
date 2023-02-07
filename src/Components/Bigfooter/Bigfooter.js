import React from "react";
import "./Bigfooter.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
const Bigfooter = () => {
  return (
    <div className="big-footer-container">
      <div className="footer1">
        <h4>Travel Tour</h4>
        <p>12 Main tPt. London</p>
        <p>+44 3656 4567</p>
        <p>contact@traveltourtheme.com</p>
        <div>
          <FaFacebook className="foot-icon"></FaFacebook>
          <FaTwitter className="foot-icon"></FaTwitter>
          <FaInstagram className="foot-icon"></FaInstagram>
        </div>
      </div>
      <div className="footer1">
        <h4>About Us</h4>
        <p>Our Story</p>
        <p>Travel Blog & Tips</p>
        <p>Working With Us</p>
        <p>Be Our Partner</p>
        <p>Packages</p>
      </div>
      <div className="footer1">
        <h5>Support</h5>
        <p>Our Story</p>
        <p>Travel Blog & Tips</p>
        <p>Working With Us</p>
        <p>Be Our Partner</p>
        <p>Packages</p>
      </div>
      <div className="footer1">
        <h4>Pay Safely With Us</h4>
        <p className="paragrap">
          The payment is encrypted and transmitted securely with an SSL
          protocol.
        </p>
      </div>
    </div>
  );
};

export default Bigfooter;
