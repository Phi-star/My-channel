const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// Serve static files (image, HTML)
app.use(express.static(__dirname));

// Serve index.html only when accessing "/"
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
