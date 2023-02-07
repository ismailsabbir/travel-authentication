import React from "react";
import { Col, Row } from "react-bootstrap";
import Header from "../Navbar/Header";
import { FaClock, FaClipboard, FaBlogger } from "react-icons/fa";
import "./Blog.css";
import img1 from "../../images/travel1.avif";
import img2 from "../../images/travel10.avif";
import img3 from "../../images/travel2.avif";
import img4 from "../../images/travel3.avif";
import img5 from "../../images/travel5.jpg";
import img6 from "../../images/travel6.avif";
import img7 from "../../images/travel6.avif";
import img8 from "../../images/travel7.avif";
import img9 from "../../images/travel8.avif";
const Blog = () => {
  return (
    <div className="blog-container">
      <div className="blog-header">
        <Header></Header>
      </div>
      <div className="blogs">
        <Row>
          <Col className="left-blog" lg="8">
            <div className="blog">
              <div className="blog-icon">
                <FaClock className="icon"></FaClock>
                <p>June 6, 2016</p>
                <FaClipboard className="icon"></FaClipboard>
                <p>John Doe</p>
                <FaBlogger className="icon"></FaBlogger>
                <p>Blog, Uncategorized</p>
              </div>
              <h4>Leader of the V&A’s New East London Museum Announced</h4>
              <p>
                A wonderful serenity has taken possession of my entire soul,
                like these sweet mornings of spring which I enjoy with my whole
                heart. I am alone, and feel the charm of existence in this spot,
                which was created for the bliss of souls like mine. I am so
                happy, my dear friend, so absorbed in the exquisite sense of
                mere tranquil existence, that I neglect my talents. I should
                be...
              </p>
              <button>READ MORE</button>
            </div>
            <div className="blog">
              <div className="blog-icon">
                <FaClock className="icon"></FaClock>
                <p>June 6, 2016</p>
                <FaClipboard className="icon"></FaClipboard>
                <p>John Doe</p>
                <FaBlogger className="icon"></FaBlogger>
                <p>Blog, Uncategorized</p>
              </div>
              <h4>Leader of the V&A’s New East London Museum Announced</h4>
              <p>
                A wonderful serenity has taken possession of my entire soul,
                like these sweet mornings of spring which I enjoy with my whole
                heart. I am alone, and feel the charm of existence in this spot,
                which was created for the bliss of souls like mine. I am so
                happy, my dear friend, so absorbed in the exquisite sense of
                mere tranquil existence, that I neglect my talents. I should
                be...
              </p>
              <button>READ MORE</button>
            </div>
            <div className="blog">
              <div className="blog-icon">
                <FaClock className="icon"></FaClock>
                <p>June 6, 2016</p>
                <FaClipboard className="icon"></FaClipboard>
                <p>John Doe</p>
                <FaBlogger className="icon"></FaBlogger>
                <p>Blog, Uncategorized</p>
              </div>
              <h4>Leader of the V&A’s New East London Museum Announced</h4>
              <p>
                A wonderful serenity has taken possession of my entire soul,
                like these sweet mornings of spring which I enjoy with my whole
                heart. I am alone, and feel the charm of existence in this spot,
                which was created for the bliss of souls like mine. I am so
                happy, my dear friend, so absorbed in the exquisite sense of
                mere tranquil existence, that I neglect my talents. I should
                be...
              </p>
              <button>READ MORE</button>
            </div>
            <div className="blog">
              <div className="blog-icon">
                <FaClock className="icon"></FaClock>
                <p>June 6, 2016</p>
                <FaClipboard className="icon"></FaClipboard>
                <p>John Doe</p>
                <FaBlogger className="icon"></FaBlogger>
                <p>Blog, Uncategorized</p>
              </div>
              <h4>Leader of the V&A’s New East London Museum Announced</h4>
              <p>
                A wonderful serenity has taken possession of my entire soul,
                like these sweet mornings of spring which I enjoy with my whole
                heart. I am alone, and feel the charm of existence in this spot,
                which was created for the bliss of souls like mine. I am so
                happy, my dear friend, so absorbed in the exquisite sense of
                mere tranquil existence, that I neglect my talents. I should
                be...
              </p>
              <button>READ MORE</button>
            </div>
          </Col>
          <Col className="right-blog" lg="4">
            <div className="right-text">
              <h4>TEXT WIDGET</h4>
              <p>
                Nulla vitae elit libero, a pharetra augue. Nulla vitae elit
                libero, a pharetra augue. Nulla vitae elit libero, a pharetra
                augue. Donec sed odio dui. Etiam porta sem malesuada.
              </p>
            </div>
            <div>
              <h4>RECENT WORKS</h4>
              <div>
                <Row>
                  <Col lg="4">
                    <img className="left-img" src={img1} alt="" />
                  </Col>
                  <Col lg="4">
                    <img className="left-img" src={img2} alt="" />
                  </Col>
                  <Col>
                    <img className="left-img" src={img3} alt="" />
                  </Col>
                </Row>
                <Row>
                  <Col lg="4">
                    <img className="left-img" src={img4} alt="" />
                  </Col>
                  <Col lg="4">
                    <img className="left-img" src={img5} alt="" />
                  </Col>
                  <Col>
                    <img className="left-img" src={img6} alt="" />
                  </Col>
                </Row>
                <Row>
                  <Col lg="4">
                    <img className="left-img" src={img7} alt="" />
                  </Col>
                  <Col lg="4">
                    <img className="left-img" src={img8} alt="" />
                  </Col>
                  <Col>
                    <img className="left-img" src={img9} alt="" />
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Blog;
