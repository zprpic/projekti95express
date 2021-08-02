const express = require("express");
const app = express();

// req => middleware => res
const logger = require("./logger");
const authorize = require("./authorize");

app.use([authorize, logger]);
//app.use('/api', logger)
//applies to /api/...EVERYTHING.../...EVERYTHING...

app.get("/", (req, res) => {
  res.send("home page");
});

app.get("/about", (req, res) => {
  res.send("about page");
  console.log(req.user);
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});

app.get("/api/items", (req, res) => {
  res.send("Items");
});

app.listen(5000, (req, res) => {
  console.log("Server listening on port 5000");
});
