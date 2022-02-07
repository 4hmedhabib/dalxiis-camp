import React, { Fragment, useState } from "react";
import HeroSection from "./Hero/Hero";
import Campgrounds from "../Campgrounds";
import { Modal } from "../UI";

type Props = {};

const Home = (props: Props): JSX.Element => {
  const [modal, setModal] = useState<boolean>(false);

  const closeModalHandler = (): void => {
    return setModal(false);
  };

  return (
    <Fragment>
      <button onClick={() => setModal(true)}>modal</button>
      {modal && (
        <Modal closeModalHandler={closeModalHandler}>
          <h1>Hello world</h1>
        </Modal>
      )}
      <HeroSection />
      <Campgrounds />
    </Fragment>
  );
};

export default Home;
