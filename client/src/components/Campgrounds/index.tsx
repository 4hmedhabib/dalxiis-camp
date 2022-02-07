import React, { FC, useEffect, useState } from "react";
import Campground from "./Campground";
import { useQuery } from "@apollo/client";
import { CAMPGROUNDS } from "../../graphql/Queries/campground";

type Props = {};

type Campground = {
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
  images: {
    url: string;
  };
  description: string;
  price: number;
  reviews: {
    id: number;
    rating: number;
  };
};

const Campgrounds: FC = (props: Props): JSX.Element => {
  const [campgrounds, setCampgrounds] = useState([]);

  const { data, refetch, error, loading } = useQuery(CAMPGROUNDS);

  useEffect(() => {
    refetch();
    !loading &&
      !error &&
      data &&
      data.campgrounds &&
      setCampgrounds(data.campgrounds);
  }, [loading, data, refetch, error]);

  return (
    <section id="campgrounds" className="mx-6 my-8 font-nunito">
      <div>
        <h1 className="text-2xl text-gray-900 font-bold tracking-wider mb-2">
          All Campgrounds
        </h1>
        <hr />
      </div>
      <div
        id="campground-lists"
        className="mt-6 flex flex-wrap gap-3 justify-center"
      >
        {campgrounds?.map((campground: Campground) => {
          return <Campground key={campground.id} />;
        })}
      </div>
    </section>
  );
};

export default Campgrounds;
