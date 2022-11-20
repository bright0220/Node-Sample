var http = require('http');
var dt = require('./myfirstmodule');
var url = require('url');

http
  .createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    var q = url.parse(req.url, true).query;
    var txt = q.year + ' ' + q.month;
    res.write(txt);
    res.end('The date and time are currently: ' + dt.myDateTime());
  })
  .listen(8080);
