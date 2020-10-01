import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MyRecipes.scss";
import { Card } from "react-bootstrap";
import MealItem from "../Dashboard/MealItem";

export default function MyRecipes(props) {
  const [isLoading, setLoading] = useState(true);
  const [recipeList, setRecipeList] = useState(null);
  const { loggedUser } = props;

  console.log("LOGGED USER FROM RECIPES:: ", loggedUser.id);

  useEffect(() => {
    axios
      .get(`http://localhost:3003/myrecipes/${loggedUser.id}`)
      .then((result) => {
        setRecipeList(result.data);
        setLoading(false);
      })
      .catch((err) => console.log("Error 123", err));
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  console.log("RECIPE LIST:", recipeList[0]);

  // const recipeListCards = recipeList.map((recipe) => {
  //   return (
  //     <Card className="meal-unchosen">
  //       <Card.Title>{recipe.name}</Card.Title>
  //     </Card>
  //   );
  // });

  const recipeListCards = recipeList.map((recipe) => {
    return (
      <ul>
        {/* <MealItem name={recipe.name} /> */}
        <Card className="meal-unchosen">
          <Card.Title>{recipe.name}</Card.Title>
        </Card>
      </ul>
    );
  });

  return (
    <div>
      <h1 className="pageTitle">My Recipes</h1>
      {/* <ul>{recipeListCards}</ul> */}
      {recipeListCards}
    </div>
  );
}

// SELECT events.id AS event_id, events.name, events.date, CONCAT(USERS.first_name, ' ', USERS.last_name) AS guest, items.name
// FROM (SELECT *
// FROM guest_details
// WHERE user_id = 2) AS test
// JOIN events ON events.id = test.event_id
// JOIN items ON events.id = items.event_id
// JOIN users ON users.id = test.user_id;

// SELECT events.id AS event_id, events.name, events.date, CONCAT(USERS.first_name, ' ', USERS.last_name) AS guest, items.name
// FROM guest_details
// JOIN events ON events.id = guest_details.event_id
// JOIN items ON events.id = items.event_id
// JOIN users ON users.id = guest_details.user_id
// WHERE events.id IN(SELECT event_id
// FROM guest_details
// WHERE user_id = 2);
