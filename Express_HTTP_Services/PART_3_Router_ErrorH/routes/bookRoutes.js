import {Router} from 'express';

const router = Router();

router.get('/', (req, res,) => {
    res.send('All bookes!');
});

router.get('/:id', (req, res, next) => {
    try {
        const id = req.params.id;

        if(isNaN(id)) {
            const err = new Error(`ID must be a number, got: ${id}`);
            err.status = 400;
            return next(err);
        }
    
        res.send(`Book ID: ${id}`);

    } catch(error) {
        next(error);
    }
});

router.post('/', (req, res) => {
    const {title, author} = req.body;

    if(!title || !author) {
        return res.status(400).send('Field required!');
    }

    res.status(201).send(`Added: ${title} by ${author}`);
});

export default router;