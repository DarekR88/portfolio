import React from "react";
import "./Footer.scss";

const Footer = (props) => {

  let darkLight = "dark"

  if (props.darkLight) {
    darkLight = "dark";
  } else {
    darkLight = "light";
  }

  return (
    <div className={ `footer ${ darkLight }` }>
      <p className="footer-blurb">Created by Darek Radke</p>
    </div>
  );
};

export default Footer;
