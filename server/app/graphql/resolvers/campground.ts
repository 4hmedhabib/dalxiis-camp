import { PrismaClient } from "@prisma/client";
import { FileUpload, GraphQLUpload } from "graphql-upload";

const prisma = new PrismaClient();

export interface CampgroundDataInput {
  CampgroundInput: {
    title: string;
    location: string;
    authorId: number;
    images: any;
    geometry: {
      lat: number;
      lng: number;
    };
    description: string;
    price: number;
  };
}

const campgroundRes = {
  Upload: GraphQLUpload,
  Query: {
    campgrounds: async (_: any, {}) => {
      const campgrounds = await prisma.campground.findMany({
        include: {
          geometry: true,
          author: true,
          images: true,
          reviews: true,
        },
      });

      return campgrounds;
    },
  },
  Mutation: {
    createCampground: async (
      _: any,
      { CampgroundInput }: CampgroundDataInput
    ) => {
      const args = CampgroundInput;
      console.log("Running Create Campground...", ...args.images, "END");
      console.log(args);
      // const campground = await prisma.campground.create({
      //   include: { images: true, geometry: true },
      //   data: {
      //     title: `${args.title}`,
      //     description: `${args.description}`,
      //     price: args.price,
      //     geometry: {
      //       create: {
      //         lat: args.geometry.lat,
      //         lng: args.geometry.lng,
      //         type: "Point",
      //       },
      //     },
      //     images: {
      //       createMany: {
      //         data: [...args.images],
      //       },
      //     },
      //     authorId: args.authorId,
      //     location: `${args.location}`,
      //   },
      // });
      // return campground;
    },
  },
};

export default campgroundRes;
