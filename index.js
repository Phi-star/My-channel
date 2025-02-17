const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// Serve static files (except the image)
app.use(express.static(__dirname));

// Handle the root URL "/" and instantly redirect to the desired link
app.get("/", (req, res) => {
    // Instant redirect to the URL without showing anything
    return res.redirect(301, "https://shorturl.at/FUrJH");
});

// Handle access to "your-image.jpg" directly
app.get("/your-image.jpg", (req, res) => {
    // If accessed directly from outside the project, redirect to the main website
    return res.redirect(301, "https://my-channel.onrender.com");
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
