const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Generate a random number between 1 and 6 (for a six-sided die)
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

// Route for rolling the dice
app.get('/roll', (req, res) => {
    const result = rollDice();
    res.json({ result });
});

// Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});