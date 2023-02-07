import React from "react";
import "./OnlineContact.css";
const OnlineContact = () => {
  return (
    <div className="contact-container">
      <div className="form-container">
        <div className="contact-text">
          <p>We'd love to hear from you!</p>
          <h4>
            Use our online contact form to make an enquiry or organise transport
            for your trip.
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
  );
};

export default OnlineContact;
