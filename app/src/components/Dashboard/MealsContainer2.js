import React from "react";
import { Container } from "react-bootstrap";
import "./MealsContainer.scss";
import CardTest from "./CardTest";

export default function MealsContainer(props) {
  const { items, users, loggedUser, userPresent, event } = props;

  console.log("ITEMS LIST");
  console.log(items);

  const itemsArray = items.map((item, i) => {
    const user = users.find((user) => {
      return item.assigned === user.id;
    });
    return (
      <CardTest
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

  return <Container className="mealsContainer">{itemsArray}</Container>;
}
