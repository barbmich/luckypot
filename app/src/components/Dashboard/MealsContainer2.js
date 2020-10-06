import React from "react";
import { Container } from "react-bootstrap";
import AddButton from "./AddButton";
import MealItem from "./MealItem";
import "./MealsContainer.scss";
import CardTest from "./CardTest";
import axios from "axios";

export default function MealsContainer(props) {
  const { deleteItem, items, users, loggedUser, userPresent, event } = props;

  console.log("ITEMS LIST");
  console.log(items);

  const itemsArray = items.map((item, i) => {
    const user = users.find((user) => {
      return item.assigned === user.id;
    });
    return (
      <CardTest
        deleteItem={deleteItem}
        key={i}
        userPresent={userPresent}
        event={event}
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
