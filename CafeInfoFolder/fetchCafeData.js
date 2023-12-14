// Example GET request to /cafes endpoint
fetch("http://localhost:4000/cafes")
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Data from /cafes endpoint:', data);
    })
    .catch(error => {
        console.error('Fetch error:', error.message);
    });