import React from "react";
import "./Toolbar.scss";
import HamburgerMenuBtn from "../HamburgerMenuBtn/HamburgerMenuBtn";

const Toolbar = (props) => {
  return (
    <header className="toolbar">
      <HamburgerMenuBtn toggleDrawer={props.drawerClickHandler} drawerOpen={props.drawerOpen} />
      <div className="toolbar-logo">
        <p
          onClick={() => {
            props.handleScroll(props.landingRef.current);
          }}
        >
          DAREK RADKE
        </p>
      </div>
      <div className="nav-items">
        <button
          className="drawer-button"
          onClick={() => {
            props.handleScroll(props.landingRef.current);
          }}
        >
          Home
        </button>

        <button
          className="drawer-button"
          onClick={() => {
            props.handleScroll(props.secondRef.current);
          }}
        >
          About
        </button>

                <button
          className="drawer-button"
          onClick={() => {
            props.handleScroll(props.thirdRef.current);
          }}
        >
          Projects
        </button>

        <button
          className="drawer-button"
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
