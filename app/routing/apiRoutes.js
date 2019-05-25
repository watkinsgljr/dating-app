
// Dependencies
var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000 || process.env.PORT;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Displays all characters
app.get("/api/friend", function (req, res) {
    return res.json(characters);
});

// Displays a single character, or returns false
app.get("/api/friend/:character", function (req, res) {
    var chosen = req.params.character;

    console.log(chosen);

    for (var i = 0; i < characters.length; i++) {
        if (chosen === characters[i].routeName) {
            return res.json(characters[i]);
        }
    }

    return res.json(false);
});

// Create New Characters - takes in JSON input
app.post("/api/friend", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newFriend = req.body;

    console.log(newFriend);

    // We then add the json the user sent to the character array
    characters.push(newFriend);

    // We then display the JSON to the users
    res.json(newFriend);
});














// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});