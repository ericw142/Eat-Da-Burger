const express = require('express');

const PORT = process.env.PORT || 8080;

const app = express();

// Middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
var router = require("./controllers/burgers_controller.js");

app.use(router);

// Starts server
app.listen(PORT, function() {
  // Log (server-side) 
  console.log("Server listening on: http://localhost:" + PORT);
});
