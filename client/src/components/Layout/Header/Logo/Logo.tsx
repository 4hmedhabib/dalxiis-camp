import React from "react";

type Props = {
  isToggle: boolean;
};

const Logo = ({ isToggle }: Props) => {
  return (
    <div
      id="logo"
      className="flex w-full md:w-auto mx-3 md:mx-0  px-8 justify-start items-center gap-2 font-nunito "
    >
      <div id="image" className="w-16">
        <img src="/logo.png" alt="dalxiis camp logo" />
      </div>
      <div id="title" className="relative">
        <h1 className="text-2xl font-bold tracking-wider text-gray-700">
          Dalxiis
        </h1>
        <span className="absolute text-yellow-500 text-xs top-6 right-0 font-semibold tracking-wider">
          Camp
        </span>
      </div>
    </div>
  );
};

export default Logo;
