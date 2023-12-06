fetch("http://localhost:3002/users")
.then(res => res.json())
.then((data)=>{
    console.log(data)
})