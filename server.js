var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('index2.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
  console.log('ecg server host http://:127.0.0.1:8080');
}).listen(8080);