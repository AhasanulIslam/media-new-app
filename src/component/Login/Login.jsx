import React, { useState, useEffect } from "react";
import "./Login1.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/home");
    }
  }, []);

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  async function login() {
    const item = { email, password };
    console.log("sdcsxcvxcc", item);
    try {
      const result = await axios.post(
        "https://soapp-nodejs.herokuapp.com/auth/login",
        item
      );
      console.log("scscjhvcb", result);

      localStorage.setItem("user-info", result.data.token);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="login__container">
      <div className="login__welcome">
        <p>Social Media App</p>
      </div>

      <div className="login__form-container">
        <div className="login__form">
          <Form onSubmit={handleSubmit}>
           

            <div>
              <Form.Group controlId="password">
                <Form.Label> Password </Form.Label>
                <Form.Control
                  className="input"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
            </div>
            <Button
              block
              size="lg"
              type="submit"
              disabled={!validateForm()}
              className="login__submit-btn"
              onClick={login}
            >
              Login
            </Button>

            <span className="login__forgot-password"><a href="/forget"> Forgot password? </a></span>
            <span className="login__signup">
              <a href="/signup"> Create New Account </a>{" "}
            </span>
          </Form>
        </div>
      </div>
    </div>
  );
}
