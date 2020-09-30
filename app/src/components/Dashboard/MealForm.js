import React, { useState, useEffect } from "react";
import "./MealForm.scss";
import { Form, Button } from "react-bootstrap";

export default function MealForm(props) {
  const { items } = props;
  const [meal, setMeal] = useState("");
  const [category, setCategory] = useState(null);

  function addMeal(item, category) {
    items.push({
      category_id: 1,
      assigned_id: null,
      name: item,
    });
    console.log(items);
  }

  return (
    <div className="mealForm">
      <Form>
        <Form.Control
          type="text"
          value={meal}
          onChange={(event) => setMeal(event.target.value)}
          placeholder="Enter Meal Name"
        />

        <Button
          className="formBtn"
          variant="primary"
          onClick={(event) => {
            addMeal(meal);
            setMeal("");
          }}
        >
          Confirm
        </Button>
      </Form>
    </div>
  );
}
