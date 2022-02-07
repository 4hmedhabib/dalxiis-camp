import React from "react";
import { SearchIcon } from "@heroicons/react/solid";

type Props = {
  isToggle: boolean;
};

const Search = ({ isToggle }: Props) => {
  return (
    <div
      id="search"
      className="w-full flex justify-center mx-3 mt-5 md:mt-0 px-3 sm:px-0"
    >
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl flex items-center relative">
        <input
          type="text"
          className="bg-gray-100 shadow shadow-gray-100 py-2 pl-5 pr-11 rounded w-full focus:outline-none tracking-wider text-gray-700 font-nunito"
          placeholder="Find campgrounds here..."
        />
        <SearchIcon className="w-5 h-5 text-gray-500 absolute right-3 cursor-pointer"></SearchIcon>
      </div>
    </div>
  );
};

export default Search;
