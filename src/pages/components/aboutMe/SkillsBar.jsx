import React, { useState } from "react";
import Modal from "./Modal";
import "./SkillsBar.css";

const SkillsBar = ({ title, skills, theme }) => {
  const styles = {
    container: {
      backgroundColor: theme ? "#005550" : "#EFE1D1",
      boxShadow: theme ? "0 4px 8px #EFE1D1" : "0 4px 8px rgba(0, 0, 0, 0.1)",
      border: theme ? "1px solid #ccc" : "1px solid #005550",
    },
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const ProgressBar = ({ percentage }) => {
    return (
      <div className="progress-bar">
        <div className="filler" style={{ width: `${percentage}%` }} />
        
      </div>
    );
  };

  const openModal = (info) => {
    setModalContent(info);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalContent("");
  };

  return (
    <div className="skill-card" style={styles.container}>
      <h1 className="skill-title-text">{title}</h1>
      {skills.map((data, index) => {
        return (
          <div
            className="skill-box"
            key={index}
            onClick={() => openModal(data)}
          >
            <div className="skill-progress">
              <div className="skill-framework">
                <img className="skill-icon" src={data.icon} alt={data.skill} />
                <span className="skill-text">{data.skill}</span>
              </div>
              <span>{data.progress} %</span>
            </div>
            <ProgressBar percentage={data.progress} />
          </div>
        );
      })}
      <Modal className='modal-text' isOpen={modalIsOpen} onClose={closeModal} content={modalContent} />
    </div>
  );
};

export default SkillsBar;
