import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import Card from "react-bootstrap/Card";
import Figure from "react-bootstrap/Figure";
import "./Search.scss";
import axios from "axios";

export default function Search(props) {
  const [searchInput, setSearchInput] = useState(null);
  const [searchResults, setSearchResults] = useState(null);

  const location  = useLocation();
  console.log("LOCATION", location);
  console.log("location.pathname", location.pathname);
  console.log("location.search", location.search);
  console.log("location.state.search_item",location.state.search_item);


  const getSearchResults = (event) => {
    event.preventDefault();
    console.log("SEARCHED: ", searchInput); //Valid here
    axios
      .get(`http://localhost:3003/recipes/search/${searchInput}`)
      .then((result) => {
        setSearchResults(result.data);
      })
      .catch((err) => console.log("Error on Recipe Search Response:", err));
  };

  const searchCards =
    searchResults &&
    searchResults.results.map((result) => {
      return (
        <ul>
          <Card className="searchedMealSingle">
            <Card.Title className="mealTitle">{result.title}</Card.Title>
            <Card.Body>
              <Figure.Image className="recipePic" src={result.image} />
              <br />
              <Link to={`/recipe/${result.id}`}>
                <Button variant="primary">View Full Recipe</Button>
              </Link>
            </Card.Body>
          </Card>
        </ul>
      );
    });

  return (
    <div>
      <div className="searchForm">
        <h1 className="pageTitle">Delicious Recipes Live Here</h1>
        <Form inline>
          <FormControl
            onChange={(event) => setSearchInput(event.target.value)}
            type="text"
            placeholder="Search Recipes"
            className="mr-sm-2"
          />
          <Button variant="outline-primary" onClick={getSearchResults}>
            Search
          </Button>
        </Form>
      </div>
      <div className="searchResults">{searchCards}</div>
    </div>
  );
}
