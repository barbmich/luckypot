import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import axios from 'axios'
import AddButton from "./AddButton";
import MealItem from "./MealItem";
import MealWithRecipe from "./MealWithRecipe";
import "./MealsContainer.scss";

export default function MealsContainer(props) {
  const { items, users, currentUser } = props;

  console.log(props);
  const itemsArray = items.map((item) => {
    const user = users.find((user) => {
      return item.assigned_id === user.id;
    });
    return (
      <MealItem
        itemID={item.id}
        name={item.name}
        user={user}
        currentUser={currentUser}
      />
    );
  });

  return <Card className="mealsContainer">{itemsArray}
            <AddButton items={items}/>
         </Card>;
}
