const express = require('express');
const router  = express.Router();

//returns all user information
module.exports = (db) => {
  router.post("/login", (req, res) => {
    const values = [];
    for (key in req.body) {
      values.push(req.body[key])
    };
    db.query(`SELECT id, first_name, last_name, email, avatar_url 
              FROM users
              WHERE email = $1 AND password = $2;
              `, values)
      .then(data => {
        user = data.rows[0];
        console.log(user);
         res.json({ user });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
        });
  });

  router.post("/signup", (req, res) => {
    const values = [];
    for (key in req.body) {
      values.push(req.body[key])
    };
    console.log(values);
    db.query(`INSERT INTO users (first_name, last_name, email, password)
              VALUES ($1, $2, $3, $4) 
              RETURNING *;
              `, values)
      .then(data => {
        const user = data.rows[0];
        res.json({ user });
      })
      .catch(err => {
        res
          .status(500)
          .send('not working')
          // .json({ error: err.message });
        });
  });

  // router.get)("/")

  return router;
};