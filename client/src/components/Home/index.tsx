import React, { Fragment, useState } from "react";
import HeroSection from "./Hero/Hero";
import Campgrounds from "../Campgrounds";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Modal } from "../UI";

type Props = {};

const Home = (props: Props): JSX.Element => {
  const navigate = useNavigate();

  const showModalHandler = () => {
    return navigate("/camp/new");
  };

  const closeModalHandler = () => {
    return navigate("/");
  };

  return (
    <Fragment>
      <Routes>
        <Route
          path="/"
          element={
            <Fragment>
              <HeroSection showModalHandler={showModalHandler} />
              <Campgrounds />
            </Fragment>
          }
        />
        <Route
          path="/camp/new"
          element={<Modal closeModalHandler={closeModalHandler}>hello</Modal>}
        />
      </Routes>
    </Fragment>
  );
};

export default Home;
