import React from "react";
import './Backdrop.scss';

const backdrop = props => {


    const closeSelect = () =>{
        if(props.modalOpen) {
            props.toggleModal()
        } else if(props.drawerOpen) {
            props.click()
        }
    }

    return(
        <div className="backdrop" onClick={closeSelect} />
    )


    };

export default backdrop;