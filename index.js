var sys = require("sys");
var httpServer = require("http");
var express = require("express");
var url = require("url");
var app = express();
var path = require("path");
var fs = require("fs");
var PythonShell = require('python-shell');

//Made scripts
var file = require("./app/compile.js");

//for post to use request.body
var bodyParser = require('body-parser');
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.get('/index.html', function (request, response) {
	response.sendFile(path.join(__dirname,"/public/index.html"));
});

app.post("/html/result.html", function (request, response) {
	// console.log("working on redndering result.html");
	response.sendFile(path.join(__dirname, "/public/html/result.html"));

	console.log(request.body);

	problemCode = url.parse(request.url).search;
	problemCode = problemCode.slice(1);
	console.log(problemCode);

	file.createAndRun(problemCode, fs, request, PythonShell);
});

app.use("/public", express.static(path.join(__dirname, "/public")));
app.use("/html", express.static(path.join(__dirname,"/public/html")));
app.use("/js", express.static(path.join(__dirname,"/public/js")));
app.use("/app", express.static(path.join(__dirname, "/app")));
app.listen(9000);

console.log("Listening... 9000");
