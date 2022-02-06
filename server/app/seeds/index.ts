import { PrismaClient } from "@prisma/client";
import cities from "./cities";
import { descriptors, places } from "./seedHelper";

const prisma = new PrismaClient();

// campground name generator
const sample = (arr: String[]): String => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const seedDB = async () => {
  await prisma.campground.deleteMany({});
  await prisma.user.create({
    data: {
      firstName: "Ahmed",
      lastName: "Habib",
      username: "ahmedhabib",
      password: "admin1234",
    },
  });

  const userId = await (await prisma.user.findFirst()).id;

  for (let i = 0; i < 10; i++) {
    const random1000: number = Math.floor(Math.random() * 1000);
    const price: number = Math.floor(Math.random() * 20 + 10);
    console.log({ random1000, price });

    await prisma.campground.create({
      data: {
        title: `${sample(descriptors)} ${sample(places)}`,
        location: `${cities[random1000].city}, ${cities[random1000].state}`,
        authorId: userId,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ab corporis, adipisci ratione error at eius, odio libero tenetur facilis aliquam exercitationem dolorum delectus quod repellendus quia placeat magni explicabo!",
        price: price,
       geometry: {
           create: {
               type: "Point"
           }
       }
        images: {
            create: {
                url: images[i]
            }
        }
      },
    });
  }
};
