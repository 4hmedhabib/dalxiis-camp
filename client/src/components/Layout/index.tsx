import React, { FC, Fragment, ReactChildren, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const Layout: FC = ({ children }: Props): JSX.Element => {
  return (
    <Fragment>
      <main>{children}</main>
    </Fragment>
  );
};

export default Layout;
