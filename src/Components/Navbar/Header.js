import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/logo1.png";
import {
  FaMailBulk,
  FaPhone,
  FaFacebookF,
  FaTwitter,
  FaSignInAlt,
  FaUser,
} from "react-icons/fa";
import "./Header.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";

const Header = () => {
  const { user, signout } = useContext(AuthContext);
  console.log(user?.displayName);
  const handlelogout = () => {
    console.log("logout");
    signout()
      .then((req) => {
        console.log("signout");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Navbar className="first-nav">
        <Container>
          <div className="d-none d-lg-block">
            <Navbar.Text className="first-nav-left">
              <div className="phone">
                <FaPhone className="phone-icon"></FaPhone>
                <p className="number">1.820.3345.33</p>
              </div>
              <div className="email">
                <FaMailBulk className="email-icon"></FaMailBulk>
                <p className="gmail"> Contact@TravelTourWP.com</p>
              </div>
            </Navbar.Text>
          </div>

          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="first-nav-right">
              <div>
                <FaFacebookF className="facebook-icon d-none d-lg-block"></FaFacebookF>
              </div>
              <div>
                <FaTwitter className="twitter-icon d-none d-lg-block"></FaTwitter>
              </div>

              <div className="signin-btn">
                <FaUser className="signin d-none d-lg-block"></FaUser>
                <Link className="signin-text" id="text" to="/signup">
                  SignUp
                </Link>
              </div>
              <p className="user-name">
                {" "}
                <FaUser className="signin "></FaUser>
                {user?.displayName}
              </p>
              <div className="right-btn">
                {user?.email ? (
                  <div className="signin-btn">
                    <FaSignInAlt className="signin"></FaSignInAlt>
                    <p onClick={handlelogout} className="signin-text" id="text">
                      Log Out
                    </p>
                  </div>
                ) : (
                  <div className="signin-btn">
                    <FaSignInAlt className="signin"></FaSignInAlt>
                    <Link className="signin-text" id="text" to="/signin">
                      SignIn
                    </Link>
                    {/* <p className="signin-text">SignIN</p> */}
                  </div>
                )}
              </div>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar expand="lg" className="secound-nav">
        <Container fluid>
          <Navbar>
            <Link to="/home">
              <img className="logo" src={logo} alt="" />
            </Link>
          </Navbar>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 item-container"
              style={{ maxHeight: "100px" }}
            >
              <Link className="nav-items" to="/home">
                HOME
              </Link>
              <Link className="nav-items" to="/about">
                ABOUT
              </Link>
              <Link className="nav-items" to="/home">
                PAGE
              </Link>
              <Link className="nav-items" to="/tour">
                TOURE LIST
              </Link>
              <Link className="nav-items" to="/contact">
                CONTACT
              </Link>
              <Link className="nav-items" to="/blog">
                BLOG
              </Link>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-warning">Search</Button>
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
