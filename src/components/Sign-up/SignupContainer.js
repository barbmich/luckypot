import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SignupForm from "./SignupForm";
import "./SignupContainer.scss";

export default function SignupContainer(prop) {
  return (
    <Container className="container">
      <h1>Sign-up!</h1>
      <SignupForm />
    </Container>
  );
}
