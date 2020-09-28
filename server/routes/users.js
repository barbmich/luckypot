const express = require("express");
const router = express.Router();

//returns all user information
module.exports = (db) => {
  router.post("/login", (req, res) => {
    const values = [];
    for (key in req.body) {
      values.push(req.body[key]);
    }
    db.query(
      `SELECT id, first_name, last_name, email, avatar_url 
              FROM users
              WHERE email = $1 AND password = $2;
              `,
      values
    )
      .then((data) => {
        user = data.rows[0];
        res.json({ user });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.post("/signup", (req, res) => {
    const values = [];
    for (key in req.body) {
      values.push(req.body[key]);
    }
    const validationByEmail = [req.body.email];
    db.query(
      `
    SELECT * FROM users WHERE email=$1;
    `,
      validationByEmail
    )
      .then((data) => {
        if (data.rows.length > 0) {
          res.send("a user with this email already exists");
        } else {
          db.query(
            `INSERT INTO users (first_name, last_name, email, password)
                  VALUES ($1, $2, $3, $4)
                  RETURNING *;
                  `,
            values
          )
            .then((data) => {
              const user = data.rows[0];
              res.json({ user });
            })
            .catch((err) => {
              res.status(500).send("insert not working");
            });
        }
      })
      .catch((err) => {
        res.status(500).send("not working");
      });
  });

  return router;
};
