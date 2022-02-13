import React, { FC } from "react";

type Props = {
  closeModalHandler: () => void;
};

const BackDrop = ({ closeModalHandler }: Props): JSX.Element => {
  return (
    <div
      onClick={closeModalHandler}
      id="back-drop"
      className="fixed top-0 left-0 w-screen h-screen z-50 bg-black bg-opacity-40"
    ></div>
  );
};

export default BackDrop;
