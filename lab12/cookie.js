var express = require("express");
var app = express();
// var logger = require('morgan');
var cookieParser = require("cookie-parser");
app.use(cookieParser("salt for cookie signing"));

// parses x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  if (req.cookies.remember) {
    res.send("Remembered :). Click to <a href=\'/forget\'>forget</a>");
  } else {
    res.send(
      '<form method="post"><p>Check to <label>' +
        '<input type="checkbox" name="remember"/> remember me</label> ' +
        '<input type="submit" value="Submit"/>.</p></form>'
    );
  }
});

app.get("/forget", function (req, res) {
  res.clearCookie("remember");
  res.redirect("back");
});

app.post("/", function (req, res) {
  if (req.body.remember)
    res.cookie("remember", 1, {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      signed: true,
    });
  res.redirect("back");
});

app.listen(3000);
