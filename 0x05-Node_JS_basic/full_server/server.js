const express = require('express');
const router = require('./routes/index');

const app = express();
const port = 1245;

// Use the router for different paths
app.use('/', router);
app.use('/students', router);
app.use('/students/:major', router);

// Listen on the specified port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

// Export the app for use in other modules
module.exports = app;
