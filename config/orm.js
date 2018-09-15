var connection = require("./connection.js");

// Request to see ALL information
var orm = {
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
      console.log(result);
    });
  },

  // ORM function to insert into database
  create: function(tableInput, burger_name, devoured, cb) {
    var queryString = "INSERT INTO " + tableInput;
    console.log(queryString);
    connection.query(queryString, [tableInput, burger_name, devoured], function(err, result) {
      if (err) {
      throw err;
      }
      cb(result);
      console.log(result);
    });
  },
//   updateOne();
  updatet: function(tableInput, burger_name, devoured, cb) {
    var queryString = "UPDATE " + tableInput;

    connection.query(
      queryString,
      [tableInput, burger_name, devoured, cb],
      function(err, result) {
        if (err) {
          throw err;
        }
        cb(results)
        console.log(result);
      }
    );
  }
};

module.exports = orm;
