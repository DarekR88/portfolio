import React from "react";
import "./FirstSection.scss";

const FirstSection = (props) => {

  let sectionColor = "dark"
  
  if (props.darkLight) {
    sectionColor = "dark"
  } else {
    sectionColor = "light"
  }

  return (
    <div className={ `first-section ${ sectionColor }` } ref={props.landingRef}>  
        <p className="blurb">Hi, I'm</p>
        <p className="name">Darek Radke</p>
        <p className="blurb">Independent website developer.</p> 
    </div>
  );
};

export default FirstSection;
