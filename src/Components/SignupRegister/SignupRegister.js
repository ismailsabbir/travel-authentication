import React, { useContext, useState } from "react";
import Header from "../Navbar/Header";
import "./SignupRegister.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../Context/UserContext";
const SignupRegister = () => {
  const { createuser, registerwithgoogle, updateprofilr } =
    useContext(AuthContext);
  const [passerror, setpasserror] = useState("");
  const [sucess, setsucess] = useState(false);
  const handleregister = (event) => {
    event.preventDefault();
    setsucess(false);
    const form = event.target;
    const name = event.target.name.value;
    console.log(name);
    const email = event.target.email.value;
    const password = event.target.password.value;
    const conframpassword = event.target.conframpassword.value;
    if (!/(?=.*[A-Z])/.test(password)) {
      setpasserror("At Least One Capitl Letter .");
      return;
    }
    if (password.length < 6) {
      setpasserror("At Least Six Number or Letter");
      return;
    }
    if (!/(?=.*[!@#$&*])/.test(password)) {
      setpasserror("At least one special character");
      return;
    }

    if (password !== conframpassword) {
      setpasserror("Password not match");
      return;
    }
    setpasserror("");
    createuser(email, password)
      .then((req) => {
        const user = req.user;
        console.log(user);
        setsucess(true);
        form.reset();
        updateprofilr(name)
          .then((req) => {
            console.log("update");
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
        setpasserror(error.message);
      });
    // updateprofilr(name)
    // .then((req) => {
    //   const user = req.user;
    //   console.log(user);
    //   console.log("update");
    // })
    // .catch((error) => {
    //   console.error(error);
    // });
  };

  const handlegoogleregister = () => {
    registerwithgoogle()
      .then((req) => {
        const user = req.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="register-container">
      <div id="logintext">
        <Header></Header>
        <div className="signup-from">
          <h4>Register !</h4>
          <Form onSubmit={handleregister} className="from">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>User Name</Form.Label>
              <Form.Control name="name" type="name" placeholder="Enter Name" />
            </Form.Group>
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
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Accept All Terms & condition"
              />
            </Form.Group>
            <Button className="register-btn" variant="info" type="submit">
              Register Now
            </Button>
            <p>{passerror}</p>
            {sucess && <p>Register SucessFull</p>}
          </Form>
          <div className="other-register">
            <Button
              className="register-btn"
              variant="outline-warning"
              type="submit"
              onClick={handlegoogleregister}
            >
              SIGNUP WITH GOOGLE
            </Button>
            <Button
              className="register-btn"
              variant="outline-warning"
              type="submit"
            >
              SIGNUP WITH FACEBOOK
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupRegister;
