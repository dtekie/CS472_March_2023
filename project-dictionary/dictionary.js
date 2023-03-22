var express = require("express");
var bodyParser = require("body-parser"); 
var path = require("path"); 
var search = require("./word");
var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname));


app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/dict.html"));
});


app.post("/search", function (req, res) {
  search.wordMeaning(res, req.body.searchTerm);
});

var server = app.listen(8080, function () {
  console.log("Server is running on port 8080...");
});
