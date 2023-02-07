import React from "react";
import Header from "../Navbar/Header";
import { FaPhoneAlt, FaLocationArrow } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./Contact.css";
const Contact = () => {
  return (
    <div>
      <div className="con-head">
        <Header></Header>
      </div>
      <div className="contact-types">
        <div className="phone-con">
          <FaPhoneAlt className="phone-icons"></FaPhoneAlt>
          <h4>PHONE</h4>
          <p>
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings.
          </p>
          <p>+1-2345-2345</p>
        </div>
        <div className="phone-con">
          <MdEmail className="phone-icons"></MdEmail>
          <h4>PHONE</h4>
          <p>
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings.
          </p>
          <p>+1-2345-2345</p>
        </div>
        <div className="phone-con">
          <FaLocationArrow className="phone-icons"></FaLocationArrow>
          <h4>PHONE</h4>
          <p>
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings.
          </p>
          <p>+1-2345-2345</p>
        </div>
      </div>
      <div className="contact-container">
        <div className="form-container">
          <div className="contact-text">
            <p>We'd love to hear from you!</p>
            <h4>
              Use our online contact form to make an enquiry or organise
              transport for your trip.
            </h4>
          </div>
          <div>
            <form>
              <div className="name-email">
                <div className="name-div">
                  <input
                    className="name"
                    type="text"
                    placeholder="Enter Full Name"
                  />
                </div>
                <div className="email-div">
                  <input
                    className="email"
                    type="email"
                    placeholder="Enter Email"
                  />
                </div>
              </div>
              <input className="subject" type="text" placeholder="Subject" />
              <input className="message" type="text" placeholder="Message" />
              <button className="submit-btn" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
