const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { exec } = require("child_process");

const app = express();
const PORT = 10000;  

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(".")); 

// Operation function
function runCProgram(executable, a, b) {
    return new Promise((resolve, reject) => {
        exec(`./${executable} ${a} ${b}`, (error, stdout, stderr) => {
            console.log(`Running ./${executable} ${a} ${b}`);
            if (error) {
                console.error("Error:", error.message);
                reject(`Error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.error("Stderr:", stderr);
                reject(`Stderr: ${stderr}`);
                return;
            }

            console.log("Output from C program:", stdout);
            resolve(stdout.trim());
        });
    });
}


function mean(a, b) {
    return runCProgram("mean", a, b);
}
function gcd(a, b) {
    return runCProgram("gcd", a, b);
}
function lcm(a, b) {
    return runCProgram("lcm", a, b);
}

// Route to handling calculation
app.post("/calculate", async (req, res) => {
    const { num1, num2, operator } = req.body;
    console.log("Received:", req.body);

    if (isNaN(num1) || isNaN(num2)) {
        return res.json({ error: "Invalid input" });
    }

    let result;
    try {
        switch (operator) {
            case "mean":
                result = await mean(num1, num2);
                break;
            case "gcd":
                result = await gcd(num1, num2);
                break;
            case "lcm":
                result = await lcm(num1, num2);
                break;
            default:
                return res.json({ error: "Invalid operation" });
        }

        res.json({ result });
    } catch (err) {
        res.status(500).json({ error: err.toString() });
    }
});

// Start server 
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

