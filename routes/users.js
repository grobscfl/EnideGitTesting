var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	
	apples = {
			"number": 200,
			"ripe": true
	};
	
	//send is used for web api json objects
  res.send(apples);
});

module.exports = router;
