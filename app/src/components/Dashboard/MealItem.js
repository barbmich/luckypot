import React, { useState } from "react";
import "./MealItem.scss";
import { Card, Button } from "react-bootstrap";

export default function MealItem(props) {
  const { name, userAvatar } = props;
  // const [userAssigned, setUserAssigned] = useState(assigned || null);

  // function reset() {
  //   setUserAssigned(null);
  // }

  return (
    <Card className="meal-unchosen">
      <Card.Title>{name}</Card.Title>
      <Card.Body>
        <Button>
          Click Here to bring <strong>{name}</strong>
        </Button>
        <img src={userAvatar} />
      </Card.Body>
    </Card>
  );
}
