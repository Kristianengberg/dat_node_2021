const express = require("express");
const app = express();

const failures = ["mislick", "falling down", "skateboard accident", "tiktok fail"];


const newFailure = failures.map((failure) => failure);

console.log(newFailure);




app.listen(8080);