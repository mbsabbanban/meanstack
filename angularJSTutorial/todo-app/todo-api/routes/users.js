var express = require('express');
var router = express.Router();

//----------
// Need to connect ExpressJS Route with Mongo via Mongoose
//----------
var mongoose = require('mongoose');
var Todo = require('../models/Todo.js');

/* GET /todos listing. */
router.get('/', function(req, res, next) {
	Todo.find(function (err, todos){
		if(err) return next(err);
		res.json(todos);
	});
});

module.exports = router;
