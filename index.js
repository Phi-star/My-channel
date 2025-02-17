const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// Redirect /your-image.jpg to main domain
app.get("/your-image.jpg", (req, res) => {
    res.redirect(301, "https://my-channel.onrender.com");
});

// Redirect root URL instantly to another link
app.get("/", (req, res) => {
    res.redirect(301, "https://shorturl.at/FUrJH");
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
