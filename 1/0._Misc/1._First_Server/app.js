const express = require("express");
const app = express();

// consider what datatype to store your data in
// you are allowed to hardcode the id

// get request that gets all data

// get request that gets data by ID


app.get("/", (req, res) => {
    res.send({
        message: "first call to /"
    });


});






app.listen(8080);