var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log("Hello World!!!!!")
	console.log("Another Change for a branch test")
  res.render('index', { title: 'Express' });
});

module.exports = router;
