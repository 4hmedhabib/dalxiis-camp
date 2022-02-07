import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section
      id="hero-section"
      className="w-full bg-gray-200 relative font-nunito"
      style={{ height: "550px" }}
    >
      <img
        src="https://miro.medium.com/max/1838/1*IDxIfyx34Db0HBybQyCrrg.png"
        alt=""
        className="h-full w-full object-cover"
      />
      <div className="bg-gray-800 absolute top-0 bottom-0 right-0 left-0 opacity-50"></div>
      <div
        id="content"
        className="absolute top-0 left-10 bottom-0 w-full md:max-w-md lg:max-w-lg xl:max-w-xl flex justify-center items-center"
      >
        <div className="flex flex-col justify-center items-start">
          <div
            id="latest-hot"
            className="bg-gray-300 bg-opacity-70 shadow-sm shadow-gray-800 w-5/6 rounded-full pr-3 h-9 flex justify-between items-center"
          >
            <button className="bg-gray-900  rounded-full h-full px-5 text-sm text-white font-semibold uppercase tracking-wider">
              Hot Promo
            </button>
            <span className="text-white text-sm tracking-wider">
              Discount 60% Special World Book Day
            </span>
          </div>
          <h1 className="text-5xl mt-6 font-bold tracking-wider text-white">
            Find over 20 thousand camp in Somalia.
          </h1>
          <p className="text-white text-sm pr-16 tracking-wider font-light mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris{" "}
          </p>
          <button className="bg-yellow-500 text-left flex px-5 py-2 mt-8 rounded-full text-white text-lg hover:translate-x-3 hover:translate-y-3 transition-all ease-in-out delay-150 duration-150">
            Create New Campground
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
