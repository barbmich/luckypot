import React from "react";
import { Card } from "react-bootstrap";
import AddButton from "./AddButton";
import MealItem from "./MealItem";
import MealWithRecipe from "./MealWithRecipe";
import "./MealsContainer.scss"

export default function MealsContainer(props) {
  return (
    <Card className="mealsContainer" >
      {/* <Card.Body>
      </Card.Body> */}
      <MealItem />
      <MealItem />
      <MealItem />
      <MealWithRecipe />
      <MealWithRecipe />
      <MealWithRecipe />
      <AddButton />
    </Card>
  );
}