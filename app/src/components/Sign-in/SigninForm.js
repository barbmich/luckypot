import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default function SignInForm(props) {
  const [email, setEmail] = useState(props.email || "");
  const [password, setPassword] = useState(props.password || "");
  const [error, setError] = useState("");
  const { authenticateUser, saveLoggedUserInfo } = props;

  const validate = () => {
    if (!email) {
      setError("Email cannot be blank.");
      return;
    }
    if (!password) {
      setError("Password cannot be blank.");
      return;
    }
    const user = {
      email,
      password,
    };
    //  setError("NOT BLANK");
    axios
      .post("http://localhost:3003/login", user)
      .then((result) => {
        if (
          result.data === ("Incorrect credentials" || "Incorrect password.")
        ) {
          console.log(result);
          setError(result.data);
        } else {
          console.log("signed in!");
          console.log("Result of login: ", result.data.user);
          saveLoggedUserInfo(result.data.user);
          authenticateUser(result.data);
        }
      })
      .catch((err) => console.log("THIS IS ERROR", err));
  };

  return (
    <div className="authForm">
      <h1 className="pageTitle">Login</h1>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" onClick={() => validate()}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
