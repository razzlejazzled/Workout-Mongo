const path = require("path");
const app = require("express").Router()

const publicDir = path.resolve(__dirname, "../public");
app.use("/api", require("./api"));

app.get("/stats", function (req, res) {
    res.sendFile(path.resolve(publicDir, "stats.html"));
});

module.exports = app;