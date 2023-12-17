// *** Jonathan's section begins ***

// importing all libraries
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const port = 4000;


const result = dotenv.config();

if (result.error) {
    throw result.error
}

console.log(result.parsed);

app.use(cors());
app.use(express.json());

// creating connection to mysql
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: 3306,
    password: "Mkansakar12098",
    database: "cafes",
});

// check to see if api is connected
connection.connect((error) => {
    if (error) {
        console.log("error")
    } else {
        console.log("connected")
    }
});

// 1st query, giving db on users.
app.get("/users", (req, res) =>{
    console.log("asd0");
    connection.query("select * from users", function (err, result){
        if (err){
            console.log(err.message);
        }
        console.log(result)
        res.send(result)
    })
});

// 2nd query, giving db on cafes
app.get("/cafes", (req, res) =>{
    console.log("asd0");
    connection.query("select * from cafes", function (err, result){
        if (err){
            console.log(err.message);
        }
        console.log(result)
        res.send(result)
    })
});


// listen-check
app.listen(port, () => {
    console.log("api is listening")
})


// *** Jonathan's section end ***