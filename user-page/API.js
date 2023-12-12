const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const port = 3002;


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

connection.connect((error) => {
    if (error) {
        console.log("error")
    } else {
        console.log("connected")
    }
});


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





app.get("/", (req, res)=>{
   res.send("everything ok");
});



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