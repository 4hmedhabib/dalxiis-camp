import { gql } from "apollo-server-express";

const geometryDefs = gql`
  enum GeoType {
    Point
  }

  type Geometry {
    lng: Float
    lat: Float
    campground: Campground
    campgroundId: Int
    type: GeoType
  }
`;

export default geometryDefs;
