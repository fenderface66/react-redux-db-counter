/**
 * Script that performs deals with all data based endpoints.
 */
var path = require('path');
var sqlite3 = require('sqlite3').verbose();
var dbLocation = path.join(__dirname, '..', 'model', 'us-census.db');
var db = new sqlite3.Database(dbLocation);

exports.api = function(req, res, next) {
    const chosenVariable = decodeURIComponent(req.query.chosenVariable);
    const query = `SELECT "${chosenVariable}", AVG(age) as age, COUNT(*) as count FROM census_learn_sql GROUP BY "${chosenVariable}" ORDER BY COUNT("${chosenVariable}") desc`;
    const results = [];

    db.all(query, function(err, rows) {  
        console.log(err);
        if (err === null) {
            rows.map((row) => {
                const result = {};
                result.name = row[chosenVariable];
                result.count = row['count'];
                result.age = row['age'];
                result.type = chosenVariable;
                results.push(result);
            })
            res.send(results);
        } else {
            res.status(400).send(err);
        }
    });  
    
}