import React, { FC, Fragment, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const Main = ({ children }: Props): JSX.Element => {
  return <Fragment>{children}</Fragment>;
};

export default Main;
