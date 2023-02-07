import React, { useContext, useState } from "react";
import Header from "../Navbar/Header";
import "./SigninLogin.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../Context/UserContext";
import { useNavigate } from "react-router-dom";
const SigninLogin = () => {
  const { loginuser } = useContext(AuthContext);
  const [error, seterror] = useState("");
  const navigate = useNavigate();
  const handlelogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const pasword = event.target.password.value;
    const conframpassword = event.target.conframpassword.value;
    if (pasword !== conframpassword) {
      seterror("password not match");
    }
    loginuser(email, pasword)
      .then((req) => {
        const user = req.user;
        console.log(user);
        navigate("/home");
      })
      .catch((error) => {
        console.error(error);
        seterror(error.message);
      });
  };
  return (
    <div className="login-container">
      <div id="logintext">
        <Header></Header>
        <div className="signup-from">
          <h4>LogIn !</h4>
          <Form onSubmit={handlelogin} className="from">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicConframPassword">
              <Form.Label>Confram Password</Form.Label>
              <Form.Control
                name="conframpassword"
                type="password"
                placeholder="Confram Password"
              />
            </Form.Group>

            <Button className="register-btn" variant="info" type="submit">
              LogIn Now
            </Button>
            <p>{error}</p>
          </Form>
          <div className="other-register">
            <p>------------Or--------------------</p>
            <Button
              className="register-btn"
              variant="outline-warning"
              type="submit"
            >
              SIGNUP WITH GOOGLE
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninLogin;
