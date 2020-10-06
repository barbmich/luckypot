import React, { useState, useEffect } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import axios from "axios";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import "./Recipe.scss";

export default function Recipe(props) {
  const location = useLocation();
  const { loggedUser } = props;
  const { recipe_id } = useParams();
  const [recipe, setRecipe] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [myPotlucksList, setMyPotlucksList] = useState([]);

  // Get event id from location
  const eventId = location.state ? location.state.eventId : null;
  // Get itemId that is going to be updated if user is coming from dashboard
  const itemId = location.state ? location.state.itemId : null;

  function getRecipeDetails() {
    axios.get(`http://localhost:3003/recipe/${recipe_id}`).then((result) => {
      setRecipe(result.data);
      setLoading(false);
    });
  }
  console.log("RECIPE: ", recipe);
  useEffect(() => {
    axios
      .get(`http://localhost:3003/mypotlucks/${loggedUser.id}`)
      .then((result) => {
        // console.log("USE EFFECT", result.data);
        const potlucksList = result.data;
        // Filter for specific event if coming from dashboard
        if (eventId) {
          const potluck = potlucksList.find((each) => each.id === eventId);
          return setMyPotlucksList([potluck]);
        } else {
          return setMyPotlucksList(potlucksList);
        }
      })
      .then(() => getRecipeDetails(recipe_id));
  }, []);

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

  const ingredients = recipe.extendedIngredients.map((each, i) => {
    return <li key={i}>{each.name}</li>;
  });

  // console.log("potluck list:", myPotlucksList);

  const potlucks = myPotlucksList.map((each, i) => {
    return (
      <div key={i}>
        <Dropdown.Item eventKey="1">
          <Link
            to={`/dashboard/${each.unique_key}/`}
            onClick={() => {
              addMeal(each.id, recipe.title);
            }}
          >
            {each.event_name}
          </Link>
        </Dropdown.Item>
      </div>
    );
  });

  function addMeal(event_id, recipe_name) {
    if (eventId && itemId) {
      const input = {
        name: recipe_name,
        recipe_id: recipe.id,
        url: recipe.sourceUrl,
        image_url: recipe.image,
        id: itemId,
      };
      console.log("IF INPUT ~~~~");
      console.log(input);
      axios
        .put("http://localhost:3003/items/update_meal", input)
        .then((response) => {
          // console.log("IF RESPONSE ~~~~");
          console.log("Result of Put:::", response.data);
        });
    } else {
      const input = {
        event_id: event_id,
        category_id: 1,
        name: recipe_name,
        recipe_id: recipe.id,
        assigned: loggedUser.id,
        image_url: recipe.image,
        url: recipe.sourceUrl,
      };
      // console.log("ELSE INPUT~~~~");
      // console.log(input);
      axios
        .post("http://localhost:3003/items/add_search", input)
        .then((response) => {
          // console.log("ELSE RESPONSE~~~~");
          // console.log(response.data);
        });
    }
  }

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
            <div dangerouslySetInnerHTML={createMarkup(recipe.summary)} />
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
            <Card.Link target="_blank" href={`${recipe.sourceUrl}`}>
              Recipe Source
            </Card.Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
