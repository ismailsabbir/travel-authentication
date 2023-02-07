import React from "react";
import { Col, Row } from "react-bootstrap";
import Header from "../Navbar/Header";
import Card from "react-bootstrap/Card";
import image1 from "../../images/travel2.avif";
import image2 from "../../images/travel3.avif";
import imag3 from "../../images/travel7.avif";
import image4 from "../../images/travel8.avif";
import imag5 from "../../images/travel9.jpg";
import imag6 from "../../images/travel6.avif";
import { FaRegClock, FaCalendarAlt, FaStar } from "react-icons/fa";
import "./TourList.css";
const TourList = () => {
  return (
    <div className="list-container">
      <div className="list-header">
        <Header></Header>
        <div className="tourlist-text">
          <h2>Enquiry Only : Macdonald Spey Valley</h2>
        </div>
      </div>
      <div className="tourlists">
        <Row>
          <Col lg="4">
            <Card className="card">
              <Card.Img variant="top" src={imag3} />
              <Card.Body>
                <div className="package-texts">
                  <h6 id="list-title">
                    Adare Manor Golf Resort 1 Night, 1 Rounds
                  </h6>
                  <div className="clock">
                    <FaRegClock></FaRegClock>
                    <p>07:00 - 16:00</p>
                  </div>
                  <div className="clander">
                    <FaCalendarAlt></FaCalendarAlt>
                    <p>Availability : Jan 21’ - Dec 24’</p>
                  </div>

                  <div className="package-midel" id="package-mid">
                    <div>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <p>(1 Review)</p>
                    </div>
                    <div>
                      <p>
                        /Form <br></br>$740
                      </p>
                    </div>
                  </div>
                  <button className="package-btn">Book Now</button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="4">
            <Card>
              <Card.Img variant="top" src={imag5} />
              <Card.Body>
                <div className="package-texts">
                  <h6 id="list-title">
                    Adare Manor Golf Resort 1 Night, 1 Rounds
                  </h6>
                  <div className="clock">
                    <FaRegClock></FaRegClock>
                    <p>07:00 - 16:00</p>
                  </div>
                  <div className="clander">
                    <FaCalendarAlt></FaCalendarAlt>
                    <p>Availability : Jan 21’ - Dec 24’</p>
                  </div>

                  <div className="package-midel" id="package-mid">
                    <div>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <p>(1 Review)</p>
                    </div>
                    <div>
                      <p>
                        /Form <br></br>$740
                      </p>
                    </div>
                  </div>
                  <button className="package-btn">Book Now</button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="4">
            <Card>
              <Card.Img variant="top" src={imag6} />
              <Card.Body>
                <div className="package-texts">
                  <h6 id="list-title">
                    Adare Manor Golf Resort 1 Night, 1 Rounds
                  </h6>
                  <div className="clock">
                    <FaRegClock></FaRegClock>
                    <p>07:00 - 16:00</p>
                  </div>
                  <div className="clander">
                    <FaCalendarAlt></FaCalendarAlt>
                    <p>Availability : Jan 21’ - Dec 24’</p>
                  </div>

                  <div className="package-midel" id="package-mid">
                    <div>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <p>(1 Review)</p>
                    </div>
                    <div>
                      <p>
                        /Form <br></br>$740
                      </p>
                    </div>
                  </div>
                  <button className="package-btn">Book Now</button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="4">
            <Card>
              <Card.Img variant="top" src={image1} />
              <Card.Body>
                <div className="package-texts">
                  <h6 id="list-title">
                    Adare Manor Golf Resort 1 Night, 1 Rounds
                  </h6>
                  <div className="clock">
                    <FaRegClock></FaRegClock>
                    <p>07:00 - 16:00</p>
                  </div>
                  <div className="clander">
                    <FaCalendarAlt></FaCalendarAlt>
                    <p>Availability : Jan 21’ - Dec 24’</p>
                  </div>

                  <div className="package-midel" id="package-mid">
                    <div>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <p>(1 Review)</p>
                    </div>
                    <div>
                      <p>
                        /Form <br></br>$740
                      </p>
                    </div>
                  </div>
                  <button className="package-btn">Book Now</button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="4">
            <Card>
              <Card.Img variant="top" src={image2} />
              <Card.Body>
                <div className="package-texts">
                  <h6 id="list-title">
                    Adare Manor Golf Resort 1 Night, 1 Rounds
                  </h6>
                  <div className="clock">
                    <FaRegClock></FaRegClock>
                    <p>07:00 - 16:00</p>
                  </div>
                  <div className="clander">
                    <FaCalendarAlt></FaCalendarAlt>
                    <p>Availability : Jan 21’ - Dec 24’</p>
                  </div>

                  <div className="package-midel" id="package-mid">
                    <div>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <p>(1 Review)</p>
                    </div>
                    <div>
                      <p>
                        /Form <br></br>$740
                      </p>
                    </div>
                  </div>
                  <button className="package-btn">Book Now</button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="4">
            <Card>
              <Card.Img variant="top" src={image4} />
              <Card.Body>
                <div className="package-texts">
                  <h6 id="list-title">
                    Adare Manor Golf Resort 1 Night, 1 Rounds
                  </h6>
                  <div className="clock">
                    <FaRegClock></FaRegClock>
                    <p>07:00 - 16:00</p>
                  </div>
                  <div className="clander">
                    <FaCalendarAlt></FaCalendarAlt>
                    <p>Availability : Jan 21’ - Dec 24’</p>
                  </div>

                  <div className="package-midel" id="package-mid">
                    <div>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <p>(1 Review)</p>
                    </div>
                    <div>
                      <p>
                        /Form <br></br>$740
                      </p>
                    </div>
                  </div>
                  <button className="package-btn">Book Now</button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default TourList;
