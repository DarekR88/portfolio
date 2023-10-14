import React, { useEffect, useState } from "react";
import "./SectionTitle.scss";

const SectionTitle = ({ title, type }) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsInView(true);
    }, 1000);
  }, []);

  return (
    <div className="SectionTitle">
      <h2 className={`title ${type}`}>{title}</h2>
      <span
        className={`line ${type === "left" ? "left" : "right"} ${
          isInView ? "expanded" : ""
        }`}
      ></span>
    </div>
  );
};

export default SectionTitle;
