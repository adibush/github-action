// app.js
const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
<<<<<<< HEAD
  res.end('hello from adi bashari ');
=======
  res.end('hello test 1000000 ');
>>>>>>> 6074e0bf70d792d92668976531023e4672dec471
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
