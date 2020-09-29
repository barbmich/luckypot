import React from "react";
import "./MealItem.scss"
import { Card, Button } from "react-bootstrap";

export default function MealChosenNoRecipe(props) {
  return (
<Card className="meal-unchosen" >
  <Card.Body>
    <Card.Link href="#">✔️ You have chosen <strong>Jalapeños</strong></Card.Link>
    <Button className="recipeBtn" variant="primary">Search Our Recipes</Button>
  </Card.Body>
</Card>
  );
}