import { gql } from "@apollo/client";

export const CAMGROUNDS = gql`
  query Campgrounds {
    campgrounds {
      id
      title
      location
      geometry {
        Id
        lng
        lat
        type
      }
      author {
        username
        firstName
        lastName
      }
      images {
        url
      }
      description
      price
      reviews {
        id
        rating
      }
    }
  }
`;
