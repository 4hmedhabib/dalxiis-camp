import { gql } from "apollo-server-express";

const reviewDefs = gql`
  type Review {
    id: ID!
    rating: Int!
    body: String!
    campground: Campground
    campgroundId: Int
    author: User
    authorId: Int
  }
`;

export default reviewDefs;
