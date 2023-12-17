// *** Jonathan's section begins ***

// wrongCounter used to make the errormessage work.
let wrongCounter = 0;

// fetching user db.
fetch("http://localhost:4000/users")
.then(res => res.json())
.then((data)=> {
    // eventlistener on login click.
    document.querySelector("#userCheckBTN").addEventListener("click", function userCheckFunction() {
        // 1st forEach so it goes thru every object in the json.
        data.forEach(object => {
            // if email & password matches, it will fill out the info.
            if (object.e_mail === document.querySelector("#userInput").value && object.password === document.querySelector("#userInput2").value) {
                document.querySelector("#userInfoBox").style.display = "inline";
                document.querySelector("#userName").innerHTML = object.user_name;
                document.querySelector("#userEmail").innerHTML = object.e_mail;
                document.querySelector("#userFavCafe").innerHTML = object.favorite_cafes;
                document.querySelector("#userID").innerHTML = object.user_id;
            }

        })
        // 2nd forEach so it goes thru every object.
        data.forEach(object => {
            // checks if email or password doesnt match, it will add +1 to the wrongcounter.
            if (object.e_mail !== document.querySelector("#userInput").value || object.password !== document.querySelector("#userInput2").value) {
                wrongCounter ++;
                // if wrongcounter = data.length, it will give error message. Then wrongcounter resets back to 0 by subtracting data.length or data.length -1.
                if (wrongCounter === data.length) {
                    alert("Wrong name/email")
                    wrongCounter -= data.length;
                }
            } else {
                wrongCounter -= data.length - 1;
            }
        })
            // there potentially could have been a smarter way to do error messaging - That being
            // simply just making an if else statement on the 1st forEach, where the else statement would do
            // an error alert.
    })
});

// *** Jonathan's section end ***