import React from "react";
import { Link } from "react-router-dom";
import "./MealItem.scss";
import { Card, Button } from "react-bootstrap";

export default function MealChosenNoRecipe(props) {
  const { item, userAssigned } = props;

  return (
    <div className="meal-chosen">
  {item.url &&  
    (<a href={item.url} target="_blank">
      <Button className="recipeBtn" variant="primary">
          View Recipe
      </Button>
    </a>)}
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
        {!item.url ? "Search recipes" : "Switch recipe"}
        </Button>
      </Link>
    </div>
  );
}
