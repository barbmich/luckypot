import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

export default function Recipe(props) {
  const { recipe_id } = useParams();
  const [recipeDetails, setRecipeDetails] = useState("");
  const [isLoading, setLoading] = useState(true);

  const getRecipeDetails = (recipe_id) => {
    axios.get(`http://localhost:3003/recipe/${recipe_id}`).then((result) => {
      setRecipeDetails(result.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    getRecipeDetails(recipe_id);
  }, []);

  console.log("RECIPE DETAILS::", recipeDetails);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  // const stringToHTML = function (str) {
  //   const parser = new DOMParser();
  //   const doc = parser.parseFromString(str, "text/html");
  //   console.log("DOC, ", typeof doc);
  //   console.log("HHHHHHHHHHHHH:", typeof doc.body);
  //   return doc.body;
  // };
  // const summary = stringToHTML(recipeDetails.summary);
  // console.log("SUMMARY", summary);

  return (
    <div>
      <h1 className="pageTitle">Recipe Details</h1>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
          <Card.Title>{recipeDetails.id}</Card.Title>
          {/* <Card.Text>{summary}</Card.Text> */}
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Cras justo odio</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Bring to Potluck??</Card.Link>
          <Card.Link href={`${recipeDetails.spoonacularSourceUrl}`}>
            Recipe Source
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}
