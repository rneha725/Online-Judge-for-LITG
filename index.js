var sys = require("sys");
var httpServer = require("http");
var express = require("express");
var app = express();
var path = require("path");
var fs = require("fs");
var os = require("os");
//os.write("ps");

//for post to use request.body
var bodyParser = require('body-parser');
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

// var publicDirectory = __dirname + ".. /public";

app.get('/index.html', function (request, response) {
	response.sendFile(path.join(__dirname,"/public/index.html"));
	// response.sendFile("../public/index.html")
});

app.get("/submit.html", function (request, response) {
	response.sendFile(path.join(__dirname,"../public/html","/submit.html"));
});

app.post("/result.html", function (request, response) {
	response.sendFile(path.join(__dirname, "../public/html", "/result.html"));
	
});

// app.use("/libs", express.static(__dirname + '/libs'));
// app.use('/js', express.static(__dirname+"../public"+'/js'));
// app.use("/html/problems", express.static(__dirname + '/problems'));
app.use("/public", express.static(path.join(__dirname, "/public")));
app.use("/html", express.static(path.join(__dirname,"/public/html")));
app.use("/js", express.static(path.join(__dirname,"/public/js")));
app.use("/app", express.static(path.join(__dirname, "/app")));
app.listen(9000);

console.log("Listening... 9000");
