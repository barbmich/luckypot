import React from "react";
import "./MealItem.scss";
import { Card } from "react-bootstrap";

export default function MealItem(props) {
  const { name } = props;
  return (
    <Card className="meal-unchosen">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Link href="#">
          Click Here to bring <strong>{name}</strong>
        </Card.Link>
      </Card.Body>
    </Card>
  );
}
