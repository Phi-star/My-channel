const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// Redirect requests to "/your-image.jpg" to the main domain
app.get("/your-image.jpg", (req, res) => {
    res.redirect(301, "https://my-channel.onrender.com");
});

// Serve static files
app.use(express.static(__dirname));

// Handle the root URL "/" and instantly redirect to the desired link
app.get("/", (req, res) => {
    res.redirect(301, "https://shorturl.at/FUrJH");
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
