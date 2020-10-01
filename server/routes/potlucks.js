const express = require("express");
const router = express.Router();

// gets potlucks list
module.exports = (db) => {
  router.get("/mypotlucks/:userId", (req, res) => {
    const values = [req.params.userId];
    console.log(values);
    db.query(
      `
      SELECT DISTINCT events.id AS id,
      events.owner_id AS owner_id,
      events.name AS event_name, 
      events.date AS date, 
      events.address AS address,
      events.post_code AS post_code,
      events.city AS city,
      events.province AS province
      FROM guest_details
      JOIN events ON events.id = guest_details.event_id
      JOIN items ON events.id = items.event_id
      JOIN users ON users.id = guest_details.user_id
      WHERE events.id IN(SELECT event_id
      FROM guest_details
      WHERE user_id = $1);
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

  return router;
};
