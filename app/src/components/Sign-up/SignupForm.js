import React, { useState } from "react";
import { useHistory, Link, useLocation } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./SignupForm.scss";
import axios from "axios";
import FileBase64 from "react-file-base64";

export default function SignupForm(props) {
  const location = useLocation();
  const urlGiven = location.state ? location.state.urlGiven : null;
  const { setAuth, setLoggedUser } = props;
  const [error, setError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [avatar, setAvatar] = useState([]);

  let history = useHistory();

  console.log("urlGiven FROM Signin::", urlGiven);

  function getFile(image) {
    setAvatar(image);
  }

  const authenticateUser = (user) => {
    if (typeof user === "object") {
      setAuth((prev) => !prev);
      if (urlGiven) {
        history.push(urlGiven);
      } else {
        history.push("/MyPotlucks");
      }
    }
  };

  function validate(event) {
    event.preventDefault();
    if (!firstName) {
      setError("First name is required.");
      return;
    }
    if (!lastName) {
      setError("Last name is required.");
      return;
    }
    if (!email) {
      setError("E-mail is required.");
      return;
    }
    if (!email.includes("@")) {
      setError("This is not a valid email.");
      return;
    }
    if (!password) {
      setError("A password is required.");
      return;
    }
    if (!retypePassword) {
      setError("A password confirmation is required.");
      return;
    }
    if (password !== retypePassword) {
      setError("The passwords provided don't match.");
      return;
    }
    if (avatar.length === 0) {
      setError("You need to upload a picture.");
      return;
    }
    setError("");
    const user = {
      firstName,
      lastName,
      email,
      password,
      avatar: avatar[0],
    };

    axios
      .post("http://localhost:3003/signup", user)
      .then((result) => {
        if (
          result.data ===
          ("A user with this email already exists." ||
            "An error occurred server-side.")
        ) {
          setError(result.data);
        } else {
          console.log(result.data);
          setLoggedUser(result.data.user);
          authenticateUser(result.data);
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="authForm">
      <h1 className="pageTitle">Register</h1>
      {error && <p>{error}</p>}
      <div className="form-container">
        <Form className="form">
          <div id="sections-container">
            <section id="left-section">
              <Form.Group controlId="formBasicFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter first name"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter last name"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPasswordConfirmation">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm your password"
                  value={retypePassword}
                  onChange={(event) => setRetypePassword(event.target.value)}
                />
              </Form.Group>
            </section>
            <section id="right-section">
              <Form.Label>Profile Picture</Form.Label>
              <FileBase64 multiple={true} onDone={getFile.bind(this)} />
              {avatar.length !== 0 ? (
                <div>
                  {avatar.map((index, i) => {
                    console.log(index);
                    return (
                      <img
                        key={i}
                        className="user-avatar"
                        src={index.base64}
                        value={avatar.name}
                        alt="profile"
                      />
                    );
                  })}
                </div>
              ) : null}
            </section>
          </div>
          <Button variant="primary" onClick={(event) => validate(event)}>
            Submit
          </Button>
        </Form>
      </div>
      <p className="link-reg">
        Already have an account? &nbsp;
        <Link className="link-reg" to="/signin">
          Login Here
        </Link>
      </p>
    </div>
  );
}
