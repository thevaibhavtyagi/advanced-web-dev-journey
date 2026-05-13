// routes/userRoutes.js

import {Router} from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.send('Here are all users!');
});

router.get('/:id', (req, res) => {
    const id = req.params.id;

    res.send(`User details for ID: ${id}`);
});

router.post('/register', (req, res) => {
    const {name, email} = req.body;

    if(!name || !email) {
        return res.status(400).send('Name and email are required');
    }

    res.status(201).send(`User created: ${name}`);
});

export default router;