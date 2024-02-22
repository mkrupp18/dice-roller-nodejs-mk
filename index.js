const express = require('express');
const app = express();
const PORT = 3000; // Choose any port you prefer

// Set up a route for serving the homepage
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Set up a route for rolling the dice
app.get('/roll', (req, res) => {
    const result = Math.floor(Math.random() * 6) + 1; // Generate a random number between 1 and 6
    res.send(`You rolled a ${result}`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});