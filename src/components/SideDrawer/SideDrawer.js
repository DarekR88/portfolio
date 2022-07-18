import React from "react";
// import { Link } from "react-router-dom"
import "./SideDrawer.scss";

const sideDrawer = (props) => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <button
            className="drawer-nav-buttons"
            onClick={() => {
              props.drawerClickHandler();
              props.handleScroll(props.landingRef.current);
            }}
          >
            Home
          </button>
        </li>
        <li>
          <button
            className="drawer-nav-buttons"
            onClick={() => {
              props.drawerClickHandler();
              props.handleScroll(props.secondRef.current);
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            className="drawer-nav-buttons"
            onClick={() => {
              props.drawerClickHandler();
              props.handleScroll(props.thirdRef.current);
            }}
          >
            Projects
          </button>
        </li>
        <li>
          <button
            className="drawer-nav-buttons"
            onClick={() => {
              props.drawerClickHandler();
              props.handleScroll(props.fourthRef.current);
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
