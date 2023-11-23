// Import the 'readFile' method from the 'fs' module
const { readFile } = require('fs');

// Export a function named 'readDatabase' that takes a 'filePath' parameter
module.exports = function readDatabase(filePath) {
  // Initialize an empty object to store student information
  const students = {};

  // Return a Promise to handle asynchronous file reading
  return new Promise((resolve, reject) => {
    // Use 'readFile' to asynchronously read the contents of the file
    readFile(filePath, (err, data) => {
      // If an error occurs during file reading, reject the Promise
      if (err) {
        reject(err);
      } else {
        // Convert the file data to a string and split it into lines
        const lines = data.toString().split('\n');

        // Remove the header line and store the remaining lines in 'noHeader'
        const noHeader = lines.slice(1);

        // Iterate through each line in 'noHeader' to process student data
        for (let i = 0; i < noHeader.length; i += 1) {
          // Check if the line is not empty
          if (noHeader[i]) {
            // Split each line into fields using a comma as a delimiter
            const field = noHeader[i].toString().split(',');

            // Update the 'students' object with the student information
            if (Object.prototype.hasOwnProperty.call(students, field[3])) {
              students[field[3]].push(field[0]);
            } else {
              students[field[3]] = [field[0]];
            }
          }
        }

        // Resolve the Promise with the 'students' object
        resolve(students);
      }
    });
  });
};
