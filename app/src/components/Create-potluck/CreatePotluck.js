import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./CreatePotluck.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function CreatePotluck(props) {
  const [startDate, setStartDate] = useState(new Date());

  console.log(startDate);

  function DateSelection() {
    return (
      <DatePicker
        className={"form-control"}
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        timeCaption="time"
        dateFormat="MMMM d, yyyy h:mm aa"
      />
    );
  }

  return (
    <div className="container">
      <div className="createPotluck">
        <h1 class="pageTitle">Create a Potluck!</h1>
        <Form>
          <Form.Group controlId="formBasicFirstName">
            <Form.Label>Potluck Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Potluck name" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          {/* <Form.Group controlId="formBasicFirstName">
            <Form.Label>Date</Form.Label>
            <Form.Control type="text" placeholder="Enter Date" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>{" "} */}
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
          {/* <Form.Group> */}
          {/* <Form.Label>Date & Time</Form.Label> */}
          <Form>
            <Form.Label>Date & time</Form.Label>
            <br />
            <DateSelection />
          </Form>
          {/* </Form.Group> */}
          <br />
          <Button
            variant="primary"
            onClick={(e) => {
              e.preventDefault();
              console.log("click");
            }}
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
