var http = require('http');
var fs = require('fs');
var url = require('url');
var events = require('events');
var eventEmitter = new events.EventEmitter();

http
  .createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = '.' + q.pathname;
    fs.readFile(filename, function (err, data) {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        return res.end('404 Not Found');
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      return res.end();
    });
  })
  .listen(3000);

var rs = fs.createReadStream('./demofile.txt');
rs.on('open', function () {
  console.log('The file is open');
});

var myEventHandler = function () {
  console.log('I hear a scream!');
};

eventEmitter.on('scream', myEventHandler);
eventEmitter.emit('scream');
