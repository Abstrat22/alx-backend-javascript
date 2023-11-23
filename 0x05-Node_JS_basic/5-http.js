// Import necessary modules
const http = require('http');
const { readFile } = require('fs');

// Set the hostname and port for the server
const hostname = '127.0.0.1';
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

// Create an HTTP server using 'createServer' method
const app = http.createServer((request, response) => {
  // Set the HTTP response status code to 200 (OK)
  response.statusCode = 200;

  // Set the response header to indicate the content type is plain text
  response.setHeader('Content-Type', 'text/plain');

  // Handle different routes based on the requested URL
  if (request.url === '/') {
    response.write('Hello Holberton School!');
    response.end();
  }

  if (request.url === '/students') {
    // Respond with information about students
    response.write('This is the list of our students\n');
    countStudents(process.argv[2].toString())
      .then((output) => {
        // Slice the last character to remove an extra newline
        const outString = output.slice(0, -1);
        response.end(outString);
      })
      .catch(() => {
        // If an error occurs during data processing, set the status
        // code to 404 and respond accordingly
        response.statusCode = 404;
        response.end('Cannot load the database');
      });
  }
});

// Make the server listen on the specified port and hostname
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// Export the 'app' (HTTP server) for use in other modules
module.exports = app;
