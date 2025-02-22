// Create web server

const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
  fs.readFile('./comment.html', (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end('Server error');
    } else {
      res.end(data);
    }
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});