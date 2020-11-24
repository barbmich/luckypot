const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get("/dashboard/events/:unique_key/", (req, res) => {
    const values = [req.params.unique_key];
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
      events.province AS province,
      users.first_name AS owner_first_name,
      users.last_name AS owner_last_name
      FROM events
      LEFT JOIN users ON events.owner_id = users.id
      WHERE events.unique_key = $1;
      `,
      values
    )
      .then((data) => {
        // console.log(data.rows);
        let event = data.rows;
        res.json(event);
      })
      .catch((err) => {
        console.log(err);
        res.send(err);
      });
  });

  router.get("/dashboard/guests/:unique_key/", (req, res) => {
    const values = [req.params.unique_key];
    db.query(
      `
      SELECT
        users.id AS id,
        users.avatar_url AS avatar_url,
        users.first_name AS first_name,
        users.last_name AS last_name,
        guest_details.present AS present
      FROM events
        JOIN guest_details ON events.id = guest_details.event_id
        JOIN users ON users.id = guest_details.user_id
      WHERE events.unique_key = $1;
    `,
      values
    )
      .then((data) => {
        const guests = data.rows;
        console.log("test");
        console.log(data.rows);
        res.json(guests);
      })
      .catch((err) => {
        console.log(err);
        res.send(err);
      });
  });

  router.get("/dashboard/items/:unique_key", (req, res) => {
    const values = [req.params.unique_key];
    db.query(
      `
      SELECT items.*
      FROM items
      JOIN events ON events.id = items.event_id
      WHERE events.unique_key = $1;
      `,
      values
    )
      .then((data) => {
        const items = data.rows;
        console.log("ITEMS FROM QUERY:");
        console.log(items);
        res.json(items);
      })
      .catch((err) => {
        console.log(err);
        res.send(err);
      });
  });

  router.get("/dashboard/messages/:unique_key", (req, res) => {
    const values = [req.params.unique_key];
    db.query(
      `
      SELECT 
      event_messages.id, 
      event_messages.event_id, 
      event_messages.user_id, 
      event_messages.message, 
      event_messages.date AS timestamp 
      FROM event_messages
      JOIN events ON events.id = event_messages.event_id
      WHERE events.unique_key = $1;
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

  router.put("/dashboard/present/", (req, res) => {
    const values = [req.body.present, req.body.user_id, req.body.event_id];
    // console.log("REQ.BODY: ", req.body);
    db.query(
      `
            UPDATE guest_details SET present = $1 WHERE user_id = $2 AND event_id = $3 RETURNING *;
            `,
      values
    )
      .then((data) => {
        const presentStatus = data.rows;
        res.json(presentStatus);
      })
      .catch((err) => {
        console.log(err);
        res.send(err);
      });
  });

  router.post("/dashboard/addguest", (req, res) => {
    const values = [];
    // console.log(req.body);
    for (key in req.body) {
      values.push(req.body[key]);
    }
    // console.log(values);
    db.query(
      `
      INSERT INTO guest_details (event_id, user_id) VALUES
      ($1, $2) RETURNING *;
      `,
      values
    )
      .then((data) => {
        console.log(data);
        res.json(data.rows);
      })
      .catch((err) => {
        console.log(err);
        res.send(err);
      });
  });

  router.get("/dashboard/present/:user_id/:event_id", (req, res) => {
    const values = [req.params.user_id, req.params.event_id];
    db.query(
      `
      SELECT present FROM guest_details WHERE user_id = $1 AND event_id = $2;`,
      values
    )
      .then((data) => {
        // console.log("DATA FROM SERVER", data);
        res.json(data.rows);
      })
      .catch((err) => {
        console.log(err);
        res.send(err);
      });
  });
  // check if user is in potluck
  router.get("/dashboard/check/:unique_key/:user_id", (req, res) => {
    const values = [req.params.unique_key, req.params.user_id];
    db.query(
      `
      SELECT * FROM guest_details 
      JOIN events ON events.id = guest_details.event_id
      WHERE events.unique_key = $1 AND user_id = $2;`,
      values
    )
      .then((data) => {
        res.json(data.rows);
      })
      .catch((err) => {
        console.log(err);
        res.send(err);
      });
  });

  return router;
};
