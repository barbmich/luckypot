import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import Card from "react-bootstrap/Card";
import Figure from "react-bootstrap/Figure";
import "./Search.scss";
import axios from "axios";
import Recipe from "../Recipe/Recipe";

export default function Search(props) {
  const { loggedUser } = props;
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  // const [isLoading, setLoading] = useState(true);
  let history = useHistory();

  const getSearchResults = (event) => {
    event.preventDefault();
    console.log("SEARCHED: ", searchInput); //Valid here
    axios
      .get(`http://localhost:3003/recipes/search/${searchInput}`)
      .then((result) => {
        setSearchResults(result.data);
        // setLoading(false);
      })
      .catch((err) => console.log("Error on Recipe Search Response:", err));
  };

  if (searchResults) {
    console.log("searchResults inside map", searchResults);
    const searchCards = searchResults.results.map((result) => {
      // if (isLoading) {
      //   return <p>Loading...</p>;
      // }
      return (
        <div>
          <ul>
            <Card className="searchedMealSingle">
              <Card.Title>{result.title}</Card.Title>
              <Card.Body>
                <Figure.Image src={result.image} />
                <Link to={`/recipe/${result.id}`}>
                  <Button variant="primary">View Full Recipe</Button>
                </Link>
              </Card.Body>
            </Card>
          </ul>
        </div>
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
  } else {
    return (
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
    );
  }
}

{
  /* results: Array(30)
0:
aggregateLikes: 1
analyzedInstructions: [{…}]
cheap: false
creditsText: "Foodista.com – The Cooking Encyclopedia Everyone Can Edit"
cuisines: []
dairyFree: true
diets: (2) ["gluten free", "dairy free"]
dishTypes: ["side dish"]
gaps: "no"
glutenFree: true
healthScore: 64
id: 657359
image: "https://spoonacular.com/recipeImages/657359-312x231.jpg"
imageType: "jpg"
license: "CC BY 3.0"
lowFodmap: false
occasions: ["thanksgiving"]
pricePerServing: 122.74
readyInMinutes: 5
servings: 2
sourceName: "Foodista"
sourceUrl: "http://www.foodista.com/recipe/DQ74XQZV/pumpkin-pie-smoothie"
spoonacularScore: 92
spoonacularSourceUrl: "https://spoonacular.com/pumpkin-pie-smoothie-657359"
summary: "You can never have too many morn meal recipes, so give Pumpkin Pie Smoothie a try. This recipe makes 2 servings with <b>147 calories</b>, <b>10g of protein</b>, and <b>3g of fat</b> each. For <b>$1.24 per serving</b>, this recipe <b>covers 14%</b> of your daily requirements of vitamins and minerals. It can be enjoyed any time, but it is especially good for <b>Thanksgiving</b>. 1 person has made this recipe and would make it again. Head to the store and pick up soy milk, ground nutmeg, cinnamon, and a few other things to make it today. From preparation to the plate, this recipe takes roughly <b>5 minutes</b>. It is a good option if you're following a <b>gluten free and dairy free</b> diet. All things considered, we decided this recipe <b>deserves a spoonacular score of 88%</b>. This score is tremendous. Try <a href="https://spoonacular.com/recipes/pumpkin-pie-protein-smoothie-928552">Pumpkin Pie Protein Smoothie</a>, <a href="https://spoonacular.com/recipes/pumpkin-pie-spiced-pumpkin-seeds-921864">Pumpkin Pie Spiced Pumpkin Seeds</a>, and <a href="https://spoonacular.com/recipes/pumpkin-pie-muffins-927055">Pumpkin Pie Muffins</a> for similar recipes."
sustainable: false
title: "Pumpkin Pie Smoothie"
vegan: false
vegetarian: false
veryHealthy: true
veryPopular: false
weightWatcherSmartPoints: 3
__proto__: Object */
}
