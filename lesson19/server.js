var express = require('express');
var bodyParser = require("body-parser");

var server = express();
var jsonParser = bodyParser.json();

server.use(express.static(__dirname));
server.use(jsonParser);

server.get("/", function(request, response){
    console.log('Welcome to the club, budy');
    response.send("<p>Hello on this server, guys</p>")
});

server.get("/formGet", function (request, response) {
    console.log("Form receipted by GET.");
    var obj = request.query;
    console.log(obj.lName += ".ValidatedByGET");
    console.log(obj.fName += ".ValidatedByGET");
    console.log(obj.age += ".ValidatedByGET");
    console.log(obj.address += ".ValidatedByGET");
    
    response.send("What you type" + JSON.stringify(request.query))
});

server.post("/formPost", function (request, response) {
    console.log("Form receipted by POST.");
    var obj = request.body;
    console.log(obj.lName += ".ValidatedByPOST");
    console.log(obj.fName += ".ValidatedByPOST");
    console.log(obj.age += ".ValidatedByPOST");
    console.log(obj.address += ".ValidatedByPOST");
    
    response.send("What you type" + JSON.stringify(request.body))
});

server.listen(3001); 