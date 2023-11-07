import React from "react";
import "./SecondSection.scss";
import Carousel from "../Carousel/Carousel";
import SectionTitle from "../SectionTitle/SectionTitle";
import useWindowSize from "../../hooks/useWindowSize";

const SecondSection = (props) => {
  const { width } = useWindowSize();

  let darkLight

  if (props.darkLight) {
    darkLight = "dark";
  } else {
    darkLight = "light";
  }

  return (
    <div className="second-section" ref={props.secondRef}>
      <div className="section-container">
        <SectionTitle title="About" type="left" />
        {/* <p className="section-title left">About</p> */}
        <div className="content-container">
          <div className="description-block">
            {/* {width < 768 && <Carousel className="about-carousel" />} */}

            <p className="about-p text">
              Hi, my name is Darek Radke. I am self-motivated and passionate
              about creating well-balanced UX/UI experiences. In the constantly
              evolving world of website development, being up-to-date on the
              latest technologies and methods is a big part of my programming
              approach. I also enjoy cooking and road trips.
            </p>
            <ul className="skill-list">
              <li>Javascript</li>
              <li>React</li>
              <li>Node</li>
              <li>MongoDB</li>
              <li>Sass</li>
              <li>TypeScript</li>
            </ul>
          </div>
          {/* {width >= 768 && <Carousel className="about-carousel" />} */}
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
