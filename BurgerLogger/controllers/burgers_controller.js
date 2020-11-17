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

router.put("/api/burgers/:id", function(req, res) {
    var id = req.params.id;
    burger.updateOne(id, function(result) {
        // Sets 200 if database was successfully updated
        if (result.affectedRows == 0) {
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
        
    })
})

router.delete("/api/burgers/:deleteid", function(req, res) {
    var deleteId = req.params.deleteid;

    burger.deleteOne(deleteId, function(result) {
        // Sets 200 if database was successfully updated
        if (result.affectedRows == 0) {
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
        
    })
})

module.exports = router;