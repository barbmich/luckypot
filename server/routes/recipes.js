const express = require("express");
const router = express.Router();
const request = require("request");

// returns spoonacular recipe results
module.exports = (db) => {
  router.get("/recipes/search/", (req, res) => {
    console.log("POSTed server");
    const meal = req.body.searchField;
    console.log(meal);
    _RECIPES_API_URL = `https://api.spoonacular.com/recipes/complexSearch?query=${meal}&number=30&apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`;
    request(_RECIPES_API_URL, (error, response, body) => {
      if (!error && response.statusCode == 200) {
        res.send(body);
      }
    });
  });

  return router;
};
