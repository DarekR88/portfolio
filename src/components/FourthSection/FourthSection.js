import React from "react";
import "./FourthSection.scss";
// import Modal from "../Modal/Modal";

const FourthSection = (props) => {
  // let modal;
  let darkLight = "dark";

  if (props.darkLight) {
    darkLight = "dark";
  } else {
    darkLight = "light";
  }

  // if (props.modalOpen) {
  //   modal = (
  //     <Modal modalOpen={props.modalOpen} toggleModal={props.toggleModal} />
  //   );
  // }

  return (
    <div className={`fourth-section ${darkLight}`} ref={props.fourthRef}>
      <div className="section-container">
        {/* {modal} */}
        <p className="section-title left">Contact</p>
        <p className="contact-me text">
          I&#39;m always looking for new opportunities to level-up my skill sets
          and collaborate with others on exciting projects. Send me a message,
          and I&#39;ll get back to you as soon as possible.
        </p>
        {/* <button onClick={props.toggleModal} className="modal-button">
          Contact Me
        </button> */}
        <a
          href="mailto:darekradke2@gmail.com"
          target="_blank"
          rel="noreferrer noopener"
          className="modal-button"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default FourthSection;
