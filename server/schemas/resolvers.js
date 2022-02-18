const { Nutrition, Meditation, Exercise } = require('../models');


const resolvers = {
    Query: {
        nutrition: async () => {
            return await Nutrition.find();
        },
        meditation: async () => {
            return await Meditation.find();
        },
        exercise: async () => {
            return await Exercise.find();
        }

    }

};

module.exports = resolvers;