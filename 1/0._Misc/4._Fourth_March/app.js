const express = require("express");
const app = express();
app.use(express.json());


let animeNames = [{
        id: 1,
        title: "Attack on Titan",
        weirdness: 6.8
    },
    {
        id: 2,
        title: "One punch man",
        protagonist: "Saitama"
    }
]

let AUTOINCREMENT = 2;
app.get("/", (req, res) => {

});

app.get("/anime_names", (req, res) => {
    res.send({
        animeNames: animeNames
    });
});

app.get("/anime_names/:id", (req, res) => {
    const animeId = Number(req.params.id);
    const foundAnimeName = animeNames.find(animeName => animeName.id === animeId)
    res.send({
        data: foundAnimeName
    });
});


app.post("/anime_name", (req, res) => {
    const newAnimeName = req.body;
    newAnimeName.id = ++AUTOINCREMENT;
    animeNames.push(newAnimeName);

    res.send({
        data: newAnimeName
    })
});

app.delete("/anime_names/:id", (req, res) => {
    animeNames = animeNames.filter(animeName => animeName.id !== Number(req.params.id));
    res.send({});
});


app.patch("/anime_names/:id", (req, res) => {
    animeNames = animeNames.map(animeName => {
        if (animeName.id === Number(req.params.id)) {
            return {...req.body, ...animeName, id: animeName.id }
        }
        return {...req.body, ...animeName, id: animeName.id }
    });

    res.send({});
});

app.listen(8080, (error) => {
    if (error) {

    }
    console.log("server is running on", 8080);
});