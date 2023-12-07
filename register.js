// Add an event listener to execute the code when the document is ready
document.addEventListener("DOMContentLoaded", function () {
    // Add an event listener to the submit button
    document.getElementById("submit").addEventListener("click", function () {
        // Get form data
        const form = document.getElementById("registrationForm");
        const formData = new FormData(form);

        // Convert form data to JSON
        const jsonData = {};
        formData.forEach((value, key) => {
            jsonData[key] = value;
        });

        // Send POST request to the server
        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(jsonData),
        })
            .then(response => response.json())
            .then(data => {
                // Handle response from the server (if needed)
                console.log(data);
            })
            .catch(error => {
                console.error("Error:", error);
            });
    });
});
