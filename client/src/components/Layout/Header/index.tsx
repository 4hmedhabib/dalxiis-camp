import React, { FC, useState } from "react";
import Accounts from "./Accounts/Accounts";
import Logo from "./Logo/Logo";
import Search from "./Search/Search";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
// import { XIcon } from "@heroicons/react/solid";

type Props = {};

const Header: FC = (props: Props): JSX.Element => {
  const [isToggle, setIsToggle] = useState(false);

  const toggleHandler = () => {
    return setIsToggle(!isToggle);
  };

  return (
    <nav className="bg-white shadow shadow-gray-100 py-3 flex flex-col gap-4 md:flex-row justify-between items-center  md:px-5 lg:px-10 relative">
      <Logo isToggle={isToggle} />
      <Search isToggle={isToggle} />
      <Accounts isToggle={isToggle} />
      <div className="absolute right-5 top-4">
        {!isToggle && (
          <MenuIcon
            className="w-8 h-8 text-gray-700"
            onClick={toggleHandler}
          ></MenuIcon>
        )}
        {isToggle && (
          <XIcon
            className="w-8 h-8text-gray-700"
            onClick={toggleHandler}
          ></XIcon>
        )}
      </div>
    </nav>
  );
};

export default Header;
