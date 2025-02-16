const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// Serve static files (including the image)
app.use(express.static(__dirname));

// Serve index.html at "/"
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
