const express = require("express");
const router = express.Router();

// gets potlucks list
module.exports = (db) => {
  router.get("/mypotlucks/:userId", (req, res) => {
    const values = [req.params.userId];
    console.log(values);
    db.query(
      `
      SELECT * FROM events JOIN users ON events.owner_id = users.id WHERE users.id = $1;
      `,
      values
    )
      .then((data) => {
        console.log(data.rows);
        res.json(data.rows);
      })
      .catch((err) => {
        console.log(err);
        res.send(err);
      });
    // })
  });

  router.post("/favorites/add", (req, res) => {
    const values = [];
    for (key in req.body) {
      values.push(req.body[key]);
    }

    db.query(
      `INSERT INTO favorites(user_id, recipe_id)
            VALUES ($1, $2) RETURNING *;
            `,
      values
    )
      .then((data) => {
        const fav = data.rows[0];
        res.json({ fav });
      })
      .catch((err) => {
        res.status(500).send("not working");
      });
  });

  return router;
};
