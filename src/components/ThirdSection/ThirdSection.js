import React from "react";
import "./ThirdSection.scss";

const ThirdSection = (props) => {
  return (
    <div className="third-section" ref={props.thirdRef}>
      <p className="section-title">Projects</p>
      <div className="card-wrapper">
        <div className="project-card">
          <p className="card-title">Custom CMS</p>
          <p className="card-blurb">
            Application that allows a user to update front end styling.
          </p>
          <a
            href="https://github.com/DarekR88/cafe-del-sol"
            className="card-link"
          >
            repository
          </a>
        </div>
        <div className="project-card">
          <p className="card-title">Data Graphing Application</p>
          <p className="card-blurb">
            Application that pulls multiple sets of data from an api and graphs
            them together using Recharts
          </p>
          <a
            href="https://github.com/DarekR88/eog-react-visualization"
            className="card-link"
          >
            repository
          </a>
        </div>
        <div className="project-card">
          <p className="card-title">React Portfolio</p>
          <p className="card-blurb">
            Portfolio created with React and react-image-gallery.
          </p>
          <a href="https://github.com/DarekR88/portfolio" className="card-link">
            repository
          </a>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
