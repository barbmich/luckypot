import React, { useEffect } from "react";

export default function MyFavorites(props) {
  const { loggedUser } = props;

  const [isLoading, setLoading] = useState(true);
  const [recipeList, setRecipeList] = useState([]);
  const [tastedList, setTastedList] = useState([]);

  useEffect(() => {

  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const recipeListCards = recipeList.map((recipe) => {
    return (
      <ul>
        <Card className="meal-unchosen">
          <Card.Title>{recipe.name}</Card.Title>
          <Card.Body>{recipe.potluck_name}</Card.Body>
        </Card>
      </ul>
    );
  });

  const tastedListCards = tastedList.map((recipe) => {
    return (
      <ul>
        <Card className="meal-unchosen">
          <Card.Title>{recipe.name}</Card.Title>
          <Card.Body>{recipe.potluck_name}</Card.Body>
          <Card.Body>Provided by: {recipe.guest}</Card.Body>
        </Card>
      </ul>
    );
  });

  return (
    <div>
      <h1 className="pageTitle">My Recipes</h1>
      <div className="recipeList">
        <div>
          <h3 className="listTitle">You've Brought</h3>
          {recipeListCards}
        </div>
        <div>
          <h3 className="listTitle">You've Tasted</h3>
          {tastedListCards}
        </div>
      </div>
    </div>
  );




}
