import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import AddButton from "./AddButton";
import MealItem from "./MealItem";
import MealWithRecipe from "./MealWithRecipe";
import "./MealsContainer.scss";

export default function MealsContainer(props) {
  const { items, users } = props;
  // const [meals, setMeals] = useState(items);
  const itemsArray = items.map((item) => {
    const user = users.find((user) => item.assigned_id === user.id);
    return <MealItem name={item.name} userAvatar={user.avatar_url} />;
  });

  return (
    <Card>
      {itemsArray}
      <AddButton />
    </Card>
  );
}
