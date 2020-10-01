const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get("/dashboard/events/:userId/", (req, res) => {
    const values = [parseInt(req.params.userId, 10)];
    
      db.query(`
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
      `, values)
      .then((data) => {
        console.log(data.rows);
        let events = data.rows;
        res.json(events);
      })
      .catch((err) => {
        console.log(err);
        res.send(err);
      });
  });

  router.get("/dashboard/users/:userId/", (req, res) => {
    const values = [parseInt(req.params.userId, 10)];
    db.query(`
    SELECT events.id AS event_id,
       users.id AS id,
       users.first_name AS first_name, 
       users.last_name AS first_name,events.date, 
       users.email AS email, 
       users.avatar_url AS avatar_url
       FROM guest_details
       JOIN events ON events.id = guest_details.event_id
       JOIN items ON events.id = items.event_id
       JOIN users ON users.id = guest_details.user_id
       WHERE events.id IN(SELECT event_id
       FROM guest_details
       WHERE user_id = $1);
    `, values)
    .then((data) => {
      console.log(data.rows);
      let users = data.rows;
      res.json(users);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });


  })
    


  return router;
};

  