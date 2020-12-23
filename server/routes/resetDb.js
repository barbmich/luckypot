const express = require("express");
const router = express.Router();
// other dependencies
const fs = require("fs");
const chalk = require("chalk");
// const pgClient = require("pg").Client;
// const dbParams = require("../lib/db.js");

module.exports = (db) => {
  router.get("/db/resetdb", async (req, res) => {
    console.log(chalk.cyan(`-> Loading Tables Files ...`));
    const tablesFilenames = fs.readdirSync("./db/schema");

    for (const fn of tablesFilenames) {
      const sql = await fs.readFileSync(`./db/schema/${fn}`, "utf8");
      console.log(`\t-> Running ${chalk.green(fn)}`);
      await db.query(sql);
      console.log(`\t-> ${chalk.green("Tables created!")}`);
    }

    console.log(chalk.cyan(`-> Loading Seeds ...`));
    const seedsFilenames = fs.readdirSync("./db/seeds");

    for (const fn of seedsFilenames) {
      const sql = fs.readFileSync(`./db/seeds/${fn}`, "utf8");
      console.log(`\t-> Running ${chalk.green(fn)}`);
      await db.query(sql);
      console.log(`\t-> ${chalk.green("Seeds completed!!")}`);
    }

    res.send("DB Reset Successful!");
  });

  return router;
};
