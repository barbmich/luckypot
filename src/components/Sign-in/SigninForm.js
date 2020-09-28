import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios';

export default function SignInForm(props) {
  const [email, setEmail] = useState(props.email || "");
  const [password, setPassword] = useState(props.password || "");
  const [error, setError] = useState("");


  const validate = () => {
    if (!email || !password) {
      setError("Email cannot be blank");
      console.log("NO EMAIL OR PASSWORD",error)
      return;
    } 
    if (!password) {
      setError("Password cannot be blank");
      console.log(error);
    }
     const user = {
       email,
       password
      }
     setError("NOT BLANK");
     axios.post('http://localhost:3003/login', user)
     .then((result) => {
       if(result.data.user) {
          console.log( result.data.user)                   
       } else {
         console.log("Wrong!!!");
       };
     })
     .catch(err => console.log("THIS IS ERROR", err));
  }

  
  return (
    <div className="authForm">
      <h1 className="pageTitle">Login</h1>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={(event) => setEmail(event.target.value)} value={email} type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={(event) => setPassword(event.target.value)} type="password" placeholder="Password" />
        </Form.Group>
        <Button
          variant="primary"
          onClick={() => validate()}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}
