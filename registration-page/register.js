document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submit");

    // Add an event listener to the submit button
    submitButton.addEventListener("click", async function () {
        // Get form data
        const form = document.getElementById("registrationForm");
        const formData = new FormData(form);

        // Convert form data to JSON
        const jsonData = {};
        formData.forEach((value, key) => {
            jsonData[key] = value;
        });

        try {
            // Send POST request to the server
            const response = await fetch("http://localhost:4000/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(jsonData),
            });

            if (!response.ok) {
                throw new Error(`Error submitting user data. HTTP status ${response.status}`);
            }

            // Handle response from the server (if needed)
            const data = await response.json();
            console.log(data);

            // Update the submit button text without the icon
            submitButton.textContent = 'Submitted';
        } catch (error) {
            console.error("Error:", error);
        }
    });
});


