const express = require("express");
const router = express.Router();
const request = require("request");

// returns spoonacular recipe results
module.exports = (db) => {
  router.get("/recipes/search/:searchInput", (req, res) => {
    const mealSearched = [req.params.searchInput];
    console.log("REQ.params server: ", mealSearched);
    // _RECIPES_API_URL = `https://api.spoonacular.com/recipes/complexSearch?query=${mealSearched}&number=30&sort=meta-score&addRecipeInformation=true&apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`;
    _RECIPES_API_URL = `https://api.spoonacular.com/recipes/complexSearch?query=${mealSearched}&sort=meta-score&number=30&apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`;
    request(_RECIPES_API_URL, (error, response, body) => {
      if (!error && response.statusCode == 200) {
        res.send(body);
      }
    });
  });

  router.get("/recipe/:recipe_id", (req, res) => {
    const recipe_id = [req.params.recipe_id];
    console.log("ID FROM THE BACK::", recipe_id);
    _RECIPES_API_URL = `https://api.spoonacular.com/recipes/${recipe_id}/information?includeNutrition=false&apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`;
    request(_RECIPES_API_URL, (error, response, body) => {
      if (!error && response.statusCode == 200) {
        res.send(body);
        // console.log("result of api call for RECIPE::", body);
      }
    });
  });

  // add a new custom recipe to the DB
  router.post("/recipes/add_recipe", (req, res) => {
    const values = [];
    console.log("BODY", req.body);
    for (key in req.body) {
      values.push(req.body[key]);
      console.log("KEY", key);
    }
    console.log(values);
    db.query(
      ` 
    INSERT INTO custom_recipes (user_id, category_id, name, ingredients, instructions, picture_url)
    VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;
    `,
      values
    )
      .then((data) => {
        const customRecipe = data.rows[0];
        res.json({ customRecipe });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.get("/myrecipes/:userId", (req, res) => {
    const values = [req.params.userId];
    db.query(
      `SELECT events.id AS event_id, events.name AS potluck_name, events.date, CONCAT(USERS.first_name, ' ', USERS.last_name) AS guest, items.name, items.id as meal_id
     FROM (SELECT *
     FROM guest_details
     WHERE user_id = $1) AS test
     JOIN events ON events.id = test.event_id
     JOIN items ON events.id = items.event_id
     JOIN users ON users.id = test.user_id
     `,
      values
    )
      .then((data) => {
        res.json(data.rows);
      })
      .catch((err) => {
        res.send(err);
      });
  });

  router.get("/tastedrecipes/:userId", (req, res) => {
    const values = [req.params.userId];
    db.query(
      `
      SELECT events.id AS event_id, events.name AS potluck_name, events.date, CONCAT(USERS.first_name, ' ', USERS.last_name) AS guest, items.name
      FROM guest_details
      JOIN events ON events.id = guest_details.event_id
      JOIN items ON events.id = items.event_id
      JOIN users ON users.id = guest_details.user_id
      WHERE events.id IN(SELECT event_id
      FROM guest_details
      WHERE user_id = $1);
     `,
      values
    )
      .then((data) => {
        res.json(data.rows);
      })
      .catch((err) => {
        res.send(err);
      });
  });

  return router;
};
