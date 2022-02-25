const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Exercise {
        _id: ID!
        title: String
        description: String
        image: String
    }
    type Nutrition {
        _id: ID!
        title: String
        description: String
        image: String
    }
    type Meditation {
        _id: ID!
        title: String
        description: String
        image: String
    }

    type Query {
        exercise: [Exercise]
        exerciseID(_id: ID!): Exercise
        nutrition: [Nutrition]
        nutritionID(_id: ID!): Nutrition
        meditation: [Meditation]
        meditationID(_id: ID!): Meditation

    }

    type Mutation {
        updateExercise(_id: ID!, description: String!): Exercise
        updateNutrition(_id: ID!, description: String!): Nutrition
        updateMeditation(_id: ID!, description: String!): Meditation
    }
     

`;


module.exports = typeDefs;