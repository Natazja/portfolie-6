const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();
const port = 3002;
// const ejs = require("ejs");

app.use(cors());
app.use(express.json());

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