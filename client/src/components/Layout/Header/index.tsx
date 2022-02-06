import React, { FC } from "react";
import Logo from "./Logo/Logo/Logo";

type Props = {};

const Header: FC = (props: Props): JSX.Element => {
  return (
    <nav className="bg-white shadow shadow-gray-100 py-3">
      <Logo />
      <div id="search"></div>
      <div id="accounts"></div>
    </nav>
  );
};

export default Header;
