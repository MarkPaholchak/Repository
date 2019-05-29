var express = require('express');
var bodyParser = require("body-parser");

var server = express();
var jsonParser = bodyParser.json();

server.use(express.static(__dirname));
server.use(jsonParser);

server.get("/", function(request, response){
    console.log('Welcome to the club, budy');
    response.send("<p>Hello on this server, guys</p>")
})

server.get("/formGet", function (requset, response) {
    console.log("Form receipted by GET.");
    var obj = requset.query;
    console.log(obj.lName += ".ValidatedByGET");
    console.log(obj.fName += ".ValidatedByGET");
    console.log(obj.age += ".ValidatedByGET");
    console.log(obj.address += ".ValidatedByGET");
    
    response.send("What you type" + JSON.stringify(requset.query))
});

server.post("/formPost", function (requset, response) {
    console.log("Form receipted by POST.");
    var obj = requset.body;
    console.log(obj.lName += ".ValidatedByPOST");
    console.log(obj.fName += ".ValidatedByPOST");
    console.log(obj.age += ".ValidatedByPOST");
    console.log(obj.address += ".ValidatedByPOST");
    
    response.send("What you type" + JSON.stringify(requset.body))
});

server.listen(3001); 