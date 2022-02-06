import { gql } from "apollo-server-express";

const imageDefs = gql`
  type CampImages {
    url: String
  }
`;

export default imageDefs;
