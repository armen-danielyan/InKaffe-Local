var express = require('express');
var router = express.Router();
var mysql = require('mysql');

/*Create mysql connection*/
var conn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : ''
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

});

module.exports = router;
