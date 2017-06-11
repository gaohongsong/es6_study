/**
 * As an asynchronous event driven JavaScript runtime, Node is designed to build 
 * scalable network applications. In the following "hello world" example, 
 * many connections can be handled concurrently. Upon each connection the callback is fired, 
 * but if there is no work to be done Node is sleeping.
 */

const http = require('http');

const hostname = 'localhost';

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
