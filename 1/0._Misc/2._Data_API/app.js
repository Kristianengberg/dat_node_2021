const express = require("express");
const app = express();


app.get("/search", (req, res) => {
    res.send(req.query);
});


app.get("/telegram/:message", (req, res) => {
    res.send({
        message: req.params.message
    });
});

app.get("/telegram/:message/:name", (req, res) => {
    res.send({
        message: req.params.message,
        name: req.params.name
    });
});

app.listen(8080, (err) => {

});