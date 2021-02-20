const express = require("express");
const app = express();
const path = require("path");

let date = new Date();

let weekdays = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/time", (req, res) => {
  let time =
    "The time is: " +
    date.getHours() +
    ":" +
    date.getMinutes() +
    ":" +
    date.getSeconds();
  res.send(time);
});

app.get("/day", (req, res) => {
  let day =
    "The day is " + weekdays[date.getDay() - 1] + " the " + date.getDate();
  res.send(day);
});

app.get("/month", (req, res) => {
  let month =
    "The month is " + date.toLocaleString("default", { month: "long" });
  res.send(month);
});

app.listen(8080);
