const mongoose = require("mongoose");

const { Schema } = mongoose;

const exerciseSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },

});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;