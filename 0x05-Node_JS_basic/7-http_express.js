// Import the 'express' module and 'readFile' method from 'fs'
const express = require('express');
const { readFile } = require('fs');

// Create an instance of the Express application
const app = express();

// Set the port number for the server
const port = 1245;

// Define a function 'countStudents' that reads a file and processes student data
function countStudents(fileName) {
  // Initialize data structures to store student information and field counts
  const students = {};
  const fields = {};
  let length = 0;

  // Return a Promise to handle asynchronous file reading
  return new Promise((resolve, reject) => {
    // Use 'readFile' to asynchronously read the contents of the file
    readFile(fileName, (err, data) => {
      // If an error occurs during file reading, reject the Promise
      if (err) {
        reject(err);
      } else {
        // Process the data and accumulate the output
        let output = '';
        const lines = data.toString().split('\n');
        for (let i = 0; i < lines.length; i += 1) {
          if (lines[i]) {
            length += 1;
            const field = lines[i].toString().split(',');

            // Update the 'students' object
            if (Object.prototype.hasOwnProperty.call(students, field[3])) {
              students[field[3]].push(field[0]);
            } else {
              students[field[3]] = [field[0]];
            }

            // Update the 'fields' object
            if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
              fields[field[3]] += 1;
            } else {
              fields[field[3]] = 1;
            }
          }
        }

        // Calculate the total number of students
        const l = length - 1;
        output += `Number of students: ${l}\n`;

        // Create a string with information about students in each field
        for (const [key, value] of Object.entries(fields)) {
          if (key !== 'field') {
            output += `Number of students in ${key}: ${value}. `;
            output += `List: ${students[key].join(', ')}\n`;
          }
        }

        // Resolve the Promise with the output
        resolve(output);
      }
    });
  });
}

// Define a route for the root path ('/')
app.get('/', (request, response) => {
  // Send the response with the message 'Hello Holberton School!'
  response.send('Hello Holberton School!');
});

// Define a route for the '/students' path
app.get('/students', (request, response) => {
  // Process student data and respond with the information
  countStudents(process.argv[2].toString())
    .then((output) => {
      // Concatenate the response messages and send the response
      response.send(['This is the list of our students', output].join('\n'));
    })
    .catch(() => {
      // If an error occurs during data processing, send an alternative response
      response.send('This is the list of our students\nCannot load the database');
    });
});

// Make the server listen on the specified port
app.listen(port, () => {
  // This callback is executed when the server starts listening
  console.log(`Server running at http://localhost:${port}/`);
});

// Export the 'app' (Express application) for use in other modules
module.exports = app;
