import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MyRecipes.scss";
import { Card } from "react-bootstrap";

export default function MyRecipes(props) {
  const { loggedUser } = props;

  const [isLoading, setLoading] = useState(true);
  const [recipeList, setRecipeList] = useState([]);
  const [tastedList, setTastedList] = useState([]);

  useEffect(() => {
    Promise.all([
      Promise.resolve(
        axios.get(`http://localhost:3003/myrecipes/${loggedUser.id}`)
      ),
      Promise.resolve(
        axios.get(`http://localhost:3003/tastedrecipes/${loggedUser.id}`)
      ),
    ]).then((all) => {
      const [myRecipes, tastedRecipes] = all;
      console.log(myRecipes);
      console.log(tastedRecipes);
      setRecipeList(myRecipes.data);
      setTastedList(tastedRecipes.data);
      setLoading(false);
    });
  }, []);

  while (isLoading) {
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
