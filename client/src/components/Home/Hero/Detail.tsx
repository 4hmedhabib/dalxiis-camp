import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Modal } from "../../UI";

type Props = {
  showModalHandler: () => void;
};

const Detail = ({ showModalHandler }: Props) => {
  return (
    <div
      id="content"
      className="absolute right-0 top-0 left-0 lg:left-10 bottom-0 mx-auto lg:mx-0 md:max-w-2xl lg:max-w-lg xl:max-w-xl flex justify-center items-center"
    >
      <div className="flex flex-col justify-center items-center lg:items-start">
        <h1 className="md:text-5xl text-3xl mt-6 font-bold tracking-wider text-white text-center lg:text-left px-3 md:px-0">
          Find over 20 thousand camp in Somalia.
        </h1>
        <p
          className="text-white text-xs md:text-sm  tracking-wider font-light mt-3 text-center  lg:px-0 lg:text-left px-6
     md:px-0"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris{" "}
        </p>
        <button
          onClick={showModalHandler}
          className="transition ease-in-out delay-150 bg-yellow-500 text-white px-3 py-2 mt-8 rounded-md hover:-translate-y-1 hover:scale-110 hover:bg-yellow-400 duration-300"
        >
          Create New Campground
        </button>
      </div>
    </div>
  );
};

export default Detail;
