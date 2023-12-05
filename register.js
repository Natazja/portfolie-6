const cafeList = document.querySelector("#all-cafes");
const submitButton = document.querySelector("#submit");
const form = document.querySelector("#registrationForm"); // Ensure form is defined

// Fetch all cafes
fetch("http://localhost:63342/cafes")
    .then(response => response.json())
    .then(data => {
        data.forEach(cafe => {
            const newElement = document.createElement("li");
            newElement.innerText = `${cafe.cafe_name} - ${cafe.address}, ${cafe.postal_code}, ${cafe.area}, ${cafe.city} (${cafe.stars} stars)`;
            cafeList.appendChild(newElement);
        });
    })
    .catch(error => {
        console.error("Error fetching cafes:", error.message);

        // Capture the response for further debugging
        error.response.text().then(text => console.error("Response text:", text));

        // You can also add more specific checks or handling based on the response text
    });

// Example of submitting new cafe data
submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const formDataObject = {};
    formData.forEach((value, key) => {
        formDataObject[key] = value;
    });

    fetch("http://localhost:63342/cafes", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formDataObject)
    })
        .then(response => response.json())
        .then(data => {
            // Handle the response from the server
            console.log(data);
        })
        .catch(error => {
            console.error("Error submitting cafe data:", error);
        });
});
