import baseDefs from "./baseDefs";
import { gql } from "apollo-server-express";

// Type Defs
import campgroundDefs from "./campground";
import imageDefs from "./image";
import reviewDefs from "./review";
import userDefs from "./user";
import geometryDefs from "./geometry";

export default [
  baseDefs,
  campgroundDefs,
  imageDefs,
  reviewDefs,
  userDefs,
  geometryDefs,
  imageDefs,
];
