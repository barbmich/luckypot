import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";
import AddButton from "./AddButton";
import MealItem from "./MealItem";
import MealWithRecipe from "./MealWithRecipe";
import "./MealsContainer.scss";

export default function MealsContainer(props) {
  const { items, users, loggedUser, event, addMeal } = props;

  const itemsArray = items.map((item) => {
    const user = users.find((user) => {
      return item.assigned === user.id;
    });
    return (
      <MealItem
        itemID={item.id}
        name={item.name}
        user={user}
        loggedUser={loggedUser}
      />
    );
  });

  return (
    <Card className="mealsContainer">
      {itemsArray}
      <AddButton items={items} addMeal={addMeal} />
    </Card>
  );
}
