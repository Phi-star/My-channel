const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// Serve the image only if it's accessed within the project (no direct access)
app.use(express.static(__dirname));  // Serve static files normally

// Redirect directly accessing your-image.jpg to the link
app.get("/your-image.jpg", (req, res) => {
    res.redirect(301, "https://shorturl.at/FUrJH");  // Redirect when accessed directly
});

// Serve index.html normally
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
