var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Login' });
});

/* POST login page. */
router.post('/login',function(req, res, next) {

	console.log(req.body);
	res.render('login',{ name: req.body.username, passwd: req.body.password});
});

/* POST query action */
router.post('/query', function(req, res, next) {

	// Query the patient informations from database.
	console.log(req.body);

});

module.exports = router;
