var express = require('express');
var router = express.Router();

//DB Connection
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "findiway"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/contactus', function(req, res, next) {

const {firstname , email , phoneno ,country , message   } = req.body ;
  var sql = `INSERT INTO contactus (firstname,email,phoneno,country,message) VALUES ('${firstname}', '${email}', ${phoneno} , '${country}' , '${message}')`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

  console.log(req.body);
res.json(req.body)
});

module.exports = router;
