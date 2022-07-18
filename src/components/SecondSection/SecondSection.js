import React from "react";
import "./SecondSection.scss";
import Carousel from "../Carousel/Carousel";

const SecondSection = (props) => {
  return (
    <div className="second-section" ref={props.secondRef}>
      <Carousel />
    </div>
  );
};

export default SecondSection;
