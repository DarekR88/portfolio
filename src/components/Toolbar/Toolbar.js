import React from "react";
import "./Toolbar.scss";
import HamburgerMenuBtn from "../HamburgerMenuBtn/HamburgerMenuBtn";

const Toolbar = (props) => {
  return (
    <header className="toolbar">
        <HamburgerMenuBtn />
        <div className="nav-items">
          <button
            className="pageButton"
            onClick={() => {
              props.handleScroll(props.landingRef.current);
            }}
          >
            Home
          </button>

          <button
            className="pageButton"
            onClick={() => {
              props.handleScroll(props.secondRef.current);
            }}
          >
            About
          </button>

          <button
            className="pageButton"
            onClick={() => {
              props.handleScroll(props.thirdRef.current);
            }}
          >
            Contact
          </button>
        </div>
    </header>
  );
};

export default Toolbar;
