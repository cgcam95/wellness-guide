const mongoose = require("mongoose");

const { Schema } = mongoose;

const meditationSchema = new Schema({
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

const Meditation = mongoose.model("Meditation", meditationSchema);

module.exports = Meditation;