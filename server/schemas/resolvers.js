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

    },
    Mutation: {
        updateExercise: async (parent, { _id, description }) => {

            return await Exercise.findByIdAndUpdate(_id, { description: description }, {new: true});
          },
        updateNutrition: async (parent, { _id, description }) => {

            return await Nutrition.findByIdAndUpdate(_id, { description: description }, {new: true});
          },
        updateMeditation: async (parent, { _id, description }) => {

            return await Exercise.findByIdAndUpdate(_id, { description: description }, {new: true});
          }
    }

};

module.exports = resolvers;