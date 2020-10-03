const express = require("express");
const router = express.Router();
const request = require("request");
const cloudinary = require("cloudinary").v2;
// cloudinary.config({
//   cloudinary_url: process.env.CLOUDINARY_URL
// });

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
        console.log(user);
        res.json({ user });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.post("/signup", (req, res) => {
    const validationByEmail = [req.body.email];
    // db.query(
    //   `
    // SELECT * FROM users WHERE email=$1;
    // `,
    //   validationByEmail
    // )
    //   .then((data) => {
    //     if (data.rows.length > 0) {
    //       res.send("a user with this email already exists");
    //     } else {
    console.log("image upload");
    const imageInfo = {
      public_id: req.body.email,
      folder: "luckypot",
    };

    cloudinary.uploader
      .upload(req.body.avatar.base64, imageInfo, (err, image) => {
        console.log("file upload");
        if (err) {
          console.log(err);
        }
        console.log(image.url);
        return image;
      })
      .then((imageData) => {
        console.log("this is url:", imageData.url);
        const values = [
          req.body.firstName,
          req.body.lastName,
          req.body.email,
          req.body.password,
          imageData.url,
        ];
        console.log(values);
        db.query(
          `INSERT INTO users (first_name, last_name, email, password, avatar_url)
              VALUES ($1, $2, $3, $4, $5)
              RETURNING *;
              `,
          values
        )
          .then((data) => {
            const user = data.rows[0];
            delete user.password;
            res.json({ user });
          })
          .catch((err) => {
            res.status(500).send("insert not working");
          });
      })
      .catch((err) => {
        res.status(500).send("not working");
      });
  });

  return router;
};
