const express = require("express");
var app = express();
const path = require("path");
var bodyParser = require("body-parser");

//MIDDLEWARE================================================================

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Serve up the React application
app.use(express.static(path.resolve(__dirname, "build")));

//Serve back-end API route
app.get("/api", function(req, res) {
  res.send("You hit a back-end route.");
});

app.get("*", function(req, res) {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

//START SERVER================================================================

var PORT = process.env.PORT || 5000;

app.listen(PORT, function() {
  console.log("Server listening on Port " + PORT + "...");
});
