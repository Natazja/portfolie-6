const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const port = process.env.PORT;



const result = dotenv.config();

if (result.error) {
    throw result.error
}

console.log(result.parsed);

app.use(cors());
app.use(express.json());

const connection = mysql.createConnection( {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});