import React from "react";
import { Link } from "react-router-dom";
import "./MealItem.scss";
import { Card, Button } from "react-bootstrap";

export default function MealChosenNoRecipe(props) {
  const { item } = props;

  return (
    <div className="meal-chosen">
      {/* <span aria-label={"checkmark"} role={"img"}>
          ✔️
        </span>{" "}
        You have chosen <strong>{item && item.name}</strong> */}
      <Link
        to={{
          pathname: "/search",
          state: item
            ? {
                searchItem: item.name,
                itemId: item.id,
                eventId: item.event_id,
              }
            : null,
        }}
      >
        <Button className="recipeBtn" variant="primary">
          Search recipes
        </Button>
      </Link>
    </div>
  );
}
