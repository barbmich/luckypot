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

const authRoutes = require("./routes/auth");
const recipesRoutes = require("./routes/recipes");
const favoritesRoutes = require("./routes/favorites");
const potluckRoutes = require("./routes/potlucks");
db.connect();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(pino);

app.use("", potluckRoutes(db));
app.use("", authRoutes(db));
app.use("", recipesRoutes(db));
app.use("", favoritesRoutes(db));

app.listen(PORT, () =>
  console.log(`Express server is running on port ${PORT}`)
);

// sasdsa
