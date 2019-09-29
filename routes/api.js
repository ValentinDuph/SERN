const express = require ('express');
const router = express.Router();
var db = require('./../database.js');

router.get('/columns', (req, res, next) => {
    var sql = "PRAGMA table_info(census_learn_sql)"
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({"error":err.message});
            return;
          }
          const names = rows.map(elem => { return elem.name});
          res.json({
              "message":"success",
              "columnName" : names
          })
    });
});

router.get('/columns/:columnName', (req, res, next) => {
    var query = 'SELECT "'+ req.params.columnName + '", count(*), avg(age) FROM (census_learn_sql) WHERE "'
        + req.params.columnName + '" IS NOT NULL GROUP BY "' 
        + req.params.columnName + '" ORDER BY count(*) DESC LIMIT 100';
    db.all(query, (err, rows) => {
        if (err) {
            res.status(400).json({"error":err.message});
            return;
          }
          res.json({
              "message":"success",
              "result":rows
          })
    });
});

module.exports = router;