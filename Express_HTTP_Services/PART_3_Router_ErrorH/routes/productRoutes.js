// routes/productRoutes.js -----------

import {Router} from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.send('Here are all products');
});

router.get('/:id', (req, res) => {
    res.send(`Product ID: ${req.params.id}`);
});

export default router;