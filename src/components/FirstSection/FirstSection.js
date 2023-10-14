import React from "react";
import "./FirstSection.scss";

const FirstSection = (props) => {
  return (
    <div className="first-section" ref={props.landingRef}>  
        <p className="text">Hi, I'm</p>
        <p className="name">Darek Radke</p>
        <p className="blurb">Independent website developer.</p> 
    </div>
  );
};

export default FirstSection;
