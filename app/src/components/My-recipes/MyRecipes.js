import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MyRecipes.scss";
import { Card } from "react-bootstrap";

export default function MyRecipes(props) {
  const [isLoading, setLoading] = useState(true);
  const [recipeList, setRecipeList] = useState(null);
  const { loggedUser } = props;

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

  const recipeListCards = recipeList.map((recipe) => {
    return (
      <ul>
        <Card className="meal-unchosen">
          <Card.Title>{recipe.name}</Card.Title>
        </Card>
      </ul>
    );
  });

  return (
    <div>
      <h1 className="pageTitle">My Recipes</h1>
      {recipeListCards}
    </div>
  );
}
