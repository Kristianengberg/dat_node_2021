const express = require("express");
const app = express();

app.get("/", (req, res) => {

    res.send({});

});

app.get("/me", (req, res) => {
    res.send({
        name: "kristian",
        lastname: "engberg",
        age: "28"
    });
});


app.listen(8080);