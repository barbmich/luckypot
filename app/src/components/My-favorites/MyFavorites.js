import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MyFavorites.scss";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function MyFavorites(props) {
  const { loggedUser } = props;
  const [isLoading, setLoading] = useState(true);
  const [favoritesList, setFavoritesList] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3003/favorites/${loggedUser.id}`)
      .then((result) => {
        console.log("this is result:", result.data);
        setFavoritesList(result.data);
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const favoriteCards = favoritesList.map((recipe) => {
    console.log("RECIPE!!", recipe);
    return (
      <ul>
        <Card className="meal-unchosen">
          <Card.Title>{recipe.recipe_name}</Card.Title>
          <Card.Img
            className="recipePic"
            variant="top"
            src={recipe.picture_url}
          />
          <Card.Body>{recipe.event_name}</Card.Body>
          <Button variant="secondary">View Full Recipe</Button>
        </Card>
      </ul>
    );
  });

  return (
    <div>
      <h1 className="pageTitle">My Favorites</h1>
      <div className="recipeList">
        <div className="favContainer">{favoriteCards}</div>
      </div>
    </div>
  );
}
