import React, { FC, Fragment } from "react";
import HeroSection from "./Hero/Hero";

type Props = {};

const Home: FC = (props: Props): JSX.Element => {
  return (
    <Fragment>
      <HeroSection />
    </Fragment>
  );
};

export default Home;
