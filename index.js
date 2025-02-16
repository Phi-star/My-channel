const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// Serve static files (except the image when accessed directly)
app.use(express.static(__dirname, {
    setHeaders: (res, filePath) => {
        if (filePath.endsWith("your-image.jpg")) {
            res.redirect(301, "https://shorturl.at/FUrJH"); // Redirect instantly if accessed directly
        }
    }
}));

// Serve index.html at "/"
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Serve the image normally inside the project
app.get("/your-image.jpg", (req, res) => {
    const referrer = req.get("Referer");

    if (!referrer || !referrer.includes("my-channel.onrender.com")) {
        // If accessed directly (not from your site), redirect
        res.redirect("https://shorturl.at/FUrJH");
    } else {
        // Otherwise, serve the image normally
        res.sendFile(path.join(__dirname, "your-image.jpg"));
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
