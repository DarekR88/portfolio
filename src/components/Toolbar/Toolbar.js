import React from "react";
import "./Toolbar.scss";
import HamburgerMenuBtn from "../HamburgerMenuBtn/HamburgerMenuBtn";

const Toolbar = (props) => {
  return (
    <header className="toolbar">
      <nav className="toolbar-nav">
        <HamburgerMenuBtn />
      </nav>
    </header>
  );
};

export default Toolbar;
