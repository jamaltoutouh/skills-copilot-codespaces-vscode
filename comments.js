// Create web server

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// Run the server
// $ node comments.js

// Open your browser and go to http://localhost:3000

// You will see "Hello World!" displayed on the page.

// Note: You can change the port number to any other number, such as 5000, 8000, etc. The port number must be between 0 and 65535.

// To stop the server, press Ctrl + C in the terminal
