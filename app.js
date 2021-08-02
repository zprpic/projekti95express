const express = require("express");
const app = express();

// req => middleware => res
const logger = require("./logger");

app.get("/", logger, (req, res) => {
  res.send("home page");
});

app.get("/about", logger, (req, res) => {
  res.send("about page");
});

app.listen(5000, (req, res) => {
  console.log("Server listening on port 5000");
});
