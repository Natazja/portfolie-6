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
            const response = await fetch("http://localhost:4000/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(logInData),
            });

            if (!response.ok) {
                throw new Error(`Error logging in. HTTP status ${response.status}`);
            }

            const userData = await response.json();

            // Redirect to user page or handle the response as needed
            console.log("Logged in successfully:", userData);
            // You can redirect or handle the user's profile here

        } catch (error) {
            console.error("Error during fetch:", error.message);
        }
    });
});
