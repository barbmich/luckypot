const express = require("express");
const router = express.Router();


// add receipe to favorites list
module.exports = (db) => {
  router.post("/favorite/add", (req, res) => {
    const values = [];
    for (key in req.body) {
      values.push(req.body[key])
    };
  
  db.query(`INSERT INTO favorites(user_id, recipe_id)
            VALUES ($1, $2) RETURNING *;
            `, values)
    .then(data => {
      const fav = data.rows[0];
      res.json({ fav })
    })
    .catch(err => {
      res
        .status(500)
        .send('not working')
    });
  
  });

  return router;
}