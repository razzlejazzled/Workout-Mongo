let mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkOutSchema = new Schema({
  type: String,
  name: String,
  duration: Number,
  weight: Number,
  reps: Number,
  sets: Number,
})

const WorkOut = mongoose.model("WorkOut", WorkOutSchema)

module.exports = WorkOut