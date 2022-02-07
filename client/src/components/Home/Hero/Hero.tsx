import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section
      id="hero-section"
      className="w-full bg-blue-200 relative font-nunito"
      style={{ height: "550px" }}
    >
      <img
        src="https://miro.medium.com/max/1838/1*IDxIfyx34Db0HBybQyCrrg.png"
        alt=""
        className="h-full w-full object-cover "
      />
      <div className="bg-gray-900 lg:bg-gray-800  absolute top-0 bottom-0 right-0 left-0 opacity-50"></div>
      <div
        id="content"
        className="absolute right-0 top-0 left-0 lg:left-10 bottom-0 mx-auto lg:mx-0 md:max-w-2xl lg:max-w-lg xl:max-w-xl flex justify-center items-center"
      >
        <div className="flex flex-col justify-center items-center lg:items-start">
          <div
            id="latest-hot"
            className="bg-gray-300 bg-opacity-70 shadow-sm shadow-gray-800 w-5/6 rounded-full pr-3 h-9  justify-between items-center hidden lg:flex"
          >
            <button className=" lg:bg-gray-900  rounded-full h-full px-5 text-sm text-white font-semibold uppercase tracking-wider">
              Hot Promo
            </button>
            <span className="text-white text-sm tracking-wider">
              Discount 60% Special World Book Day
            </span>
          </div>
          <h1 className="md:text-5xl text-3xl mt-6 font-bold tracking-wider text-white text-center lg:text-left px-3 md:px-0">
            Find over 20 thousand camp in Somalia.
          </h1>
          <p
            className="text-white text-xs md:text-sm  tracking-wider font-light mt-3 text-center  lg:px-0 lg:text-left px-6
           md:px-0"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris{" "}
          </p>
          <button className="transition ease-in-out delay-150 bg-yellow-500 text-white px-3 py-2 mt-8 rounded-md hover:-translate-y-1 hover:scale-110 hover:bg-yellow-400 duration-300">
            Create New Campground
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
