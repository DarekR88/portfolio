import React from "react";
import "./FourthSection.scss";
import Modal from "../Modal/Modal";

const FourthSection = (props) => {
  let modal;
  let darkLight = "dark"

  if (props.darkLight) {
    darkLight = "dark";
  } else {
    darkLight = "light";
  }

  if (props.modalOpen) {
    modal = (
      <Modal modalOpen={props.modalOpen} toggleModal={props.toggleModal} />
    );
  }

  return (
    <div className={ `fourth-section ${ darkLight }` } ref={props.fourthRef}>
      <div className="section-container">
        {modal}
        <p className="section-title left">Contact</p>
        <p className="contact-me text">
          I am always looking for the best fit for my skill set and to
          collaborate on intersting projects. Send me a message and I'll get
          back to you as soon as possible.
        </p>
        <button onClick={props.toggleModal} className="modal-button">
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default FourthSection;
