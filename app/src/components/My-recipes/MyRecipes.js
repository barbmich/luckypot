import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./MyRecipes.scss";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

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
      // console.log("MY RECIPES");
      // console.log(myRecipes.data);
      // console.log("TASTED RECIPES");
      // console.log(tastedRecipes.data);
      setRecipeList(myRecipes.data);
      setTastedList(tastedRecipes.data);
      setLoading(false);
    });
  }, []);

  const addToFavorites = (recipe_id) => {
    const user_id = loggedUser.id;
    const input = { user_id, recipe_id };
    axios
      .post("http://localhost:3003/favorites/add", input)
      .then((response) => {
        console.log("response from server on favs post:", response);
      })
      .catch((error) => {
        console.error("ERROR HERE", error.message);
      });
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const recipeListCards = recipeList.map((recipe, i) => {
    console.log("HHHHH RECIPE :::", recipe);
    return (
      <ul key={i}>
        <Card className="meal-unchosen">
          {/* <Card.Img variant="top" src={recipe.image_url} /> */}
          <Card.Title>{recipe.name}</Card.Title>
          <Card.Body>{recipe.potluck_name}</Card.Body>

          {recipe.url && (
            <a href={recipe.url} targer="_blank">
              <Button>View Full Recipe</Button>
            </a>
          )}

          <Button
            className="favBtn"
            variant="secondary"
            onClick={() => addToFavorites(recipe.meal_id)}
          >
            <span role="img" aria-label="heart">
              🖤
            </span>
          </Button>
        </Card>
      </ul>
    );
  });

  const tastedListCards = tastedList.map((recipe, i) => {
    return (
      <ul key={i}>
        <Card className="meal-unchosen">
          <Card.Title>{recipe.name}</Card.Title>
          <Card.Body>{recipe.potluck_name}</Card.Body>
          <Card.Body>Provided by: {recipe.guest}</Card.Body>
          {recipe.url && (
            <a href={recipe.url} targer="_blank">
              <Button>View Full Recipe</Button>
            </a>
          )}
          <Button
            className="favBtn"
            variant="secondary"
            onClick={() => addToFavorites(recipe.meal_id)}
          >
            <span role="img" aria-label="heart">
              🖤
            </span>
          </Button>
        </Card>
      </ul>
    );
  });

  return (
    <div>
      <h1 className="pageTitle">My Recipes</h1>
      <div className="recipeList">
        <h3 className="listTitle">You've Brought</h3>
        <div className="eachList">{recipeListCards}</div>
        <h3 className="listTitle">You've Tasted</h3>
        <div className="eachList">{tastedListCards}</div>
      </div>
    </div>
  );
}
