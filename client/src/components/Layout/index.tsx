import React, { FC, Fragment, ReactChildren, ReactNode } from "react";
import Header from "./Header";
import Main from "./Main/Main";

type Props = {
  children?: ReactNode;
};

const Layout: FC = ({ children }: Props): JSX.Element => {
  return (
    <Fragment>
      <Header />
      <Main>{children}</Main>
    </Fragment>
  );
};

export default Layout;
