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
    var sql = "CREATE TABLE customers (VehicleID VARCHAR(255),InhouseSellerID VARCHAR(255),BuyerID VARCHAR(255),ModelID VARCHAR(255),SaleDate VARCHAR(255),BuyDate VARCHAR(255))";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
  });