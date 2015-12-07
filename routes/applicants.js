var express = require('express');
var router = express.Router();
var db = require('../data/mongo.js');


/* GET applicants listing. */
router.get('/', function(req, res, next) {
  var results = db.applicants.find().sort({appTime: 1}).limit(5); //cursor of results
  var array = results.toArray(function(err, arr) {
    var doc = arr;
    res.send(doc);
  });
});

router.post('/search', function(req, res, next) {
  //sets search parameters
  var firstName = req.body.sFName;
  var lastName = req.body.sLName;
  var location = req.body.sLocus;
  var skills = req.body.sSkills;

  console.log(firstName, lastName, location, skills)
  //search for matches
  var results = db.applicants.find({$or:[{fName:firstName}, {lName:lastName}, {desLocus:location}, {skills:{$in:[skills]}}]}); //cursor of results
  console.log(results);
  var array = results.toArray(function(err, arr) {
    var doc = arr;
    console.log(doc);
    res.send(doc);
  });
});

/*Post application to applicants*/
router.post('/', function(req, res, next) {
  db.applicants.insert(req.body.newApp);
  res.send('post to applications working');
});

/*Post applications to database*/
module.exports = router;
