import React from "react";
import { Link } from "react-router-dom";
import "./MealItem.scss";
import { Card, Button } from "react-bootstrap";

export default function MealChosenNoRecipe(props) {
  const { item } = props;
  // function searchRecipe(meal) {
  //   console.log("searching", meal);
  // }

  return (
    <Card className="meal-unchosen">
      <Card.Body>
        <span aria-label={"checkmark"} role={"img"}>
          ✔️
        </span>{" "}
        You have chosen <strong>{item && item.name}</strong>
        <Link to={{
                  pathname:"/search",
                  state: {search_item:item}
                  }}>
          <Button className="recipeBtn" variant="primary">
            Search among our recipes
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
