const express = require("express");
const router = express.Router();

// add receipe to favorites list
module.exports = (db) => {
  router.post("/favorites/add", (req, res) => {
    const values = [];
    for (key in req.body) {
      values.push(req.body[key]);
    }
    console.log("values aarray FROM BACK::", values);

    db.query(
      `INSERT INTO favorites(user_id, recipe_id)
            VALUES ($1, $2) RETURNING *;
            `,
      values
    )
      .then((data) => {
        const fav = data.rows[0];
        console.log("Made it!, res.json:::", fav);
        res.json({ fav });
      })
      .catch((err) => {
        res.status(500).send("not working");
        console.log("err FROM BACK", err);
      });
  });

  router.get("/favorites/:userId", (req, res) => {
    const values = [req.params.userId];
    db.query(
      `
      SELECT favorites.user_id as user_id, favorites.recipe_id AS recipe_id, custom_recipes.name AS recipe_name, event_id, events.name AS event_name, custom_recipes.picture_url AS picture_url
      FROM favorites
      JOIN items ON favorites.recipe_id = items.recipe_id
      JOIN custom_recipes ON favorites.recipe_id = custom_recipes.id
      JOIN events ON events.id = items.event_id
      WHERE favorites.user_id = $1;
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
