require("dotenv").config();

const PORT = process.env.PORT || 3003;
const ENV = process.env.ENV || "development";

const express = require("express");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();
const app = express();

const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get("/api/greeting", (req, res) => {
  const name = req.query.name || "World";
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.get("/api/testing", (req, res) => {
  const name = req.query.name || "World";
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify({ greeting: `WTF ${name}!` }));
});

app.listen(PORT, () =>
  console.log(`Express server is running on port ${PORT}`)
);
