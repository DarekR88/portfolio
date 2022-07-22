import React from "react";
import "./ToolbarToggle.scss"

const ToolbarToggle = (props) => {

  const hoverLog = () => {
    props.hoverToggle(false)
    console.log("hello");
  };

  return (
    <div className="toolbar-toggle" onMouseEnter={() => hoverLog()} />
  );
};

export default ToolbarToggle;