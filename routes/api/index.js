const app = require("express").Router();
const db = require("../../models");


app.get("/workouts", async function(req, res){
    res.json(await db.Workout.find());
});

app.get("/workouts/range", async function(req, res){
    res.json(await db.Workout.find().limit(7));
});

app.post("/workouts", async function(req, res){
    res.json(await db.Workout.create(req.body));
});

app.put("/workouts/:id", async function (req, res) {
    res.json(await db.Workout.findByIdAndUpdate(req.params.id, req.body));
})

module.exports = app;