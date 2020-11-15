var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        })
    },
// Name stores the burger_name the user is creating
    insertOne: function(name, cb) {
        orm.insertOne("burgers", name, function(res) {
            cb(res);
        }) 
    },
// Val stores the boolean value the user is updating, name stores the burger_name
    updateOne: function(val, name, cb) {
        orm.updateOne("burgers", val, name, function(res) {
            cb(res);
        })
    }
}

module.exports = burger;