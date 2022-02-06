import React, { FC } from "react";
import Accounts from "./Accounts/Accounts";
import Logo from "./Logo/Logo";
import Search from "./Search/Search";

type Props = {};

const Header: FC = (props: Props): JSX.Element => {
  return (
    <nav className="bg-white shadow shadow-gray-100 py-3 flex justify-between px-10 items-center">
      <Logo />
      <Search />
      <Accounts />
    </nav>
  );
};

export default Header;
