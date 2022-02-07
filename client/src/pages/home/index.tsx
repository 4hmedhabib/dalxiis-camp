import React, { FC } from "react";
import HomeComponent from "../../components/Home";

type Props = {};

const Home: FC = (props: Props): JSX.Element => {
  return (
    <div>
      <HomeComponent />
    </div>
  );
};

export default Home;
