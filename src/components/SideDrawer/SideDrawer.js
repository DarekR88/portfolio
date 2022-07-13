import React from "react";
// import { Link } from "react-router-dom"
import './SideDrawer.scss';


const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
    <nav className={drawerClasses}>
        <button className="sideDrawerCloseButton" onClick={props.drawerClickHandler}>x</button>
        <ul>
            <li><button className="drawerButton" onClick={() => {
                props.drawerClickHandler();
                props.handleScroll((props.landingRef).current);
            }}>Home</button></li>
            <li><button className="drawerButton" onClick={() => {
                props.drawerClickHandler();
                props.handleScroll((props.secondRef).current);
            }}>About</button></li>
            <li><button className="drawerButton" onClick={() => {
                props.drawerClickHandler();
                props.handleScroll((props.thirdRef).current);
            }}>Contact</button></li>
        </ul>
    </nav>
    );
};

export default sideDrawer;