const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get("/dashboard/events/:event_id/", (req, res) => {
    const values = [parseInt(req.params.event_id, 10)];
    db.query(
      `
      SELECT DISTINCT 
      events.id AS id,
      events.owner_id AS owner_id,
      events.name AS name, 
      events.date AS date, 
      events.address AS address,
      events.post_code AS post_code,
      events.city AS city,
      events.province AS province
      FROM events
      WHERE id = $1;
      `,
      values
    )
      .then((data) => {
        console.log(data.rows);
        let event = data.rows;
        res.json(event);
      })
      .catch((err) => {
        console.log(err);
        res.send(err);
      });
  });

  router.get("/dashboard/guests/:event_id/", (req, res) => {
    const values = [parseInt(req.params.event_id, 10)];
    db.query(
      `
      SELECT DISTINCT 
       users.id AS id,
       users.first_name AS first_name, 
       users.last_name AS last_name,
       users.email AS email, 
       users.avatar_url AS avatar_url,
       guest_details.present AS present
       FROM guest_details
       JOIN events ON events.id = guest_details.event_id
       JOIN items ON events.id = items.event_id
       JOIN users ON users.id = guest_details.user_id
       WHERE events.id IN(SELECT event_id
       FROM guest_details
       WHERE events.id = $1);
    `,
      values
    )
      .then((data) => {
        const guests = data.rows;
        console.log(data.rows);
        res.json(guests);
      })
      .catch((err) => {
        console.log(err);
        res.send(err);
      });
  });

  router.get("/dashboard/items/:event_id", (req, res) => {
    const values = [parseInt(req.params.event_id, 10)];
    db.query(
      `
      SELECT 
      ITEMS.*
      FROM ITEMS
      JOIN CATEGORIES ON ITEMS.category_id = CATEGORIES.id
      JOIN GUEST_ITEMS ON ITEMS.id = GUEST_ITEMS.item_id
      JOIN USERS ON USERS.id = GUEST_ITEMS.guest_id
      WHERE ITEMS.event_id = $1;
      `,
      values
    )
      .then((data) => {
        const items = data.rows;
        console.log(data.rows);
        res.json(items);
      })
      .catch((err) => {
        console.log(err);
        res.send(err);
      });
  });

  router.get("/dashboard/messages/:event_id", (req, res) => {
    const values = [parseInt(req.params.event_id, 10)];
    db.query(
      `
          SELECT 
          id, 
          event_id, 
          user_id, 
          message, 
          date AS timestamp 
          FROM event_messages
          WHERE event_id = $1;
          `,
      values
    )
      .then((data) => {
        const event_messages = data.rows;
        console.log(data.rows);
        res.json(event_messages);
      })
      .catch((err) => {
        console.log(err);
        res.send(err);
      });
  });
  // .catch((err) => {
  //   console.log(err);
  //   res.send(err);
  // });
  // });

  return router;
};
