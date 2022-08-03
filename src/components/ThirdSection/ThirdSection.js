import React from "react";
import "./ThirdSection.scss";
import githubIcon from "../../static/icons/github_icon.svg";
import folderIcon from "../../static/icons/folder-icon.svg";

const ThirdSection = (props) => {
  return (
    <div className="third-section" ref={props.thirdRef}>
      <p className="section-title">Projects</p>
      <div className="card-wrapper">
        <div className="project-card">
          <header className="project-card-header">
            <a
              href="https://github.com/DarekR88/cafe-del-sol"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img className="folder-icon" src={folderIcon} alt="folder icon" />
            </a>
            <a
              href="https://github.com/DarekR88/cafe-del-sol"
              className="card-link"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img className="repo-icon" src={githubIcon} alt="github icon" />
            </a>
          </header>
          <p className="card-title">Custom CMS</p>
          <p className="card-blurb">
            Application that allows a user to update front end styling.
          </p>
          <p className="technologies">JavaScript, React</p>
        </div>
        <div className="project-card">
          <header className="project-card-header">
            <a
              href="https://github.com/DarekR88/eog-react-visualization"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img className="folder-icon" src={folderIcon} alt="folder icon" />
            </a>{" "}
            <a
              href="https://github.com/DarekR88/eog-react-visualization"
              className="card-link"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img className="repo-icon" src={githubIcon} alt="github icon" />
            </a>
          </header>

          <p className="card-title">Data Graphing Application</p>
          <p className="card-blurb">
            Application that pulls multiple sets of data from an api and graphs
            them together using Recharts
          </p>
          <p className="technologies">JavaScript, React, Redux, Recharts</p>
        </div>
        <div className="project-card">
          <header className="project-card-header">
            <a
              href="https://github.com/DarekR88/portfolio"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img className="folder-icon" src={folderIcon} alt="folder icon" />
            </a>{" "}
            <a
              href="https://github.com/DarekR88/portfolio"
              className="card-link"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img className="repo-icon" src={githubIcon} alt="github icon" />
            </a>
          </header>

          <p className="card-title">React Portfolio</p>
          <p className="card-blurb">
            Portfolio created with React and react-image-gallery.
          </p>
          <p className="technologies">JavaScript, React, react-image-gallery</p>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
