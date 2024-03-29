import React from "react";
import "./Toolbar.scss";
import HamburgerMenuBtn from "../HamburgerMenuBtn/HamburgerMenuBtn";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

const Toolbar = (props) => {
  let toolbarClasses = "toolbar";
  let toolBarColor = "dark";

  if (props.show) {
    toolbarClasses = "toolbar hide";
  } else {
    toolbarClasses = "toolbar show";
  }

  if (props.darkLight) {
    toolBarColor = "dark";
  } else {
    toolBarColor = "light";
  }

  return (
    <header className={`${toolbarClasses} ${toolBarColor}`}>
      <HamburgerMenuBtn
        toggleDrawer={props.drawerClickHandler}
        drawerOpen={props.drawerOpen}
      />
      <div className="toolbar-logo">
        <a href="https://www.darekradke.com">DAREK RADKE</a>
      </div>
      <div>
        <ToggleSwitch toggleColors={props.toggleDarkLight} />
      </div>
      <div className="nav-items">
        <button
          className={`drawer-button ${toolBarColor}`}
          onClick={() => {
            props.handleScroll(props.landingRef.current);
          }}
        >
          Home
        </button>

        <button
          className={`drawer-button ${toolBarColor}`}
          onClick={() => {
            props.handleScroll(props.secondRef.current);
          }}
        >
          About
        </button>

        {/* <button
          className={`drawer-button ${toolBarColor}`}
          onClick={() => {
            props.handleScroll(props.thirdRef.current);
          }}
        >
          Projects
        </button> */}

        <button
          className={`drawer-button ${toolBarColor}`}
          onClick={() => {
            props.handleScroll(props.fourthRef.current);
          }}
        >
          Contact
        </button>
      </div>
    </header>
  );
};

export default Toolbar;
