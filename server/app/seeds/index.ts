import { PrismaClient } from "@prisma/client";
import cities from "./cities";
import { descriptors, places } from "./seedHelper";
import images from "./images";

const prisma = new PrismaClient();

console.log("RUNNING THE INDEX.TS");

// campground name generator
const sample = (arr: string[]): string => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const seedDB = async () => {
  const user = await prisma.user.findFirst();

  for (let i = 0; i < 10; i++) {
    const random1000: number = Math.floor(Math.random() * 1000);
    const price: number = Math.floor(Math.random() * 20 + 10);
    console.log({ random1000, price });

    await prisma.campground.create({
      data: {
        title: `${sample(descriptors)} ${sample(places)}`,
        location: `${cities[random1000].city}, ${cities[random1000].state}`,
        authorId: 1,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ab corporis, adipisci ratione error at eius, odio libero tenetur facilis aliquam exercitationem dolorum delectus quod repellendus quia placeat magni explicabo!",
        price: price,
        geometry: {
          create: {
            type: "Point",
            lat: cities[random1000].latitude,
            lng: cities[random1000].longitude,
          },
        },
        images: {
          create: {
            url: images[i].url,
          },
        },
      },
    });
  }
};

seedDB().then((data) => {
  console.log("============DATA ARE SAVED================");
  console.log(data);
});
