import React from "react";
import "./FirstSection.scss";

const FirstSection = (props) => {
  return (
    <div className="first-section" ref={props.landingRef}>
      {/* <div className="animated-name">
        <p className="firstL">D</p>
        <p className="secondL">A</p>
        <p className="thirdL">R</p>
        <p className="fourthL">E</p>
        <p className="fithL">K</p>
        <p className="sixthL">R</p>
        <p className="seventhL">A</p>
        <p className="eighthL">D</p>
        <p className="ninthL">K</p>
        <p className="tenthL">E</p>
    </div > */}
        <p className="intro">Hi, I'm</p>
        <p className="name">Darek Radke</p>
        <p className="blurb">Independent website developer.</p> 
    </div>
  );
};

export default FirstSection;
