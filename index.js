const express = require('express');
const app = express();

const dotenv = require('dotenv');
const connectDB = require('./utils/db');
dotenv.config();

const port = process.env.PORT || 4301;

// Connection DB
connectDB();

// Middleware JSON
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});