let wrongCounter = 0;

fetch("http://localhost:4000/users")
.then(res => res.json())
.then((data)=> {
    document.querySelector("#userCheckBTN").addEventListener("click", function userCheckFunction() {
        data.forEach(object => {
            if (object.e_mail === document.querySelector("#userInput").value && object.password === document.querySelector("#userInput2").value) {
                document.querySelector("#userInfoBox").style.display = "inline";
                document.querySelector("#userName").innerHTML = object.user_name;
                document.querySelector("#userEmail").innerHTML = object.e_mail;
                document.querySelector("#userFavCafe").innerHTML = object.favorite_cafes;
                document.querySelector("#userID").innerHTML = object.user_id;
            }

        })
        data.forEach(object => {
            if (object.e_mail !== document.querySelector("#userInput").value || object.password !== document.querySelector("#userInput2").value) {
                wrongCounter ++;
                if (wrongCounter === data.length) {
                    alert("Wrong name/email")
                    wrongCounter -= data.length;
                }
            } else {
                wrongCounter -= data.length - 1;
            }
        })

    })
});

