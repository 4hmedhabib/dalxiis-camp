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
    price: Float!
    reviews: [Review!]
  }

  input ImagesInput {
    url: String!
  }

  input GeometryDataInput {
    lng: Float!
    lat: Float!
  }

  input CampgroundInput {
    title: String!
    location: String!
    authorId: Int!
    images: [ImagesInput!]!
    geometry: GeometryDataInput
    description: String!
    price: Float!
  }

  extend type Query {
    campgrounds: [Campground!]
    campground(id: ID!): Campground!
  }

  extend type Mutation {
    createCampground(CampgroundInput: CampgroundInput): Campground!
  }
`;

export default campgroundDefs;
