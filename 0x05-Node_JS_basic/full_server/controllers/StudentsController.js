// Import the 'readDatabase' utility function from the '../utils' module
const readDatabase = require('../utils');

// Define a class 'StudentsController' to handle student-related routes
class StudentsController {
  // Static method to get all students
  static getAllStudents(request, response) {
    // Use 'readDatabase' to retrieve student data
    readDatabase(process.argv[2].toString())
      .then((students) => {
        const output = [];

        // Add a header to the output
        output.push('This is the list of our students');

        // Get the keys (majors) and sort them
        const keys = Object.keys(students).sort();

        // Iterate through majors and build the output
        for (let i = 0; i < keys.length; i += 1) {
          output.push(`Number of students in ${keys[i]}: ${students[keys[i]].length}. List: ${students[keys[i]].join(', ')}`);
        }

        // Send a successful response with the generated output
        response.status(200).send(output.join('\n'));
      })
      .catch(() => {
        // Handle errors by sending an appropriate response
        response.status(500).send('Cannot load the database');
      });
  }

  // Static method to get students by major
  static getAllStudentsByMajor(request, response) {
    // Extract the 'major' parameter from the request
    const field = request.params.major;

    // Use 'readDatabase' to retrieve student data
    readDatabase(process.argv[2].toString())
      .then((students) => {
        // Check if the requested major exists in the data
        if (!(field in students)) {
          response.status(500).send('Major parameter must be CS or SWE');
        } else {
          // Send a successful response with the list of students in the requested major
          response.status(200).send(`List: ${students[field].join(', ')}`);
        }
      })
      .catch(() => {
        // Handle errors by sending an appropriate response
        response.status(500).send('Cannot load the database');
      });
  }
}

// Export the 'StudentsController' class for use in other modules
module.exports = StudentsController;
