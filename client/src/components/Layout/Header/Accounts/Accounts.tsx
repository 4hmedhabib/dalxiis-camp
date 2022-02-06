import React from "react";

type Props = {};

const Accounts = (props: Props) => {
  return (
    <div id="accounts" className="flex w-full max-w-xs gap-3 font-nunito">
      <button className="font-semibold tracking-wider text-sm">Sign in</button>
      <button className="ml-2 tracking-wider text-sm font-semibold text-white bg-yellow-500 px-2 rounded-md py-1">
        Create account
      </button>
    </div>
  );
};

export default Accounts;
