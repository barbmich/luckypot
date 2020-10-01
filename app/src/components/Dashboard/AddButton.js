import React from "react";
import "./AddButton.scss";
import { Card, Accordion, Button } from "react-bootstrap";
import MealForm from "./MealForm";

// const classNames = require("classnames");

export default function AddButton(props) {
  const { items, addMeal } = props;

  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="text" eventKey="1">
            <button className="button-add" onClick={props.onClick}>
              +{props.children}
            </button>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <MealForm items={items} addMeal={addMeal} />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}
