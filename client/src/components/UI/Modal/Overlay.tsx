import React, { FC, ReactNode } from "react";
import classes from "./style.module.css";

type Props = {
  children?: ReactNode;
};

const Overlay: FC = ({ children }: Props): JSX.Element => {
  return (
    <div id="overlay" className={`${classes.modal} ${classes.content}`}>
      {children}
    </div>
  );
};

export default Overlay;
