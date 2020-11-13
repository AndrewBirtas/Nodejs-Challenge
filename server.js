const express = require("express");
const bodyparser = require("body-parser");
const fs = require("fs");

const app = express();

let rawFile = fs.readFileSync("input.json");
let data = JSON.parse(rawFile);


app.use(bodyparser.urlencoded({extended: true}));

app.use(bodyparser.json());

console.log(data);

require("./app/routes/routes.js")(app);


app.get("/", (req,res) => {
    res.send("Try /search !it's a post method!");
});

app.listen(process.env.PORT || 5000, ()=>{
    console.log("Server started!");
});