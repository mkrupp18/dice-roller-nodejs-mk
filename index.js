// index.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Define the endpoint to roll the dice
app.get('/roll-dice', (req, res) => {
    // Generate a random number between 1 and 6 (inclusive)
    const result = Math.floor(Math.random() * 6) + 1;
    res.json({ result });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
