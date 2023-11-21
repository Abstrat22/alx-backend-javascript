// Import the 'readFile' method from the 'fs' module
const { readFile } = require('fs');

// Define a function 'countStudents' that takes a 'fileName' as a parameter
function countStudents(fileName) {
  // Initialize two empty objects to store student information and field counts
  const students = {};
  const fields = {};

  // Initialize a variable to keep track of the number of lines (students) in the file
  let length = 0;

  // Return a Promise to handle asynchronous file reading
  return new Promise((resolve, reject) => {
    // Use 'readFile' to asynchronously read the contents of the file
    readFile(fileName, (error, data) => {
      // If an error occurs during file reading, reject the Promise
      if (error) {
        reject(Error('Cannot load the database'));
      } else {
        // Split the file contents into an array of lines
        const lines = data.toString().split('\n');

        // Iterate through each line in the file
        for (let i = 0; i < lines.length; i += 1) {
          // Check if the line is not empty
          if (lines[i]) {
            // Increment the length counter for each non-empty line
            length += 1;

            // Split each line into fields using a comma as a delimiter
            const field = lines[i].toString().split(',');

            // Check if the field[3] (field identifier) exists in the 'students' object
            if (Object.prototype.hasOwnProperty.call(students, field[3])) {
              // If yes, push the student name (field[0]) to the existing array
              students[field[3]].push(field[0]);
            } else {
              // If not, create a new array with the student name
              students[field[3]] = [field[0]];
            }

            // Check if the field[3] (field identifier) exists in the 'fields' object
            if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
              // If yes, increment the count for that field
              fields[field[3]] += 1;
            } else {
              // If not, create a new entry with a count of 1
              fields[field[3]] = 1;
            }
          }
        }

        // Subtract 1 from the total length to exclude the header line
        const l = length - 1;

        // Display the total number of students in the database
        console.log(`Number of students: ${l}`);

        // Iterate through each field and display the number of students and their names
        for (const [key, value] of Object.entries(fields)) {
          // Skip the 'field' entry in the 'fields' object
          if (key !== 'field') {
            // Display the count and list of students for each field
            console.log(`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`);
          }
        }

        // Resolve the Promise with the file data
        resolve(data);
      }
    });
  });
}

// Export the 'countStudents' function for use in other modules
module.exports = countStudents;
