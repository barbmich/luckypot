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
  // const [favChosen, setFavChosen] = useState(null);

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

  // Recipe is logging undefined. needs to be fixed. //

  // const addToFavorites = (recipe) => {
  //   // console.log("RECIPE ID INPUT", recipe);
  //   const user_id = loggedUser.id;
  //   const input = { user_id, recipe };
  //   // console.log("POS 1", input);
  //   axios
  //     .post("http://localhost:3003/favorites/add", input)
  //     .then((response) => {
  //       console.log("response from server on favs post:", response);
  //     })
  //     .catch((error) => {
  //       console.error("ERROR HERE", error.message);
  //     });
  // };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const recipeListCards = recipeList.map((recipe, i) => {
    console.log("HHHHH RECIPE :::", recipe.meal_id);
    return (
      <ul key={i} style={{paddingLeft:"0px"}}>
        <div className="scene">
          <Card className="meal-unchosen">
          {/* <Card.Img variant="top" src={recipe.image_url} /> */}
           <div className="face front">
             <Card.Title>{recipe.name}</Card.Title>
              {recipe.image_url && (
             <Card.Img
              style={{
                height:"120px",
                objectFit:"cover",
          
              }}
              variant="top"
              src={recipe.image_url}
              />
              )}
          
          </div>
          <div className="face back">
            <Card.Title>{recipe.potluck_name}</Card.Title>

            {recipe.url && (
             <a href={recipe.url} target="_blank" >
                <Button>View Full Recipe</Button>
              </a>
            )}

            <Button
             className="favBtn"
              variant="secondary"
            // onClick={() => addToFavorites(recipe.meal_id)}
            >
              <span role="img" aria-label="heart">
                🖤
              </span>
            </Button>
          </div>
        </Card>
        </div>
      </ul>
    );
  });

  const tastedListCards = tastedList.map((recipe, i) => {
    return (
      <ul key={i} style={{paddingLeft:"0px"}}>
        <div className="scene">
          <Card className="meal-unchosen">
            <div className="face front">
              <Card.Title>{recipe.name}</Card.Title>
            </div>
            <div className="face back">
                <Card.Title>{recipe.potluck_name}</Card.Title>
                <Card.Title style={{fontSize:"1rem"}}> 
                  Provided by :{recipe.guest}
                </Card.Title>
                {/* <Card.Body>Provided by: {recipe.guest} */}
              {recipe.url && (
              <a href={recipe.url} target="_blank">
                <Button>View Full Recipe</Button>
              </a>
             )}
              <Button
                className="favBtn"
                variant="secondary"
            // onClick={() => addToFavorites(recipe.meal_id)}
            >
              <span role="img" aria-label="heart">
                🖤
              </span>
             </Button>
             {/* </Card.Body> */}
            </div>
          </Card>
        </div>
      </ul>
    );
  });

  return (
    <div>
      <h1 className="pageTitle">My Recipes</h1>
      <div className="recipeList">
        {/* <h3 className="listTitle">You've Brought</h3> */}
        <h3 className="listTitle">You've Tasted</h3>
        <div className="eachList">{recipeListCards}</div>
        {/* <div className="eachList">{tastedListCards}</div> */}
      </div>
    </div>
  );
}
