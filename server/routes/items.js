const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.put("/items/update", (req, res) => {
    const values = [];
    for (key in req.body) {
      values.push(req.body[key]);
    }
    db.query(
      `
      UPDATE items SET assigned = $2 WHERE items.id = $1 RETURNING *;
      `,
      values
    ).then((data) => {
      res.send(data.rows);
    });
  });

  router.post("/items/add", (req, res) => {
    const values = [];
    console.log(req.body);
    for (key in req.body) {
      values.push(req.body[key]);
    }
    console.log(values);
    db.query(
      `
      INSERT INTO items (event_id, category_id, name) VALUES
      ($1, $2, $3) RETURNING *;
    `,
      values
    )
      .then((data) => res.send(data.rows[0]))
      .catch((err) => console.log(err));
  });

  return router;
};

// id SERIAL PRIMARY KEY NOT NULL,
// event_id INTEGER REFERENCES events(id) ON DELETE CASCADE,
// category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE,
// name VARCHAR(255) NOT NULL,
// recipe_id INTEGER,
// assigned INTEGER DEFAULT NULL
