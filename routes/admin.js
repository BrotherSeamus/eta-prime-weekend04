var express = require('express');
var router = express.Router();
var db = require('../data/mongo.js');

/* GET home page. */
router.get('/', function(req, res, next) {
	var results = db.applicants.find().sort({appTime: 1}).limit(5); //cursor of results
	var array = results.toArray(function(err, arr) {
		var doc = arr;
		res.render('admin', {applicants: doc});
	});
});

module.exports = router;