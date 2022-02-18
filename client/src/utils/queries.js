import { gql } from '@apollo/client';


export const QUERY_ALL_EXERCISE = gql`
{
    exercise {
       _id
       title
       description
       image 
    }
}
`;

export const QUERY_ALL_NUTRITION = gql`
{
    nutrition {
        _id
       title
       description
       image 
    }
}
`;

export const QUERY_ALL_MEDITATION = gql`
{
    meditation {
        _id
        title
        description
        image 
    }
}`
