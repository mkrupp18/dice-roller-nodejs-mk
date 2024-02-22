const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// Define your API endpoints
app.get('/roll-dice', (req, res) => {
    // Logic to roll dice and generate random numbers
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    res.json({ result: diceRoll });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});