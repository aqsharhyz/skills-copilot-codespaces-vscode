// Create web server
// Create a web server that listens for incoming requests on port 3000.
// When requests are received, the server should respond with the contents of the file comment.html.
// Use the fs module to read the file, and the http module to create the server.

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