import React from "react";
import "./FourthSection.scss";
import Modal from "../Modal/Modal";

const FourthSection = (props) => {
  let modal;

  if(props.modalOpen) {
      modal=<Modal modalOpen={props.modalOpen} toggleModal={props.toggleModal} />
  }

  return (
      <div className="fourth-section" ref={props.fourthRef}>
          {modal}
          <p className="fourth-title">Contact</p>
          <p className="contact-me">I am always looking for the best fit for my skill set and to collaborate on intersting
              projects. Send me a message and I'll get back to you as soon as possible.
          </p>
          <button onClick={props.toggleModal} className="modal-button">Contact Me</button>
      </div>
  );
};

export default FourthSection;