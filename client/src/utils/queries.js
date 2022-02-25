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

export const QUERY_NUTRITION_ID = gql`
query($id: ID!) {
    nutritionID(_id: $id) {
      _id
      title
      description
      image
    } 
  }
`

export const QUERY_ALL_MEDITATION = gql`
{
    meditation {
        _id
        title
        description
        image 
    }
}`
