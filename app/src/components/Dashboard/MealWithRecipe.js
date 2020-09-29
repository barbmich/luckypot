import React from "react";
import { Card, Button, Accordion } from "react-bootstrap";
import "./MealWithRecipe.scss"

export default function CreateForm(props) {
  return (
<Card className="entireMealWithRecipe" style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://assets.bonappetit.com/photos/5d977e513b30f40008a4785e/master/pass/Basically-Hammy-Chickpea-Soup.jpg" />
  <Card.Body className="recipeBody">
    <Card.Title>Grandmas Soup</Card.Title>
  <Accordion>
    <Card>
    <Card.Header className="descriptionTitle">
      <Accordion.Toggle className="descriptionTitle" as={Button} variant="link" eventKey="0">
        <Card.Title>Description</Card.Title>
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Text>
        This will be a recipe for a delivious meal
      </Card.Text>
    </Accordion.Collapse>
    </Card>
      <Button className="recipeBtn" variant="primary">View Full Recipe</Button>
  </Accordion>


  </Card.Body>
</Card>

  );
}

