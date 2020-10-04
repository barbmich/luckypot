import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import "./Recipe.scss";

export default function Recipe(props) {
  const { loggedUser } = props;
  const { recipe_id } = useParams();
  const [recipe, setRecipe] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [myPotlucksList, setMyPotlucksList] = useState([]);

  const getRecipeDetails = (recipe_id) => {
    axios.get(`http://localhost:3003/recipe/${recipe_id}`).then((result) => {
      setRecipe(result.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3003/mypotlucks/${loggedUser.id}`)
      .then((result) => {
        setMyPotlucksList(result.data);
        // setLoading(false);
      });

    getRecipeDetails(recipe_id);
  }, []);

  console.log("potluck list from Recipe", myPotlucksList);
  console.log("logged user form Recipe.js", loggedUser);
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
    return <li>{each.name}</li>;
  });
  console.log("potluck list:", myPotlucksList);
  const potlucks = myPotlucksList.map((each) => {
    return (
      <div>
        <Link to={`/dashboard/${each.id}`}>
          <Dropdown.Item eventKey="1">{each.event_name}</Dropdown.Item>
        </Link>
        <Dropdown.Divider />
      </div>
    );
  });

  return (
    <div>
      <h1 className="pageTitle">{recipe.title}</h1>
      <div className="recipeCard">
        <div className="mb-2">
          <DropdownButton
            // as={ButtonGroup}
            key={"right"}
            id={`dropdown-button-drop-right`}
            drop={"right"}
            variant="secondary"
            title={` Bring to Potluck `}
          >
            {potlucks}
          </DropdownButton>
        </div>
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
            <Card.Link target="_blank" href={`${recipe.sourceUrl}`}>
              Recipe Source
            </Card.Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
