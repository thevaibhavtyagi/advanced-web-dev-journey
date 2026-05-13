// ADDING GET AND POST ---------------

import express from 'express';
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send(`
        <html>
        <body>
            <h2>Login Test</h2>
            <form action="/login" method="POST">
                <input type="text"     name="username" placeholder="Username" />
                <input type="password" name="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>

            <h2>Greet Test</h2>
            <a href="/greet?name=Arjun">Click to greet Arjun</a>
        </body>
        </html>
    `);
});

app.get('/greet', (req, res) => {
    // req.query reads ?name=Arjun from the URL
    const name = req.query.name || 'stranger';
    res.send(`Hello, ${name}`);
});

app.post('/login', (req, res) => {
    const {username, password} = req.body;

    if(username === 'arjun' && password === '1234') {
        res.status(200).send('Login success');
    } else {
        res.status(401).send('Login failed');
    }
});

app.listen(3000);