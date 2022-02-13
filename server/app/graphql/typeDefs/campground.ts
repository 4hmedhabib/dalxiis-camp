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

  input ImageFiles {
    path: String
    lastModified: Int
    lastModifiedDate: Int
    name: String
    size: Int
    type: String
    webkitRelativePath: String
  }

  input GeometryDataInput {
    lng: Float!
    lat: Float!
  }

  input CampgroundInput {
    title: String
    location: String
    authorId: Int
    images: [ImageFiles!]
    geometry: GeometryDataInput
    description: String
    price: Float
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
