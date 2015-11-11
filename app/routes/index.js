var express = require('express');
var router = express.Router();
var mysql = require('mysql');

/*Create mysql connection*/
var conn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : ''
});
conn.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  } else {
    console.log('connected as id ' + conn.threadId);
  }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

});

module.exports = router;
