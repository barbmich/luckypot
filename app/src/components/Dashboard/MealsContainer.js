import React from "react";
// import { Card } from "react-bootstrap/card";
import Container from "react-bootstrap/container";
import AddButton from "./AddButton";
import MealItem from "./MealItem";
import "./MealsContainer.scss";

export default function MealsContainer(props) {
  const { items, users, loggedUser, addMeal, userPresent } = props;

  const itemsArray = items.map((item, i) => {
    const user = users.find((user) => {
      return item.assigned === user.id;
    });
    return (
      <MealItem
        key={i}
        userPresent={userPresent}
        item={item}
        name={item.name}
        user={user}
        users={users}
        loggedUser={loggedUser}
      />
    );
  });

  return (
    <Container className="mealsContainer">
      {itemsArray}
      {/* <AddButton items={items} addMeal={addMeal} /> */}
    </Container>
  );
}
