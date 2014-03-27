var host = "127.0.0.1";
var port = 1337;
var express = require("express");
var stringHelper = require("./stringHelper.js");
var app = express();

app.get("/", function(request, response) {
   response.send("Hello World!");
});

app.get("/hello/:thetext", function(request, response) {
   response.send("Hello "+stringHelper.upperCase(request.params.thetext)+"!");
});

app.listen(port, host);
console.log('Express listening on host='+host+":"+port);




