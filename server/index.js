require("dotenv").config();

const PORT = process.env.PORT || 3003;
const ENV = process.env.ENV || "development";

const express = require("express");
const app = express();
const WebSocket = require("ws");
const server = require("http").Server(app);
const cors = require("cors");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);

const authRoutes = require("./routes/auth");
const recipesRoutes = require("./routes/recipes");
const favoritesRoutes = require("./routes/favorites");
const potluckRoutes = require("./routes/potlucks");
const itemsRoutes = require("./routes/items");
const dashboardRoutes = require("./routes/dashboard");
const messagesRoutes = require("./routes/messages");

db.connect();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(pino);

app.use("", potluckRoutes(db));
app.use("", authRoutes(db));
app.use("", recipesRoutes(db));
app.use("", favoritesRoutes(db));
app.use("", itemsRoutes(db));
app.use("", dashboardRoutes(db));
app.use("", messagesRoutes(db));

server.listen(PORT, () =>
  console.log(`Express server is running on port ${PORT}`)
);

const wss = new WebSocket.Server({ server });

wss.on("connection", function connection(ws) {
  ws.on("message", function incoming(data) {
    console.log("data incoming:", JSON.stringify(data));
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  });
});
