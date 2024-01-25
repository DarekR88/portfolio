import React from "react";
import "./SideElement.scss";
// import githubIcon from "../../static/icons/github_icon.svg";
import { ReactComponent as GithubSvg } from "../../static/icons/github_icon.svg";
// import linkedinIcon from "../../static/icons/linkedin_icon.svg";
import { ReactComponent as LinkedinSvg } from "../../static/icons/linkedin_icon.svg";

const SideElement = (props) => {
  let darkLight = "dark";
  let svgColor = "orange"

  if (props.darkLight) {
    darkLight = "dark";
    svgColor = "orange"
  } else {
    darkLight = "light";
    svgColor = "#0086cf"
  }

  return (
    <div className={`side-element-wrapper ${darkLight}`}>
      <ul>
        <li>
          <a
            href="https://github.com/DarekR88"
            target="_blank"
            rel="noreferrer noopener"
            className="side-a"
          >
            <GithubSvg className="svg-icon" alt="github icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/darek-radke-aa26b7173/"
            target="_blank"
            rel="noreferrer noopener"
            className="side-a"
          >
            <LinkedinSvg className="svg-icon" alt="linkedin icon" />
          </a>
        </li>
        <li>
          <a
            href="mailto:darekradke2@gmail.com"
            className="email-link"
            target="_blank"
            rel="noreferrer noopener"
          >
            Darekradke2@gmail.com
          </a>
        </li>
        {/* <li><a href="" rel="noreferrer" className="side-a">Contact</a></li> */}
      </ul>
    </div>
  );
};

export default SideElement;
