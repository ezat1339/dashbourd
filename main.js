var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
 if (err) {
  res.end('./error.html')
 }
  fs.readFile('indx.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(5000);
