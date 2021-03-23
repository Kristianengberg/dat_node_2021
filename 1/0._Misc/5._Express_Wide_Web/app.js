const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

console.log(port);

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/welcome/index.html")
});

app.get("/pizza", (req, res) => {
    res.sendFile(__dirname + "/public/pizza.html")
});

app.get("/endingwithredirect", (req, res) => {
    res.send({});
});

app.get("/redirect", (req, res) => {
    res.redirect("/endingwithredirect")
});

app.get("/candle", (req, res) => {
    if (req.query.blow) {
        res.send({ data: "lightsOn" });
    } else {
        res.send({ data: "lightsOff" });
    }
});

app.listen(port, () => {
    console.log("Server is running on",
        port);
})