// Import the 'express' module
const express = require('express');

// Create an instance of the Express application
const app = express();

// Set the port number for the server
const port = 1245;

// Define a route for the root path ('/')
app.get('/', (request, response) => {
  // Send the response with the message 'Hello Holberton School!'
  response.send('Hello Holberton School!');
});

// Make the server listen on the specified port
app.listen(port, () => {
  // This callback is executed when the server starts listening
  console.log(`Server running at http://localhost:${port}/`);
});

// Export the 'app' (Express application) for use in other modules
module.exports = app;
