require("dotenv").config();

const PORT = process.env.PORT || 3003;
const ENV = process.env.ENV || "development";

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();
const app = express();
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);

const usersRoutes = require("./routes/users");
const recipesRoutes = require("./routes/recipes");
const favorites = require("./routes/favorites");
db.connect();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(pino);

app.use("", usersRoutes(db));
app.use("", recipesRoutes(db));
app.use("", favorites(db));

app.listen(PORT, () =>
  console.log(`Express server is running on port ${PORT}`)
);

// sasdsa