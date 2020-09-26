const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
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
},
{ toJSON: { virtuals: true} }
);

const Workout = mongoose.model("Workout", workoutSchema);

workoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

module.exports = Workout