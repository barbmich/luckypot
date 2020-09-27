const express = require('express');
const router  = express.Router();

//returns all user information
module.exports = (db) => {
  router.post("/login", (req, res) => {
    const values = [];
    for (key in req.body) {
      values.push(req.body[key])
    };
    db.query(`SELECT * FROM users
    WHERE email = $1 AND password = $2;`, values)
      .then(data => {
        const userId = data.rows[0].id;
        db.query(`
        SELECT * FROM events
        WHERE owner_id = $1
        `, [userId])
        .then(data => {
          events = data.rows;
          res.json(events)
        })
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
    console.log(values)
    db.query(
      `
      INSERT INTO users (first_name, last_name, email, password)
      VALUES ($1, $2, $3, $4) RETURNING *;
      `, values)
      .then(data => {
        const users = data.rows;
        res.json({ users });
      })
      .catch(err => {
        res
          .status(500)
          .send('not working')
          // .json({ error: err.message });
        });
  });

  router.get("/signup", (req, res) => {
    const values = [];
    for (key in req.body) {
      values.push(req.body[key])
    };
    console.log(values)
    db.query(
      `
      INSERT INTO users (first_name, last_name, email, password)
      VALUES ($1, $2, $3, $4) RETURNING *;
      `, values)
      .then(data => {
        const users = data.rows;
        res.json({ users });
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