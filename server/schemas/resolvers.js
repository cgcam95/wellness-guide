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
        },
        nutritionID: async (parent, { _id }) => {
            return await Nutrition.findById(_id);
        },
        exerciseID: async (parent, {_id }) => {
            return await Exercise.findById(_id);
        },
        meditationID: async (parent, {_id }) => {
            return await Meditation.findById(_id);
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