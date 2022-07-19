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
          important aspect of my development approach. Dynamic elements and CSS
          queries ensure that users will have a high quality experience no
          matter the screen size.
        </p>
        <p>
          The utilization of frameworks, libraries, and APIs aid in the creation
          of an optomized web development project.
        </p>
        <p>
          The world of website design and development is fast paced. Being able
          to learn quickly and staying up to date with the best possible
          solutions ensures that anything I create adheres to the highest
          standards.
        </p>
      </div>
    </div>
  );
};

export default SecondSection;
