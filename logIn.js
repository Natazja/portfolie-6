document.addEventListener("DOMContentLoaded", function () {
    const logInButton = document.getElementById("logIn");

    logInButton.addEventListener("click", async function () {
        const logInForm = document.getElementById("logInForm");
        const formData = new FormData(logInForm);

        const logInData = {};
        formData.forEach((value, key) => {
            logInData[key] = value;
        });

        try {
            const response = await fetch("http://localhost:3000/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(logInData),
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Error logging in. HTTP status ${response.status}. Response: ${errorText}`);
            }

            const userData = await response.json();

            // Redirect to user page
            window.location.href = "/userpage.html"; // Replace with your actual user page URL

        } catch (error) {
            console.error("Error during fetch:", error.message);
        }
    });
});
