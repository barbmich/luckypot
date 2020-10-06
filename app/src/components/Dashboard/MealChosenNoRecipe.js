import React from "react";
import { Link } from "react-router-dom";
import "./MealItem.scss";
import { Card, Button } from "react-bootstrap";

export default function MealChosenNoRecipe(props) {
  const { item, userAssigned } = props;

  const recipeBtn = {
    marginTop:"5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "20px",
    width:"12rem"
  }

  return (
    <div className="meal-chosen">
  {item.url &&  
    (<a href={item.url} target="_blank">
      <Button variant="primary" style={recipeBtn}>
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
        <Button  style={recipeBtn} variant="primary">
        {!item.url ? "Search Recipes" : "Switch Recipe"}
        </Button>
      </Link>
    </div>
  );
}


