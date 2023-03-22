var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
fs.readFile('mynewfile1.txt', function(err, judi) {
    console.log(judi)
res.writeHead(200, {'Content-Type': 'text/html'});
res.write(judi);
return res.end();
});
}).listen(8080); 