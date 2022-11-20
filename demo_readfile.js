var http = require('http');
var fs = require('fs');

http
  .createServer(function (req, res) {
    fs.readFile('demofile1.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      return res.end();
    });
  })
  .listen(3000);

fs.appendFile('mynewfile1.txt', 'This is my Text', function (err) {
  if (err) throw err;
  console.log('Updated!');
});

fs.unlink('mynewfile2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});
