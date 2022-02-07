import React, { FC, Fragment } from "react";
import HeroSection from "./Hero/Hero";
import Campgrounds from "../Campgrounds";

type Props = {};

const Home: FC = (props: Props): JSX.Element => {
  return (
    <Fragment>
      <HeroSection />
      <Campgrounds />
    </Fragment>
  );
};

export default Home;
