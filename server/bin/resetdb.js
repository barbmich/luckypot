// load .env data into process.env
require("dotenv").config();

// other dependencies
const fs = require("fs");
const chalk = require("chalk");
const pgClient = require("pg").Client;
const dbParams = require("../lib/db.js");

// PG connection setup
const connectionString =
  process.env.DATABASE_URL ||
  `postgresql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?sslmode=disable`;

const client = new pgClient(dbParams);

client.connect((err) => {
  if (err) {
    console.error("connection error", err.stack);
  } else {
    console.log("connected");
  }
});
console.log(connectionString);

// Loads the schema files from db/schema
const runSchemaFiles = async function () {
  console.log(chalk.cyan(`-> Loading Tables Files ...`));
  const tablesFilenames = fs.readdirSync("./db/schema");

  for (const fn of tablesFilenames) {
    const sql = await fs.readFileSync(`./db/schema/${fn}`, "utf8");
    console.log(`\t-> Running ${chalk.green(fn)}`);
    await client.query(sql);
    console.log(`\t-> ${chalk.green("Tables created!")}`);
  }

  console.log(chalk.cyan(`-> Loading Seeds ...`));
  const seedsFilenames = fs.readdirSync("./db/seeds");

  for (const fn of seedsFilenames) {
    const sql = fs.readFileSync(`./db/seeds/${fn}`, "utf8");
    console.log(`\t-> Running ${chalk.green(fn)}`);
    await client.query(sql);
    console.log(`\t-> ${chalk.green("Seeds completed!!")}`);
  }

  client.end();
};

runSchemaFiles();
