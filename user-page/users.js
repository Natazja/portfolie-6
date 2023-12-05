const express = require("express");
const mysql = require("mysql2");
// const cors = require("cors");
const app = express();
const port = 3002;
// const ejs = require("ejs");

const connection = mysql.createConnection( {
    host: "localhost",
    user: "root",
    password: "Mkansakar12098",
    database: "cafes"
});

connection.connect((error) => {
    if (error) {
        console.log("error")
    } else {
        console.log("connected")
    }
});


let userArray = [];


connection.query("select * from users", function (err, result) {
    if (err) throw err;
    app.get("/users", (req, res) => {
        res.send(result)
        userArray = result
    })
});


console.log(userArray)
//const user1 =
// console.log(user1)



/* app.get("/users", (req, res) => {
    res.send(`${users}`)
})

 */
app.listen(port, () => {
    console.log("api is listening")
})


// document.querySelector(".demo").innerHTML = "hej"