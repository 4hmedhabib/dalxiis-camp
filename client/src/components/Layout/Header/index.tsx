import React, { FC } from "react";
import Logo from "./Logo/Logo";
import Search from "./Search/Search";

type Props = {};

const Header: FC = (props: Props): JSX.Element => {
  return (
    <nav className="bg-white shadow shadow-gray-100 py-3 flex justify-between px-10 items-center">
      <Logo />
      <Search />
      <div id="accounts" className="flex w-full max-w-xs gap-3 font-nunito">
        <button className="font-semibold tracking-wider text-sm">
          Sign in
        </button>
        <button className="ml-2 tracking-wider text-sm font-semibold text-white bg-yellow-500 px-2 rounded-md py-1">
          Create account
        </button>
      </div>
    </nav>
  );
};

export default Header;
