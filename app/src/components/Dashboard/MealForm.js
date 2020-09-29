import React from "react";
import "./MealForm.scss";
import { Form, Button } from "react-bootstrap";

export default function MealForm(props) {
  return (
    <div className="mealForm">
      <Form>
        <Form.Control type="text" placeholder="Enter Meal Name" />

        <Form>
          {["checkbox"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="Main"
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label="Appetizer"
                type={type}
                id={`inline-${type}-2`}
              />
              <Form.Check
                inline
                label="Dessert"
                type={type}
                id={`inline-${type}-2`}
              />
              <Form.Check
                inline
                label="Other"
                type={type}
                id={`inline-${type}-2`}
              />
            </div>
          ))}
        </Form>

        <Button className="formBtn" variant="primary" type="submit">
          Confirm
        </Button>
      </Form>
    </div>
  );
}
