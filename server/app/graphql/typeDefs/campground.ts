import { gql } from "apollo-server-express";
const campgroundDefs = gql`
  type Campground {
    id: ID!
    title: String!
    location: String!
    geometry: Geometry!
    author: User!
    authorId: Int!
    images: [CampImages!]
    description: String
    price: Int!
    reviews: [Review!]
  }

  extend type Query {
    campgrounds: [Campground!]
  }
`;

export default campgroundDefs;
