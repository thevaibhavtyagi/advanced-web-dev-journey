import express from 'express';
import userRouter from './routes/userRoutes.js';
import productRouter from './routes/productRoutes.js';
import bookRoutes from './routes/bookRoutes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/users', userRouter);
app.use('/products', productRouter);
app.use('/books', bookRoutes);

app.get('/', (req, res) => {
    res.send('Server is alive!');
});

app.use((req, res) => {
    res.status(404).send(`Route not found: ${req.method} ${req.url}`);
});

//global handler 
app.use((err, req, res, next) => {
    const status = err.status || 500;
    res.status(status).send(err.message || 'Internal server error!');
});

app.listen(3000, () => {
    console.log("server is running");
});