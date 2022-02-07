import { Hidden } from "@mui/material";
import React from "react";

type Props = {};

const Campgrounds = (props: Props) => {
  const truncate = (str: String) => {
    return str.length > 90 ? `${str.substring(0, 87)} ...` : str;
  };

  return (
    <section id="campgrounds" className="mx-6 my-8 font-nunito">
      <div>
        <h1 className="text-2xl text-gray-900 font-bold tracking-wider mb-2">
          All Campgrounds
        </h1>
        <hr />
      </div>
      <div id="campground-lists">
        <div className="w-full max-w-sm my-3 shadow shadow-gray-100 p-2 rounded-lg">
          <div id="image">
            <img
              src="https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
              className="w-full object-cover rounded-xl"
            />
          </div>
          <div id="text" className="my-3 grid grid-cols-2 items-center">
            <h3 className="text-xl font-bold tracking-wider flex flex-col">
              Daallo Mountain
              <span className="text-xs font-light  text-slate-500">
                852 kilometers away
              </span>
            </h3>
            <span className="text-right text-sm font-semibold text-gray-500">
              $65 / night
            </span>
            <p className="text-sm text-gray-500 mt-2 col-span-2">
              {truncate(
                "Waa Buur Ku taala Magaalada Ceerigaabo. Buurta waa loo dalxiis tagaa, waxay leedahay meelo qurux badan oo indhaha soo jiidanaya"
              )}{" "}
              <span className="font-semibold text-yellow-500 cursor-pointer ">
                Read more
              </span>
            </p>
          </div>
          <div
            id="user-profile"
            className="w-full max-w-fit flex gap-3 items-center justify-start mt-8"
          >
            <div id="user-image" className="w-8 h-8 rounded-full">
              <img
                src="https://images.unsplash.com/profile-1543721941700-8be8bd4e8e54?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
                alt=""
                className="h-full w-full rounded-full object-cover object-center"
              />
            </div>
            <div
              id="user-detail"
              className="flex flex-col items-start justify-center"
            >
              <h5 className="m-0 p-0 text-sm font-semibold tracking-wider text-gray-900 ">
                Mohamed Hassan
              </h5>
              <span className="text-xs font-semibold tracking-wider text-gray-500 ">
                2 days ago
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Campgrounds;
