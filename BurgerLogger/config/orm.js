const { connect } = require("./connection.js");
var connection = require("./connection.js");

var orm = {

    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function(err, result) {
          if (err) throw err;

          cb(result);
        });
    },
// Name stores the burger_name the user is creating
    insertOne: function(table, name, cb) {
      var queryString = "INSERT INTO " + table + " (burger_name, devoured) VALUES ('" + name.toString() + "', false);";

      connection.query(
        queryString,
        function(err, result) {
          if (err) throw err;

          cb(result);
        }
      )
    },
// Val stores the boolean value the user is updating, name stores the burger_name
    updateOne: function(table, id, cb) {
      var queryString = "UPDATE " + table + " SET devoured = !devoured WHERE id = " + id;

      connection.query(
        queryString,
        function(err, result) {
          if (err) throw err;
          
          cb(result);
        }
      )
    }

}

module.exports = orm;