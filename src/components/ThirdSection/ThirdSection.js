import React, { useMemo } from "react";
import "./ThirdSection.scss";
import githubIcon from "../../static/icons/github_icon.svg";
import folderIcon from "../../static/icons/folder-icon.svg";

const projectList = [
  {
    title: "Custom CMS",
    blurb: "Application that allows a user to update front end styling.",
    url: "https://github.com/DarekR88/cafe-del-sol",
    skills: "JavaScript, React"
  },
  {
    title: "Data Graphing Application",
    blurb:
      "Application that pulls multiple sets of data from an api and graphs them together using Recharts",
    url: "https://github.com/DarekR88/eog-react-visualization",
    skills: "JavaScript, React, Redux, Recharts"
  },
  {
    title: "React Portfolio",
    blurb: "Portfolio created with React and react-image-gallery.",
    url: "https://github.com/DarekR88/portfolio",
    skills:"JavaScript, React, react-image-gallery"
  },
];

const ThirdSection = (props) => {
  const renderProjectCard = useMemo(
    () =>
      projectList.map((project) => {
        return (
          <div className="project-card">
            <header className="project-card-header">
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  className="folder-icon"
                  src={folderIcon}
                  alt="folder icon"
                />
              </a>
              <a
                href={project.url}
                className="card-link"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img className="repo-icon" src={githubIcon} alt="github icon" />
              </a>
            </header>
            <p className="card-title">{project.title}</p>
            <p className="card-blurb text">
              {project.blurb}
            </p>
            <p className="technologies">{project.skills}</p>
          </div>
        );
      }),
    []
  );

  return (
    <div className="third-section" ref={props.thirdRef}>
      <div className="section-container">
        <p className="section-title right">Projects</p>
        <div className="card-wrapper">
          {renderProjectCard}
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
