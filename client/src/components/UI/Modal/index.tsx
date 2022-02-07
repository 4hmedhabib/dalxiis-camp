import React, { FC, Fragment, ReactNode } from "react";
import { createPortal } from "react-dom";
import BackDrop from "./BackDrop";
import Overlay from "./Overlay";

type Props = {
  children: ReactNode;
  closeModalHandler: () => void;
};

const Modal = ({ children, closeModalHandler }: Props): JSX.Element => {
  return (
    <Fragment>
      {createPortal(
        <BackDrop closeModalHandler={closeModalHandler} />,
        document.getElementById("overlays") as HTMLElement
      )}
      {createPortal(
        <Overlay>{children}</Overlay>,
        document.getElementById("overlays") as HTMLElement
      )}
    </Fragment>
  );
};

export default Modal;
