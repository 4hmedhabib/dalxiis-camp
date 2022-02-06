import baseDefs from "./baseDefs";
import { gql } from "apollo-server-express";

// Type Defs
import campgroundDefs from "./campground";
import imageDefs from "./image";

export default [baseDefs, campgroundDefs, imageDefs];
