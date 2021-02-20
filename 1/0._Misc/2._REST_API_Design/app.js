const express = require("express");
const app = express();

const fs = require("fs");
const { stringify } = require("querystring");

let cars;

fs.readFile("cars.json", (err, data) => {
  if (err) throw err;
  cars = JSON.parse(data);
  console.log(cars);
});

app.get("/", (req, res) => {
  res.send("use /cars or /cars/(INSERT ID)");
});

app.get("/cars", (req, res) => {
  res.send(cars);
});

app.get("/cars/:id", (req, res) => {
  let id = req.params.id;
  console.log(id);
  res.send(cars[id - 1]);
});

app.listen(8080);
