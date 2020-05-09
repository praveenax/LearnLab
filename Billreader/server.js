
var express = require("express");
var bodyParser = require("body-parser");
var url = require("url");
//var winston = require('winston');
var request = require("request");


//winston.add(winston.transports.File, { filename: 'console.log' });
//winston.log("info",render);

//console.log(CONFIG);
//console.log(CONFIG);


//var connection = CONFIG.connection;



fs = require('fs');


var app = express();

//app.use('/', proxy());
app.use(express.static('client'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

//connection.connect(function (err) {
//    if (!err) {
//        winston.log("info","Database is connected ... \n\n");
//    } else {
//        winston.log("info","Error connecting database ... \n\n");
//    }
//});

app.get("/", function (req, res) {
    var obj = { name: "praveen", age: 27 };



    res.sendfile('bill.html');
});



var listener = app.listen(5000, function () {
    console.log("info", 'Listening on port ' + listener.address().port); //Listening on port 8888
});