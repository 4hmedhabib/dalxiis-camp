import React, { FC, Fragment, ReactNode } from "react";
import { createPortal } from "react-dom";
import BackDrop from "./BackDrop";
import Overlay from "./Overlay";

type Props = {
  children?: ReactNode;
};

const Modal: FC = ({ children }: Props): JSX.Element => {
  return (
    <Fragment>
      {createPortal(
        <BackDrop />,
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
