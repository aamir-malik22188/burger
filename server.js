// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

//HOW DO WE INCLUDE OUR MYSQL CONNECTION FILE?
var connection = require("./config/connection.js")

//What is being stored inside var app?
var app = express();

app.use(express.static("public"));
// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

//What is  exphbs({ defaultLayout: "main" }) telling our express app to do?
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Import routes for app
var routes = require("./controllers/burger_controller.js");

app.use(routes);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
