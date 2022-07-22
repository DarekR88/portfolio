import React from "react";
import "./SecondSection.scss";
import Carousel from "../Carousel/Carousel";

const SecondSection = (props) => {
  return (
    <div className="second-section" ref={props.secondRef}>
      <Carousel />
      <div className="carousel-blurbs">
        <p>
          In a world full of varying devices responsive web design is a very
          important aspect of my development approach.
        </p>
      </div>
    </div>
  );
};

export default SecondSection;
