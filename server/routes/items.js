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
    )
      .then((data) => {
        res.send(data.rows);
      })
      .catch((err) => console.log(err));
  });

  router.post("/items/add", (req, res) => {
    const values = [];
    // console.log("Items", req.body);
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
      .then((data) => {
        console.log("ITEM ADDED:");
        console.log(data.rows[0]);
        res.send(data.rows[0]);
      })
      .catch((err) => console.log(err));
  });

  router.put("/items/update_meal", (req, res) => {
    const values = [];
    for (key in req.body) {
      values.push(req.body[key]);
    }
    console.log("UPDATE MEAL ~~~~~");
    console.log(values);
    db.query(
      `
        UPDATE items 
        SET name = $1,
            recipe_id = $2,
            url = $3,
            image_url =$4
        WHERE id = $5
        RETURNING *;
        `,
      values
    )
      .then((data) => {
        console.log("UPDATE MEAL DATA ~~~~~");
        console.log(data.rows);
        res.send(data.rows);
      })
      .catch((err) => console.log(err));
  });

  router.post("/items/add_search", (req, res) => {
    const values = [];
    console.log(req.body);
    for (key in req.body) {
      values.push(req.body[key]);
    }
    console.log("ADD FROM SEARCH~~~~~");
    console.log(values);
    db.query(
      `
          INSERT INTO items (event_id, category_id, name, recipe_id, assigned, image_url, url) VALUES
          ($1, $2, $3, $4, $5, $6, $7) RETURNING *;
        `,
      values
    )
      .then((data) => {
        console.log("ITEM ADDED AND USER ASSIGNED!:");
        console.log(data.rows[0]);
        res.send(data.rows[0]);
      })
      .catch((err) => console.log(err));
  });

  router.delete("/items/remove/:id", (req, res) => {
    console.log(req.params);
    values = [req.params.id];
    console.log(values);
    db.query(
      `
      DELETE FROM items WHERE items.id = $1 RETURNING *;
      `,
      values
    )
      .then((data) => {
        console.log(`ITEM DELETED:`);
        console.log(data.rows[0]);
        if (req.params.id == data.rows[0].id) {
          res.send(data.rows[0]);
        } else {
          console.log("something broke");
        }
      })
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
