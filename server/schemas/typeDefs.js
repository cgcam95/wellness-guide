const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Exercise {
        _id: ID
        title: String
        description: String
        image: String
    }
    type Nutrition {
        _id: ID
        title: String
        description: String
        image: String
    }
    type Meditation {
        _id: ID
        title: String
        description: String
        image: String
    }

    type Query {
        exercise: [Exercise]
        nutrition: [Nutrition]
        meditation: [Meditation]
        
    }

`;


module.exports = typeDefs;