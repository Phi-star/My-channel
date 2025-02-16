const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

// Redirect when accessing the image URL
app.get("/your-image.jpg", (req, res) => {
    res.redirect("https://shorturl.at/FUrJH");
});

// Serve other static files
app.use(express.static(__dirname));

// Serve index.html when accessing "/"
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
