const mongoose = require("mongoose");

const { Schema } = mongoose;

const nutritionSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String
    },
    image: {
        type: String
    },

});

const Nutrition = mongoose.model("Nutrition", nutritionSchema);

module.exports = Nutrition;