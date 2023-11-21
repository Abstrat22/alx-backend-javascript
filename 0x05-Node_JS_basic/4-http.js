// Import the 'http' module to create an HTTP server
const http = require('http');

// Set the hostname and port for the server
const hostname = '127.0.0.1';
const port = 1245;

// Create an HTTP server using the 'http.createServer' method
const app = http.createServer((request, response) => {
  // Set the response status code to 200 (OK)
  response.statusCode = 200;

  // Set the response header to indicate the content type is plain text
  response.setHeader('Content-Type', 'text/plain');

  // Write the response message to the client
  response.end('Hello Holberton School!');
});

// Make the server listen on the specified port and hostname
app.listen(port, hostname, () => {
  // This callback is executed when the server starts listening
  console.log(`Server running at http://${hostname}:${port}/`);
});

// Export the 'app' (HTTP server) for use in other modules
module.exports = app;
