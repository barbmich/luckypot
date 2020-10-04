import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MealForm.scss";
import { Form, Button } from "react-bootstrap";

export default function MealForm(props) {
  const { items, addMeal, collapse } = props;
  const [meal, setMeal] = useState("");
  const [category, setCategory] = useState(null);

  // function addMeal(item, category) {
  //   const input = {
  //     event_id: 3,
  //     category_id: 1,
  //     name: item,
  //     assigned: null,
  //   };
  //   axios.post("http://localhost:3003/items/add", input).then(() => {
  //     console.log(items);
  //     setMeal("");
  //     console.log(meal);
  //   });
  // }

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
          onClick={() => {
            addMeal(meal);

          }}
        >
          Confirm
        </Button>
      </Form>
    </div>
  );
}
