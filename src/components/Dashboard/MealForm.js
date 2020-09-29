import React from "react";
import "./MealForm.scss"
import { Form, Button } from "react-bootstrap";

export default function MealForm(props) {
  return (
  <div className="mealForm">
    <Form>
      <Form.Control type="text" placeholder="Enter Meal Name" />
      <Button className="formBtn" variant="primary" type="submit">
        Confirm
      </Button>
    </Form>
  </div>
  );
}