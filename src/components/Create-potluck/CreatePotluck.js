import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./CreatePotluck.scss";

export default function CreatePotluck(props) {
  return (
    <div className="container">
      <div className="createPotluck">
        <h1>Create a Potluck!</h1>
        <Form>
          <Form.Group controlId="formBasicFirstName">
            <Form.Label>Potluck Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Potluck name" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicFirstName">
            <Form.Label>Date</Form.Label>
            <Form.Control type="text" placeholder="Enter Date" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>{" "}
          <Form.Group controlId="formBasicFirstName">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Enter Address" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>{" "}
          <Form.Group controlId="formBasicFirstName">
            <Form.Label>Postal Code</Form.Label>
            <Form.Control type="text" placeholder="Enter Postal Code" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicFirstName">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="Enter City" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicFirstName">
            <Form.Label>Province</Form.Label>
            <Form.Control type="text" placeholder="Province" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={() => console.log("click")}
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
