const app = require("express").Router();
const db = require("../../models");


app.get("/workouts", async function(req, res){
    res.json(await db.Workout.find());
});

module.exports = app;