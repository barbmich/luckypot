import React, { useState } from "react";
import "./MealForm.scss";
import { Form, Button } from "react-bootstrap";

export default function MealForm(props) {
  const { addMeal } = props;
  const [meal, setMeal] = useState("");

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
          onClick={() => addMeal(meal)}
        >
          Confirm
        </Button>
      </Form>
    </div>
  );
}
