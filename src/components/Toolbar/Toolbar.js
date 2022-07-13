import React from "react";
import "./Toolbar.scss";
import HamburgerMenuBtn from "../HamburgerMenuBtn/HamburgerMenuBtn";

const Toolbar = (props) => {
  return (
    <header className="toolbar">
      <nav className="toolbar-nav">
        <HamburgerMenuBtn />
        <div className="nav-items">
          <ul>
            <li>
              <button
                className="pageButton"
                onClick={() => {
                  props.handleScroll(props.landingRef.current);
                }}
              >
                Home
              </button>
            </li>
            <li>
              <button
                className="pageButton"
                onClick={() => {
                  props.handleScroll(props.secondRef.current);
                }}
              >
                About
              </button>
            </li>
            <li>
              <button
                className="pageButton"
                onClick={() => {
                  props.handleScroll(props.thirdRef.current);
                }}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Toolbar;
