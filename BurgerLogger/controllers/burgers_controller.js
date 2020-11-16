const express = require('express');
const burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(data) {

        res.render("index", { data: data });
    })
})

router.post("/api/burgers", function(req, res) {
    let name = req.body.name;
    burger.insertOne(name, function(result) {
        console.log(result);

        res.redirect('back');
    })
})

router.put("/api/burgers/:name", function(req, res) {
    var name = req.params.name;
    burger.updateOne(req.body.val, req.body.name, function(result) {
        console.log(result);
        
        res.redirect('back');
    })
})

module.exports = router;