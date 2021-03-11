const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

console.log(port);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
});

app.listen(port, () => {
    console.log("Server is running on",
        port);
})