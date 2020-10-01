import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MyRecipes.scss";
import { Card } from "react-bootstrap";

export default function MyRecipes(props) {
  const [isLoading, setLoading] = useState(true);
  const [recipeList, setRecipeList] = useState(null);
  const [tastedList, setTastedList] = useState(null);
  const { loggedUser } = props;

  useEffect(async () => {
    const result = await axios.get(
      `http://localhost:3003/myrecipes/${loggedUser.id}`
    );
    setRecipeList(result.data);
    const resultB = await axios.get(
      `http://localhost:3003/tastedrecipes/${loggedUser.id}`
    );
    setTastedList(resultB.data);
    setLoading(false);
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const recipeListCards = recipeList.map((recipe) => {
    return (
      <ul>
        <Card className="meal-unchosen">
          <Card.Title>{recipe.name}</Card.Title>
          <Card.Body>{recipe.potluck_name}</Card.Body>
        </Card>
      </ul>
    );
  });

  const tastedListCards = tastedList.map((recipe) => {
    return (
      <ul>
        <Card className="meal-unchosen">
          <Card.Title>{recipe.name}</Card.Title>
          <Card.Body>{recipe.potluck_name}</Card.Body>
          <Card.Body>Provided by: {recipe.guest}</Card.Body>
        </Card>
      </ul>
    );
  });

  return (
    <div>
      <h1 className="pageTitle">My Recipes</h1>
      <div className="recipeList">
        <div>
          <h3 className="listTitle">You've Brought</h3>
          {recipeListCards}
        </div>
        <div>
          <h3 className="listTitle">You've Tasted</h3>
          {tastedListCards}
        </div>
      </div>
    </div>
  );
}
