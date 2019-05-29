var express = require('express');
var bodyParser = require("body-parser");

var server = express();
var jsonParser = bodyParser.json();

server.use(express.static(__dirname));
server.use(jsonParser);

server.get("/", function(request, response){
    console.log('Welcome to the club, budy');
})

server.get("/userdataGet", function (requset, response) {
    console.log("Form receipted by GET.");
    var obj = requset.query;
    response.send(JSON.stringify(requset.query));
});


server.listen(3001); 