fetch("http://localhost:3002/cafes")
    .then(res => res.json())
    .then((data)=> { // add a removal of the previously loaded cafes after the eventListener.
        document.querySelector("#dropDownSelect").addEventListener("change", function cafeList() {
            document.querySelector("#cafe1").innerHTML = "";
            document.querySelector("#cafe2").innerHTML = "";
            document.querySelector("#cafe3").innerHTML = "";
            document.querySelector("#cafe4").innerHTML = "";
            document.querySelector("#cafe5").innerHTML = "";
            document.querySelector("#cafe6").innerHTML = "";
            document.querySelector("#cafe7").innerHTML = "";
            document.querySelector("#cafe8").innerHTML = "";
            document.querySelector("#cafe9").innerHTML = "";
            document.querySelector("#cafe10").innerHTML = "";
            document.querySelector("#cafe11").innerHTML = "";
            document.querySelector("#cafe12").innerHTML = "";
            document.querySelector("#cafe13").innerHTML = "";

            if (document.querySelector("#dropDownSelect").value === "all") {

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

                document.querySelector("#cafe1").innerHTML = data[3].cafe_name;
                document.querySelector("#cafe2").innerHTML = data[5].cafe_name;
            }
            if (document.querySelector("#dropDownSelect").value === "Vesterbro") {

                document.querySelector("#cafe1").innerHTML = data[4].cafe_name;
                document.querySelector("#cafe2").innerHTML = data[8].cafe_name;
                document.querySelector("#cafe3").innerHTML = data[10].cafe_name;
            }
            if (document.querySelector("#dropDownSelect").value === "København K") {

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


