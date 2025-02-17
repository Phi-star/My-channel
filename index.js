const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// Serve static files normally
app.use(express.static(__dirname));

// Redirect root URL "/" instantly to the desired link
app.get("/", (req, res) => {
    res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");
    return res.redirect(302, "https://shorturl.at/FUrJH"); // Temporary Redirect (Works for all browsers)
});

// Ensure "/your-image.jpg" always redirects to the main domain
app.get("/your-image.jpg", (req, res) => {
    res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");
    return res.redirect(302, "https://my-channel.onrender.com"); // Temporary Redirect (Fixes caching issues)
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
