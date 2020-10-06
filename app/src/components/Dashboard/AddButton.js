import React from "react";
import "./AddButton.scss";
import { Card, Accordion, Button } from "react-bootstrap";
import MealForm from "./MealForm";

// const classNames = require("classnames");

export default function AddButton(props) {
  const { items, addMeal } = props;

  return (
    <Accordion defaultActiveKey="0" style={
      {display: "flex",
      flexDirection: "column"}}>
          <Accordion.Toggle as={Button} variant="text" eventKey="1">
            <button className="button-add">+{props.children}</button>
          </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <MealForm items={items} addMeal={addMeal} />
          </Card.Body>
        </Accordion.Collapse>
    </Accordion>
  );
}
