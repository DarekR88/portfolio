import React from "react";
import "./ToggleSwitch.scss";

const ToggleSwitch = (props) => {
  return (
    <div className="toggle-switch" ref={props.landingRef}>
      <label class="switch">
        <input type="checkbox" 
          onChange={props.toggleColors}
        />
        <span class="slider round"></span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
