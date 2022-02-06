import baseDefs from "./baseDefs";
import { gql } from "apollo-server-express";

const typeDefs = gql`
  type User {
    firstName: String!
    lastName: String!
    username: String!
    password: String!
  }

  input CreateUserInput {
    firstName: String!
    lastName: String!
    username: String!
    password: String!
  }

  extend type Query {
    users: [User!]
    user(id: ID!): User!
  }

  extend type Mutation {
    createUser(input: CreateUserInput): User!
  }
`;

export default [typeDefs, baseDefs];
