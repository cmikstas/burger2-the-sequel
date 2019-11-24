// Import MySQL connection.
var connection = require("../config/connection.js");
  
// Object for all our SQL statement functions.
var orm =
{
    selectAll: function(tableInput, cb)
    {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function(err, result)
        {
            if (err)
            {
                throw err;
            }
            cb(result);
        });
    },

    insertOne: function(tableInput, col1, col2, val1, val2, cb)
    {
        var queryString = "INSERT INTO ?? (??, ??) VALUES (?, ?)";
  
        console.log(queryString);
  
        connection.query(queryString, [tableInput, col1, col2, val1, val2], function(err, result)
        {
            if (err)
            {
                throw err;
            }
  
            cb(result);
        });
    },
    
    updateOne: function(tableInput, colToUpdate, newVal, refCol, refVal, cb)
    {
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
  
        console.log(queryString);
        connection.query(queryString, [tableInput, colToUpdate, newVal, refCol, refVal, cb], function(err, result)
        {
            if (err)
            {
                throw err;
            }
  
            cb(result);
        });
    },

    deleteOne: function(tableInput, col, val, cb)
    {
        var queryString = "DELETE FROM ?? WHERE ?? = ?";
  
        connection.query(queryString, [tableInput, col, val], function(err, result)
        {
            if (err)
            {
                throw err;
            }
  
            cb(result);
      });
    }
};

module.exports = orm;