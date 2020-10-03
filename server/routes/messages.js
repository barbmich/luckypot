const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.post("/messages/add", (req, res) => {
    const values = [];
    for (key in req.body) {
      values.push(req.body[key]);
    }
    console.log("VALUES", values);
    db.query(
      `
      INSERT INTO event_messages (event_id, user_id, message) VALUES
      ($1, $2, $3) RETURNING *;
    `,
      values
    )
      .then((data) => {
        console.log(data.rows[0]);
        res.send(data.rows[0]);
      })
      .catch((err) => console.log(err));
  });

  return router;
};
