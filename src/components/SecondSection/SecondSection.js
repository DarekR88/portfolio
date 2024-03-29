import React from "react";
import "./SecondSection.scss";

const SecondSection = (props) => {

  let darkLight = "dark"

  if (props.darkLight) {
    darkLight = "dark";
  } else {
    darkLight = "light";
  }

  return (
    <div className={ `second-section ${ darkLight }` } ref={props.secondRef}>
      <div className="section-container">
        <p className="title-about">About</p>
        {/* <p className="section-title left">About</p> */}
        <div className="content-container">
          <div className="description-block">
            {/* {width < 768 && <Carousel className="about-carousel" />} */}

            <p className="about-p">
              Hi, my name is Darek Radke. I am self-motivated and passionate
              about creating well-balanced UX/UI experiences. In the constantly
              evolving world of website development, being up-to-date on the
              latest technologies and methods is a big part of my programming
              approach. Some things I specialize in: 
            </p>
            <ul className="skill-list">
              <li>JavaScript</li>
              <li>React</li>
              <li>Next.js</li>
              <li>Node</li>
              <li>MongoDB</li>
              <li>Sass/Less/Tailwind</li>
              <li>Figma/AdobeXD</li>
              <li>TypeScript</li>
              <li>MongoDB</li>
              <li>Express</li>
            </ul>
          </div>
          {/* {width >= 768 && <Carousel className="about-carousel" />} */}
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
