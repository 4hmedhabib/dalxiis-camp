import React from "react";

type Props = {
  campground: {
    id: number;
    title: string;
    location: string;
    geometry: {
      id: number;
      lng: number;
      lat: number;
      type: string;
    };
    author: {
      username: string;
      firstName: string;
      lastName: string;
    };
    images: [
      {
        url: string;
      }
    ];
    description: string;
    price: number;
    reviews: {
      id: number;
      rating: number;
    };
  };
};

const Campground = ({ campground }: Props) => {
  const truncate = (str: String) => {
    return str.length > 70 ? `${str.substring(0, 70)} ...` : str;
  };

  console.log(campground);
  return (
    <div className="w-full max-w-md md:max-w-sm lg:max-w-xs my-3 shadow shadow-gray-100 p-2 rounded-lg cursor-pointer hover:shadow-2xl  hover:shadow-gray-100">
      <div id="image">
        <img
          src={campground.images[0].url}
          alt={campground.title}
          className="w-full object-cover rounded-xl"
        />
      </div>
      <div id="text" className="my-3 grid grid-cols-2 items-center">
        <h3 className="text-xl font-bold tracking-wider flex flex-col">
          {campground.title}
          <span className="text-xs font-light  text-slate-500">
            852 kilometers away
          </span>
        </h3>
        <span className="text-right text-sm font-semibold text-gray-500">
          ${campground.price} / night
        </span>
        <p className="text-sm text-gray-500 mt-2 col-span-2">
          {truncate(campground.description)}
          <span className="font-semibold text-yellow-500 cursor-pointer ">
            Read more
          </span>
        </p>
      </div>
      <div
        id="user-profile"
        className="w-full flex gap-3 items-center justify-start mt-8  mb-4 p-2 rounded-lg  max-w-sm"
      >
        <div id="user-image" className="w-8 h-8 rounded-full">
          <img
            src={`https://ui-avatars.com/api/?name=${campground.author.firstName}+${campground.author.lastName}`}
            alt=""
            className="h-full w-full rounded-full object-cover object-center"
          />
        </div>
        <div
          id="user-detail"
          className="flex flex-col items-start justify-center"
        >
          <h5 className="m-0 p-0 text-sm font-semibold tracking-wider text-gray-900 ">
            {`${campground.author.firstName} ${campground.author.lastName}`}
          </h5>
          <span className="text-xs font-semibold tracking-wider text-gray-500 ">
            2 days ago
          </span>
        </div>
      </div>
    </div>
  );
};

export default Campground;
