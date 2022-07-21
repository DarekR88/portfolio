import React from "react";
import "./Footer.scss";
import githubIcon from "../../static/icons/github_icon.svg";
import linkedinIcon from "../../static/icons/linkedin_icon.svg";

const Footer = (props) => {
  return (
    <div className="footer">
      <p className="footer-blurb">Created by Darek Radke</p>
      <a
        href="https://github.com/DarekR88"
        target="_blank"
        rel="noreferrer noopener"
        className="side-a"
      >
        <img className="svg-icon" src={githubIcon} alt="github icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/darek-radke-aa26b7173/"
        target="_blank"
        rel="noreferrer noopener"
        className="side-a"
      >
        <img className="svg-icon" src={linkedinIcon} alt="linkedin icon" />
      </a>
    </div>
  );
};

export default Footer;
