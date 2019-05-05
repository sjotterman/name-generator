/* eslint-disable no-console */
const express = require("express");
const generator = require("./src/generator");

const app = express();

const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/name", (req, res) => {
  const name = generator.randomName();
  res.send(name);
});

app.listen(port, () => {
  console.log(`Started server on port ${port}`);
});
