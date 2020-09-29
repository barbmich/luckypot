import React from "react";
import "./MealsContainer.scss"
import { Card } from "react-bootstrap";
import MealItem from "./MealItem";
import MealChosenNoRecipe from "./MealChosenNoRecipe";

export default function OthersContainer(props) {
  return (
    <Card className="mealsContainer" >
      <Card.Body>
        <Card.Title className="mealsContainerTitle">Others</Card.Title>
        <MealChosenNoRecipe />
        <MealItem />
        <MealItem />
      </Card.Body>
    </Card>
  );
}