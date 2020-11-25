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
  const location = useLocation();
  const searchItem = location.state ? location.state.searchItem : null;
  const [searchInput, setSearchInput] = useState(searchItem || "");
  const [searchResults, setSearchResults] = useState(null);
  const [error, setError] = useState("");
  // Event Id from location if coming from dashboard
  const eventInfo = location.state;

  const getSearchResults = () => {
    console.log("SEARCHED: ", searchInput); //Valid here
    axios
      .get(`/recipes/search/${searchInput}`)
      .then((result) => {
        console.log(result.data.results);
        if (result.data.results.length === 0) {
          setError("No results found.");
        } else {
          setSearchResults(result.data.results);
        }
      })
      .catch((err) => console.log("Error on Recipe Search Response:", err));
  };

  const searchCards =
    searchResults &&
    searchResults.map((result, i) => {
      return (
        <ul key={i}>
          <Card className="searchedMealSingle">
            <Card.Title className="mealTitle">
              {result && result.title.length > 30
                ? result.title.slice(0, 30) + "..."
                : result.title}
            </Card.Title>
            <Card.Body>
              <Figure.Image
                className="recipePic"
                src={result.image}
                style={{ maxHeight: "150px" }}
              />
              <br />
              <Link to={{ pathname: `/recipe/${result.id}`, state: eventInfo }}>
                <Button variant="primary">View Full Recipe</Button>
              </Link>
            </Card.Body>
          </Card>
        </ul>
      );
    });

  return (
    <div>
      <div className="search-recipe-div">
        <h1 className="pageTitle">Delicious Recipes Live Here</h1>
        {error && <p>{error}</p>}
        <Form>
          <div style={{ display: "flex", alignItems: "center" }}>
            <FormControl
              style={{ marginRight: "1em" }}
              onChange={(event) => setSearchInput(event.target.value)}
              onKeyDown={(e) => {
                if (e && e.keyCode == 13) {
                  e.preventDefault();
                  getSearchResults();
                }
              }}
              type="text"
              placeholder="Search Recipes"
              className="mr-sm-2"
              value={searchInput}
            />
            <Button variant="outline-primary" onClick={getSearchResults}>
              Search
            </Button>
          </div>
        </Form>
      </div>
      <div className="searchResults">{searchCards}</div>
    </div>
  );
}
