import { gql } from "apollo-server-express";

const geometryDefs = gql`
  enum GeoType {
    Point
  }

  type Geometry {
    Id: Int
    lng: Float
    lat: Float
    campgroundId: Int
    type: GeoType
  }
`;

export default geometryDefs;
