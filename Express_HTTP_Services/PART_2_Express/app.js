import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome Home!');
});

app.get('/about', (req, res) => {
    res.send('This is the about page.');
});

app.listen(3000);