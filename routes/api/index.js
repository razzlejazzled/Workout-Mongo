const app = require("express").Router();

app.get("/", function(req, res){
    res.send("Hello from the API!");
})

module.exports = app;