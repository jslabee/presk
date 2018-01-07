var mysql = require('mysql');
var fs = require('fs');
var csv = require('fast-csv');


var con = mysql.createConnection({
    
    host: "localhost",
    user: "root",
    password: "",
    database: "cardata"
  });

  var stream = fs.createReadStream("Dokument.csv");
  
  var csvStream = csv()
  .on("data", function(data){
    con.connect(function(err) {
        
        console.log("Connected!");
        var sql = "INSERT INTO customers (VehicleID, InhouseSellerID, BuyerID, ModelID, SaleDate, BuyDate)VALUES ?";
        var values =[ (data) ];
        con.query(sql, [values], function (err, result) {
          
          console.log("Number of records inserted: ");
        });
      });
      
      
     })
  .on("end", function(){
      console.log("done");
  
     });
  
  stream.pipe(csvStream);



