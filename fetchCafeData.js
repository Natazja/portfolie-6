fetch("http://localhost:4000/cafes")
    .then(res => res.json())
    .then(data => {
        console.log("Fetched data:", data);
        document.querySelector("#cafename").innerHTML = data[0].cafe_name;
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });