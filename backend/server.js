const express = require('express');
const cors = require('cors');
const pool = require('./database');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/products', async (req, res) => {
    const result = await pool.query('SELECT * FROM products');
    res.json(result.rows);
});

app.post('/api/products', async (req, res) => {
    const { name, description, price, stock, category, supplier } = req.body;
    await pool.query('INSERT INTO products (name, description, price, stock, category, supplier) VALUES ($1, $2, $3, $4, $5, $6)', 
        [name, description, price, stock, category, supplier]);
    res.sendStatus(201);
});

app.listen(5000, () => console.log('Backend corriendo en el puerto 5000'));
