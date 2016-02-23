var sys = require("sys");
var httpServer = require("http");
var express = require("express");
var app = express();
var path = require("path");
var fs = require("fs");

//for post to use request.body
var bodyParser = require('body-parser');
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.get('/index.html', function (request, response) {
	response.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/submit.html", function (request, response) {
	response.sendFile(path.join(__dirname + "/submit.html"));
});

app.post("/result.html", function (request, response) {
	var body = request.body;
	console.log(body);
	response.sendFile(path.join(__dirname + "/result.html"));
});

app.use("/libs", express.static(__dirname + '/libs'));
app.use("/js", express.static(__dirname + '/js'));
app.use("/problems", express.static(__dirname + '/problems'));
app.listen(9000);

console.log("Listening... 9000");
