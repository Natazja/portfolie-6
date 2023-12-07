fetch("http://localhost:3002/users")
.then(res => res.json())
.then((data)=>{
    console.log(data)
    document.querySelector("#userCheckBTN").addEventListener("click", function userCheckFunction() {
        data.forEach(object => {
            if (object.user_name === document.querySelector("#userInput").value) {
                document.querySelector("#userName").innerHTML = object.user_name;
                document.querySelector("#userEmail").innerHTML = object.e_mail;
                document.querySelector("#userFavCafe").innerHTML = object.favorite_cafes;
                document.querySelector("#userID").innerHTML = object.user_id;
            }
        })
    })
});