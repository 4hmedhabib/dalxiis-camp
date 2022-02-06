import { gql } from "apollo-server-express";

const userDefs = gql`
  type User {
    username: String
    firstName: String
    lastName: String
    campgrounds: [Campground!]
    reviews: [Review!]
  }
`;

export default userDefs;
