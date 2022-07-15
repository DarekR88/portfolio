import React from "react";
import "./HamburgerMenuBtn.scss";

const HamburgerMenuBtn = props => {

  let toggleButton = "burger-wrapper";

  if (props.drawerOpen) {
    toggleButton = "burger-wrapper open";
  } else {
    toggleButton = "burger-wrapper";
  }

    return (
      <div className={toggleButton} onClick={props.toggleDrawer}>
        <div className="burger-btn" />
      </div>
    );
  }

export default HamburgerMenuBtn;
