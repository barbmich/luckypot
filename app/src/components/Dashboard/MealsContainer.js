import React from "react";
import { Card } from "react-bootstrap";
import AddButton from "./AddButton";
import MealItem from "./MealItem";
import MealWithRecipe from "./MealWithRecipe";
import "./MealsContainer.scss";

export default function MealsContainer(props) {
  const { items } = props;

  const mealsArray = items.map((item) => {
    return <MealItem name={item.name} />;
  });

  return (
    <Card className="mealsContainer">
      {/* <Card.Body>
      </Card.Body> */}
      {mealsArray}
      <AddButton />
    </Card>
  );
}
