import React from "react";
import "./ToolbarToggle.scss"

const ToolbarToggle = (props) => {

  const hoverLog = () => {
    props.hoverToggle(false)
  };

  return (
    <div className="toolbar-toggle" onMouseEnter={() => hoverLog()} />
  );
};

export default ToolbarToggle;