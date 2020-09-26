const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  excersies: [
    {
      type: {
        type: String,
        trim: true,
        required: "type of exercise is required"
      },
      name: {
        type: String,
        trim: true,
        required: "name of exercise is required"
      },
      duration: {
        type: Number,
        required: "Duration is required"
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);



module.exports = Workout