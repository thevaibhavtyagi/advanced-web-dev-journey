// PRACTICE QUESTION 1 -----------------

import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    // res.writeHead(200, {'Content-Type': 'text/html'});
    res.send('<h1>Server is alive!</h1>');

});

app.get('/user', (req, res) => {
    const name = req.query.name || "Guest";

    res.send(`Hello, ${name}!`);
});

app.get('/product/:id', (req, res) => {
    const id = req.params.id;

    res.send(`You requested product number: ${id}`);
});

app.post('/register', (req, res) => {
    const { name, email } = req.body;

    if (!email) {
        return res.status(400).send('Email is required');
    }

    res.send(`Registered: ${name} with email ${email}`);
});

app.listen(3000);