/**
 * Script that performs deals with all data based endpoints.
 */
var path = require('path');
var sqlite3 = require('sqlite3').verbose();
var dbLocation = path.join(__dirname, '..', 'model', 'us-census.db');
var db = new sqlite3.Database(dbLocation);

exports.api = function(req, res, next) {
    var columns = [];
    db.all("PRAGMA table_info(census_learn_sql)", function(err, cols) {  
        cols.forEach(function (col) {  
            if (col.name !== 'age') {
                columns.push(col.name);  
            }
        })  
        if (err === null) {
            res.send(columns);
        } else {
            res.status(400).send(err);
        }
        
    });   
}

