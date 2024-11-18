import React from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          X
        </button>
        <div className="info-content">
          <div className="info-title">
            <img
              className="skill-icon"
              src={content.icon}
              alt={content.skill}
            />
            <span className="modal-text">{content.skill}</span>
          </div>
          <div className="info-content">
            <h1 className="content-title">{content.info.formacion}</h1>
            <p>{content.info.desarrollo}</p>
            <p>{content.info.aplicacion}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
