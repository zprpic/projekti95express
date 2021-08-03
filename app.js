const express = require("express");
const app = express();
const { people } = require("./data");

// static assets
app.use(express.static("./methods-public"));
// parse html form data
app.use(express.urlencoded({ extended: false }));
//parse json from axios
app.use(express.json());

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/api/postman/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    res
      .status(400)
      .json({ success: false, message: "Please provide name value" });
  }
  res.status(201).send({ success: true, data: [...people, name] });
});

app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    res
      .status(400)
      .json({ success: false, message: "Please provide name value" });
  }
  res.status(201).json({ success: true, person: name });
});

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}!`);
  } else {
    return res.status(401).send("Please provide credentials.");
  }
});

app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, message: `no person found with ${id} found` });
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({ success: true, data: newPeople });
});

app.listen(5000, (req, res) => {
  console.log("Server listening on port 5000");
});
