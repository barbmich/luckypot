import React, { useState } from "react";
import "./MealForm.scss";
import { Form, Card, Button } from "react-bootstrap";

export default function MealForm(props) {
  const { addMeal } = props;
  const [meal, setMeal] = useState("");

  return (
    <Card style={{width: "30rem"}}>
      <Card.Body>
        <Card.Title style={{textAlign: "center", fontSize: "2em"}}>Add a meal</Card.Title>
        <Form style={{display: "flex", flexDirection: "column", alignItems: "stretch"}}>
        <Form.Control
          type="text"
          value={meal}
          onChange={(event) => setMeal(event.target.value)}
          placeholder="Enter Meal Name"
          onKeyDown={(e) => {
            if (e && e.key == "Enter") {
              e.preventDefault();
              addMeal(meal);
              setMeal("");
            }}}
        />
         <Button
          className="formBtn"
          variant="primary"
          onClick={() => {
            addMeal(meal)
            setMeal("")}
        }
        >
          Confirm
        </Button>
      </Form>
      </Card.Body>
    </Card>
    
    // <div className="mealForm">
    //   <Form style={{display: "flex", flexDirection: "column", alignItems: "stretch"}}>
    //     <Form.Control
    //       type="text"
    //       value={meal}
    //       onChange={(event) => setMeal(event.target.value)}
    //       placeholder="Enter Meal Name"
    //       onKeyDown={(e) => {
    //         if (e && e.key == "Enter") {
    //           e.preventDefault();
    //           addMeal(meal);
    //           setMeal("");
    //         }}}
    //     />
    //  <Button
    //       className="formBtn"
    //       variant="primary"
    //       onClick={() => {
    //         addMeal(meal)
    //         setMeal("")}
    //     }
    //     >
    //       Confirm
    //     </Button>
    //   </Form>
    // </div>
  );
}
