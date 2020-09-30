import React, { useState, useEffect } from "react";
import "./MealForm.scss";
import { Form, Button } from "react-bootstrap";

export default function MealForm(props) {
  const [meal, setMeal] = useState("");

  return (
    <div className="mealForm">
      <Form>
        <Form.Control
          type="text"
          value={meal}
          onChange={(event) => setMeal(event.target.value)}
          placeholder="Enter Meal Name"
        />
        <Button className="formBtn" variant="primary" onClick={() => {}}>
          Confirm
        </Button>
      </Form>
    </div>
  );
}
