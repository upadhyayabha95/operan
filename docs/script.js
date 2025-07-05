function calculate() {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    const operation = document.querySelector('input[name="operation"]:checked').value;

    // Send request to backend
    fetch("http://localhost:10000/calculate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ num1, num2, operator: operation }), 
    })
    .then(response => response.json())
    .then(data => {
        console.log("Response from server:", data); // log for debugging

        if (data.result !== undefined) {
            document.getElementById("result").innerText = data.result;
        } else if (data.error) {
            document.getElementById("result").innerText = `Error: ${data.error}`;
        } else {
            document.getElementById("result").innerText = "Unexpected response.";
        }
    })
    .catch(error => {
        console.error("Fetch error:", error);
        document.getElementById("result").innerText = "Server error occurred.";
    });
}

