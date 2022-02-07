import { Hidden } from "@mui/material";
import React from "react";
import Campground from "./Campground";

type Props = {};

const Campgrounds = (props: Props) => {
  return (
    <section id="campgrounds" className="mx-6 my-8 font-nunito">
      <div>
        <h1 className="text-2xl text-gray-900 font-bold tracking-wider mb-2">
          All Campgrounds
        </h1>
        <hr />
      </div>
      <div id="campground-lists">
        <Campground />
      </div>
    </section>
  );
};

export default Campgrounds;
