fetch("http://localhost:4000/cafes")
    .then(res => res.json())
    .then(data => {
        console.log("Fetched data:", data);
        document.querySelector("#cafename").innerText = data[0].cafe_name;
        document.querySelector("#cafename1").innerText = data[1].cafe_name;
        document.querySelector("#cafename2").innerText = data[2].cafe_name;
        document.querySelector("#cafename3").innerText = data[3].cafe_name;
        document.querySelector("#cafename4").innerText = data[4].cafe_name;


    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });
