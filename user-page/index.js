let wrongCounter = 0;

fetch("http://localhost:3002/users")
.then(res => res.json())
.then((data)=> {
    document.querySelector("#userCheckBTN").addEventListener("click", function userCheckFunction() {
        data.forEach(object => {
            if (object.user_name === document.querySelector("#userInput").value && object.e_mail === document.querySelector("#userInput2").value) {
                document.querySelector("#userName").innerHTML = object.user_name;
                document.querySelector("#userEmail").innerHTML = object.e_mail;
                document.querySelector("#userFavCafe").innerHTML = object.favorite_cafes;
                document.querySelector("#userID").innerHTML = object.user_id;
            }

        })
        data.forEach(object => {
            if (object.user_name !== document.querySelector("#userInput").value || object.e_mail !== document.querySelector("#userInput2").value) {
                wrongCounter ++;
                if (wrongCounter === 10) { // would be good to find a way to not have it hardcoded - eg. use object.user_ID number, but i couldnt make it work :^(
                    alert("Wrong name/email")
                    wrongCounter -= 10;
                }

            }
        })

    })
});

