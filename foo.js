const mongoose = require("mongoose");


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});

const db = require ("./models");

db.Workout.find().then(dbWorkouts => {
   const workout = dbWorkouts[0];
   console.log(workout);
  
});