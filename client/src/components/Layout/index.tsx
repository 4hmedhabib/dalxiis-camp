import React, { FC, Fragment, ReactChildren, ReactNode } from "react";
import Header from "./Header";

type Props = {
  children?: ReactNode;
};

const Layout: FC = ({ children }: Props): JSX.Element => {
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
    </Fragment>
  );
};

export default Layout;
