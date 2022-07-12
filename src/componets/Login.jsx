import React from "react";
import { Form, Button, Alert } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { Link } from "react-router-dom";
import "../Style/login.css";

function Login() {
  return (
    <div className="loginmain">
      <div className="p-4 box">
        <h2 className="mb-3 text-center"> Login</h2>

        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              name="email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Sign In
            </Button>
          </div>
        </Form>
        <hr />
        <div>
          <GoogleButton className="g-btn" type="dark" />
        </div>

        <div className="text-center mt-3">Forgot Password</div>

        <div className="p-4  mt-3 text-center">
          Don't have an account? Sign Up
        </div>
      </div>
    </div>
  );
}

export default Login;
