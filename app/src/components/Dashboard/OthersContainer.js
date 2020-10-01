import React from "react";
import "./MealsContainer.scss"
import { Card } from "react-bootstrap";
import AddButton from "./AddButton"
import MealItem from "./MealItem";
import MealChosenNoRecipe from "./MealChosenNoRecipe";

export default function OthersContainer(props) {
  const { items } = props;
  return (
    <Card className="mealsContainer" >
      <Card.Body>
        <MealChosenNoRecipe />
        <MealItem />
        <MealItem />
        <AddButton items={items}/>
      </Card.Body>
    </Card>
  );
}