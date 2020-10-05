const express = require("express");
const router = express.Router();
const prettylink = require('prettylink');
const { generateRandomString } = require('./../helpers/key');

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
      events.province AS province,
      events.tiny_url AS tiny_url,
      events.unique_key AS unique_key
      FROM guest_details
      JOIN events ON events.id = guest_details.event_id
      JOIN users ON users.id = guest_details.user_id
      WHERE events.id IN(SELECT event_id
      FROM guest_details
      WHERE user_id = $1)
      ORDER BY events.date ASC;
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
  });

  //add potluck to events
  router.post("/mypotlucks/add", (req, res) => {
    console.log("REQ.BODY ~~~~~~~~~~~~~~~~");
    console.log(req.body);
    const values = [];
    for (const key in req.body) {
      values.push(req.body[key]);
    }
    const unique_key = generateRandomString()
    values.push(unique_key)
    console.log("QUERY VALUES ~~~~~~~~~~~~~~~~~~~");
    console.log(values);
    db.query(
      `
      INSERT INTO events (owner_id, name, date, address, post_code, city, province, unique_key)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING unique_key;
      `,
      values
    )
    .then((data) => {
        const unique_key = [data.rows[0].unique_key];
        console.log("UNIQUE KEY ~~~~~~~~~~~~~~~~~~~");
        console.log(unique_key);
        const tinyurl = new prettylink.TinyURL();
        const tiny = tinyurl.short(`http://localhost:3002/dashboard/${unique_key}`);
        return Promise.all([tiny, unique_key]);
        })
        .then(([tiny, unique_key]) => {
            const values = [tiny, unique_key[0]];
            console.log("TINY URL AND UNIQUE KEY ~~~~~~~~~~~~~~~~~~~");
            console.log(values);
            return db.query(
              `
              UPDATE events SET tiny_url=$1 WHERE unique_key=$2 RETURNING id, owner_id;
              `
            , values)
          })
            .then((data) => {
              const values = [data.rows[0].id, data.rows[0].owner_id]
              console.log("EVENT ID AND OWNER ID ~~~~~~~~~~~~~~~~~~~");
              return db.query(
                `
                INSERT INTO guest_details (event_id, user_id, present) 
                VALUES ($1, $2, 2) RETURNING (SELECT unique_key FROM events WHERE id =$1);
                `
              , values)
            })
              .then((data) => {
                console.log("LAST PROMISE ~~~~~~~~~~~~~~~~~~~");
                console.log(data.rows);
                res.send(data.rows)
              }) 
              .catch((err) => {
              console.log(err);
            });
  });

  // router.post("/create", (req, res) => {
  //   const values = [];
  //   db.query(
  //     `
  //     // INSERT INTO events (owner_id, name, date, address, post_code, city, province)
  //     // VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;
  //     `,
  //     values
  //   )
  //     .then((data) => {
  //       res.json(data.rows);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // })

  return router;
};
