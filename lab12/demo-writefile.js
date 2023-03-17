var fs = require("fs");
fs.writeFile(
  "mynewfile3.txt",
  "Hello content! add something more to it",
  function (err) {
    if (err) throw err;
    console.log("Saved!");
  }
);
