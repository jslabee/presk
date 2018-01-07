
var fs = require('fs');
var csv = require('fast-csv');

var stream = fs.createReadStream("Dokument.csv");

var csvStream = csv()
   .on("data", function(data){
        console.log(data);
   })
   .on("end", function(){
        console.log("done");
   });

stream.pipe(csvStream);

//or

var csvStream = csv
   .parse()
   .on("data", function(data){
        console.log(data);
   })
   .on("end", function(){
        console.log("done");
   });

stream.pipe(csvStream);