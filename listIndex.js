// *** Jonathan's section begins ***

// function that removes the css:display from the listings.
function removeDisplay() {
    document.querySelector("#cafe1").style.display = "none";
    document.querySelector("#cafe2").style.display = "none";
    document.querySelector("#cafe3").style.display = "none";
    document.querySelector("#cafe4").style.display = "none";
    document.querySelector("#cafe5").style.display = "none";
    document.querySelector("#cafe6").style.display = "none";
    document.querySelector("#cafe7").style.display = "none";
    document.querySelector("#cafe8").style.display = "none";
    document.querySelector("#cafe9").style.display = "none";
    document.querySelector("#cafe10").style.display = "none";
    document.querySelector("#cafe11").style.display = "none";
    document.querySelector("#cafe12").style.display = "none";
    document.querySelector("#cafe13").style.display = "none";
}

// fetching the data.
fetch("http://localhost:4000/cafes")
    .then(res => res.json())
    .then((data)=> {
        // removing the initial displays so the site is clean on load.
        removeDisplay();

        // eventlistener that works when the dropdown menu has a change, which then removes any displaying elements and
        // then depending on what the dropdown matches, it will display however many elements are needed.

        // sadly havent been able to find a solution to the inline block code repition - tried my hand with functions
        // and forloops but couldnt make it work.
        document.querySelector("#dropDownSelect").addEventListener("change", function cafeList() {

            removeDisplay();

            if (document.querySelector("#dropDownSelect").value === "all") {
                document.querySelector('#cafe1').style.display = "inline-block";
                document.querySelector("#cafe2").style.display = "inline-block";
                document.querySelector("#cafe3").style.display = "inline-block";
                document.querySelector("#cafe4").style.display = "inline-block";
                document.querySelector("#cafe5").style.display = "inline-block";
                document.querySelector("#cafe6").style.display = "inline-block";
                document.querySelector("#cafe7").style.display = "inline-block";
                document.querySelector("#cafe8").style.display = "inline-block";
                document.querySelector("#cafe9").style.display = "inline-block";
                document.querySelector("#cafe10").style.display = "inline-block";
                document.querySelector("#cafe11").style.display = "inline-block";
                document.querySelector("#cafe12").style.display = "inline-block";
                document.querySelector("#cafe13").style.display = "inline-block";

                document.querySelector("#cafe1").innerHTML = data[0].cafe_name;
                document.querySelector("#cafe2").innerHTML = data[1].cafe_name;
                document.querySelector("#cafe3").innerHTML = data[2].cafe_name;
                document.querySelector("#cafe4").innerHTML = data[3].cafe_name;
                document.querySelector("#cafe5").innerHTML = data[4].cafe_name;
                document.querySelector("#cafe6").innerHTML = data[5].cafe_name;
                document.querySelector("#cafe7").innerHTML = data[6].cafe_name;
                document.querySelector("#cafe8").innerHTML = data[7].cafe_name;
                document.querySelector("#cafe9").innerHTML = data[8].cafe_name;
                document.querySelector("#cafe10").innerHTML = data[9].cafe_name;
                document.querySelector("#cafe11").innerHTML = data[10].cafe_name;
                document.querySelector("#cafe12").innerHTML = data[11].cafe_name;
                document.querySelector("#cafe13").innerHTML = data[12].cafe_name;
            }
            if (document.querySelector("#dropDownSelect").value === "Nørrebro") {
                document.querySelector("#cafe1").style.display = "inline-block";
                document.querySelector("#cafe2").style.display = "inline-block";

                document.querySelector("#cafe1").innerHTML = data[3].cafe_name;
                document.querySelector("#cafe2").innerHTML = data[5].cafe_name;
            }
            if (document.querySelector("#dropDownSelect").value === "Vesterbro") {
                document.querySelector("#cafe1").style.display = "inline-block";
                document.querySelector("#cafe2").style.display = "inline-block";
                document.querySelector("#cafe3").style.display = "inline-block";

                document.querySelector("#cafe1").innerHTML = data[4].cafe_name;
                document.querySelector("#cafe2").innerHTML = data[8].cafe_name;
                document.querySelector("#cafe3").innerHTML = data[10].cafe_name;
            }
            if (document.querySelector("#dropDownSelect").value === "København K") {
                document.querySelector("#cafe1").style.display = "inline-block";
                document.querySelector("#cafe2").style.display = "inline-block";
                document.querySelector("#cafe3").style.display = "inline-block";
                document.querySelector("#cafe4").style.display = "inline-block";
                document.querySelector("#cafe5").style.display = "inline-block";
                document.querySelector("#cafe6").style.display = "inline-block";
                document.querySelector("#cafe7").style.display = "inline-block";
                document.querySelector("#cafe8").style.display = "inline-block";

                document.querySelector("#cafe1").innerHTML = data[0].cafe_name;
                document.querySelector("#cafe2").innerHTML = data[1].cafe_name;
                document.querySelector("#cafe3").innerHTML = data[2].cafe_name;
                document.querySelector("#cafe4").innerHTML = data[6].cafe_name;
                document.querySelector("#cafe5").innerHTML = data[7].cafe_name;
                document.querySelector("#cafe6").innerHTML = data[9].cafe_name;
                document.querySelector("#cafe7").innerHTML = data[11].cafe_name;
                document.querySelector("#cafe8").innerHTML = data[12].cafe_name;
            }
        })
    })

// *** Jonathan's section end ***