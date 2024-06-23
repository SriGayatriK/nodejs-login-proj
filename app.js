const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Middleware to parse the body of POST requests
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Set the view engine to EJS
app.set('view engine', 'ejs');
// app.set('view engine', 'html');
// app.engine('html', require('ejs').renderFile);

// GET route for the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// GET route for the login page
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    res.render('result', { username: username, password: password });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});