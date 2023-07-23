// Import Express.js and Import built-in Node.js package 'path' to resolve path of files that are located on the server
const express = require('express');
const path = require('path');

// Initialize an instance of Express.js
const app = express();

// Specify on which port the Express.js server will run
const PORT = 3001;

// Static middleware pointing to the public folder
app.use(express.static('public'));

// Create Express.js routes for default '/' and '/notes' endpoints
app.get('/', (req, res) => res.send('Navigate to /notes'));

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);

// listen() method is responsible for listening for incoming connections on the specified port 
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
