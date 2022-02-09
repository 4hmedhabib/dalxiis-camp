import React, { FC, useEffect, useState, lazy, Suspense } from "react";
import { useQuery } from "@apollo/client";
import { CAMPGROUNDS } from "../../graphql/Queries/campground";
import { CampgroundType } from "./types";

// components
const Campground = lazy(() => import("./Campground"));

type Props = {};

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
    <Suspense fallback={"ladoin..."}>
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
          {campgrounds?.map((campground: CampgroundType) => {
            return <Campground key={campground.id} campground={campground} />;
          })}
        </div>
      </section>
    </Suspense>
  );
};

export default Campgrounds;
