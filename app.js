/* eslint-disable no-console */
const express = require("express");
const app = express();

const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/name", (req, res) => {
  res.send("Namify");
});

app.listen(port, () => {
  console.log(`Started server on port ${port}`);
});
