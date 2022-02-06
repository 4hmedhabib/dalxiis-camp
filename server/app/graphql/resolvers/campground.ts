import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const campgroundRes = {
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

      console.log(campgrounds);
      return campgrounds;
    },
  },
};

export default campgroundRes;
