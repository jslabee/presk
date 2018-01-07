var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "cardata"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO fakename (BuyerID) SELECT DISTINCT BuyerID FROM customers"
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});





