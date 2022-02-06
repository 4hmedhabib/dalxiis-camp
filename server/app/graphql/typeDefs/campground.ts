import { gql } from "apollo-server-express";
const campgroundDefs = gql`
  type Campground {
    title: String
    location: String
    geometry: String
    author: String
    authorId: Int
    images: String
    description: String
    price: Int
    reviews: String
  }

  extend type Query {
    campgrounds: [Campground!]
  }
`;

export default campgroundDefs;
