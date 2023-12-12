const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const port = 4000;

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    port: 3306,
    password: "Jcv36qyk",
    database: "cafes",
    connectionLimit: 10, // Adjust as needed
});

app.listen(port, () => {
    console.log(`server listening on port ${port}`)

});

app.use(express.json());
app.use(cors());



app.get('/cafes', (req, res) => {
    pool.query('SELECT * FROM cafes', (error, results, fields) => {
        if (error) {
            console.error("Error retrieving cafes:", error);
            res.status(500).json({ error: "Internal Server Error", details: error.message });
        } else {
            res.json(results);
        }
    });
});

app.get('*', (req, res) => {
    res.status(404).json({error: 'Not found'})
});