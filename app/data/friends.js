
// Dependencies
var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000 || process.env.PORT;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// Displays all characters
app.get("/api/characters", function (req, res) {
    return res.json(characters);
});