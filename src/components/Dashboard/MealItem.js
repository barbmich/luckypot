import React from "react";
import "./MealItem.scss"
import { Card } from "react-bootstrap";

export default function MealItem(props) {
  return (
<Card className="meal-unchosen" >
  <Card.Body>
    <Card.Title>Salad</Card.Title>
    <Card.Link href="#">Click Here to to bring <strong>Salad</strong></Card.Link>
  </Card.Body>
</Card>
  );
}