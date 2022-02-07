import React from "react";
import Detail from "./Detail";

type Props = {
  showModalHandler: () => void;
};

const Hero = ({ showModalHandler }: Props) => {
  return (
    <section
      id="hero-section"
      className="w-full bg-blue-200 relative font-nunito"
      style={{ height: "550px" }}
    >
      <img
        src="https://miro.medium.com/max/1838/1*IDxIfyx34Db0HBybQyCrrg.png"
        alt=""
        className="h-full w-full object-cover "
      />
      <div className="bg-gray-900 lg:bg-gray-800  absolute top-0 bottom-0 right-0 left-0 opacity-50"></div>
      <Detail showModalHandler={showModalHandler} />
    </section>
  );
};

export default Hero;
