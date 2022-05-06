const express = require("express");
const db = require("../db/mysqlConn.js");
const router = express.Router();

router.get("/", (req, res) => {
  var sqlQuery = "select * from formdatas";
  let query = db.query(sqlQuery, (err, results) => {
    if (err) throw err;
    res.send(apiResponse(results));
  });
});

router.post("/formdatas/dataItems", (req, res) => {
  let data = req.body;
  let sqlQuery = "INSERT INTO formdatas SET ?";
  let query = db.query(sqlQuery, data, (err, results) => {
    if (err) throw err;
    res.send(apiResponse(results));
  });
});

router.get("/api/formdatas/:documenttype", (req, res) => {
  let sqlQuery =
    "SELECT * FROM formdatas WHERE documenttype=" + req.params.documenttype;

  let query = db.query(sqlQuery, (err, results) => {
    if (err) throw err;
    res.send(apiResponse(results));
  });
});

router.put("/api/formdatas/:id", (req, res) => {
  let sqlQuery =
    "UPDATE formdatas SET title='" +
    req.body.title +
    "', body='" +
    req.body.body +
    "' WHERE id=" +
    req.params.id;

  let query = db.query(sqlQuery, (err, results) => {
    if (err) throw err;
    res.send(apiResponse(results));
  });
});

/**
 * Delete Item
 *
 * @return response()
 */
router.delete("/api/formdatas/:id", (req, res) => {
  let sqlQuery = "DELETE FROM formdatas WHERE id=" + req.params.id + "";

  let query = db.query(sqlQuery, (err, results) => {
    if (err) throw err;
    res.send(apiResponse(results));
  });
});

function apiResponse(results) {
  return JSON.stringify({ status: 200, error: null, response: results });
}

module.exports = router;
