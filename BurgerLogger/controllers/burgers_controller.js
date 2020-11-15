const express = require('express');
const burger = require("../models/burger.js");

var router = express.router();

router.get("/", function(req, res) {
    burger.selectAll(function(data) {

        res.render("index", data);
    })
})

router.post("/api/burgers", function(req, res) {
    burger.insertOne(req.body.name, function(result) {
        console.log(result);
    })
})

router.put("/api/burgers/:name", function(req, res) {
    var name = req.params.name;
    burger.updateOne(req.body.val, req.body.name, function(result) {
        console.log(result);
    })
})

module.exports = router;