import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./CreatePotluck.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

export default function CreatePotluck(props) {
  const { loggedUser } = props;
  const [startDate, setStartDate] = useState(new Date());
  const [potluckName, setpotluckName] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  let history = useHistory();

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
  // Validated all fields were filled out. //
  // If validation passes, potluck is inseted into db and user redirected to dashboard//
  function validatePotluck(event) {
    const host_id = loggedUser.id;
    if (
      !potluckName ||
      !address ||
      !postalCode ||
      !city ||
      !province ||
      !startDate
    ) {
      alert("Please enter all fields");
      return;
    }
    event.preventDefault();
    // console.log(date);
    const newPotluck = {
      host_id,
      potluckName,
      startDate,
      address,
      postalCode,
      city,
      province,
    };
    console.log(newPotluck);
    axios
      .post("http://localhost:3003/mypotlucks/add", newPotluck)
      .then((result) => {
        const event_id = result.data[0].id;
        console.log("CREATED EVENT:", result.data[0]);
        history.push(`/Dashboard/${event_id}`);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="container">
      <div className="createPotluck">
        <h1 class="pageTitle">Create a Potluck!</h1>
        <Form>
          <Form.Group controlId="formBasicFirstName">
            <Form.Label>Potluck Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Potluck name"
              value={potluckName}
              onChange={(event) => setpotluckName(event.target.value)}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          {/* <Form.Group controlId="formBasicFirstName">
            <Form.Label>Date</Form.Label>
            <Form.Control type="text" placeholder="Enter Date" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>{" "} */}
          <Form.Group controlId="formBasicFirstName">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Address"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>{" "}
          <Form.Group controlId="formBasicFirstName">
            <Form.Label>Postal Code</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Postal Code"
              value={postalCode}
              onChange={(event) => setPostalCode(event.target.value)}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicFirstName">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter City"
              value={city}
              onChange={(event) => setCity(event.target.value)}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicFirstName">
            <Form.Label>Province</Form.Label>
            <Form.Control
              type="text"
              placeholder="Province"
              value={province}
              onChange={(event) => setProvince(event.target.value)}
            />
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
          <Button variant="primary" onClick={validatePotluck}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
