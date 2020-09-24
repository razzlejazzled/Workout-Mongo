const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CardioSchema = new Schema({
    type: {
        type: String
    },
    
})

const Cardio = mongoose.model("Cardio", CardioSchema);

module.exports = Cardio;
