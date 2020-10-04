import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import "./Recipe.scss";

export default function Recipe(props) {
  const { recipe_id } = useParams();
  const [recipe, setRecipe] = useState("");
  const [isLoading, setLoading] = useState(true);

  const getRecipeDetails = (recipe_id) => {
    axios.get(`http://localhost:3003/recipe/${recipe_id}`).then((result) => {
      setRecipe(result.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    getRecipeDetails(recipe_id);
  }, []);

  console.log("RECIPE DETAILS::", recipe);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  // Api returns html format in a string //
  // This function converts into proper HTMl with the help of dangerouslySetInnerHTML https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml//
  function createMarkup(stringHTML) {
    const placeholder = document.createElement("div");
    placeholder.insertAdjacentHTML("afterbegin", stringHTML);
    // const summary = placeholder.firstElementChild;
    return { __html: stringHTML };
  }

  const ingredients = recipe.extendedIngredients.map((each) => {
    return <ul>{each.name}</ul>;
  });

  return (
    <div>
      <h1 className="pageTitle">{recipe.title}</h1>
      <div className="recipeCard">
        <Card>
          <Card.Img variant="top" src={recipe.image} />
          <Card.Body>
            <Card.Title>{recipe.title}</Card.Title>
            <Card.Text>
              <div dangerouslySetInnerHTML={createMarkup(recipe.summary)} />
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
              Ingredients
              <ul>{ingredients}</ul>
            </ListGroupItem>
            <ListGroupItem>
              Directions
              <div
                dangerouslySetInnerHTML={createMarkup(recipe.instructions)}
              />
            </ListGroupItem>
            <ListGroupItem>
              Ready in {recipe.readyInMinutes} minutes
              <br />
              Servings: {recipe.servings}
            </ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Bring to Potluck??</Card.Link>
            <Card.Link href={`${recipe.spoonacularSourceUrl}`}>
              Recipe Source
            </Card.Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
