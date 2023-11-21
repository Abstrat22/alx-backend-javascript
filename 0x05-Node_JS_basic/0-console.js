// priint to stdout the string parsed as argument

function displayMessage(arg) {
  process.stdout.write(`${arg}\n`);
}

module.exports = displayMessage;
