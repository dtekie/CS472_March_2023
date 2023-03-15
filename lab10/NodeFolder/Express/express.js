const express = require('express');
const app = express();
const port = 8080;
app.get('/', function (req, res){
    res.writeHead(200, {"Content-type":"text/html"});
    res.write("hello world!")
    res.end();
}).listen(8080, function(){
    console.log(`listening on port ${port}`);
});