import { gql } from "@apollo/client";

export const CREATE_CAMPGROUND = gql`
  mutation Mutation($campgroundInput: CampgroundInput) {
    createCampground(CampgroundInput: $campgroundInput) {
      id
    }
  }
`;
