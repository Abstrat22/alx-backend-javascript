// Write a message to the standard output (stdout)
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listen for data on the standard input (stdin)
process.stdin.on('data', (data) => {
  // Convert the received data to a string and remove leading/trailing whitespaces
  const name = data.toString().trim();

  // Write a message to the standard output with the provided name
  process.stdout.write(`Your name is: ${name}\n`);

  // Write a closing message to the standard output
  process.stdout.write('This important software is now closing\n');
});
