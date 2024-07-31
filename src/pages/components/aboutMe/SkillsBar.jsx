import React, { useState } from "react";
import Modal from './Modal';
import './SkillsBar.css';

const SkillsBar = ({ title, skills }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');

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
        setModalContent('');
    };

    return (
        <div className="skill-card">
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
                )
            })}
            <Modal 
                isOpen={modalIsOpen}
                onClose={closeModal}
                content={modalContent}
            />
        </div>
    );
}

export default SkillsBar;

/*
import React, { useState } from "react";
import './SkillsBar.css'


const SkillsBar = ({ title, skills }) => {

    const ProgressBar = ({ percentage }) => {
        return (
            <div className="progress-bar">
                <div className="filler" style={{ width: `${percentage}%` }} />
            </div>
        );
    };

    return (
        <div className="skill-card">
            <h1 className="skill-title-text">{title} {skills.skill}</h1>
            {skills.map((data) => {
                return (
                    <div className="skill-box" key={data.lenght + 1}>
                        <div className="skill-progress">
                            <div className="skill-framework">
                                <img className="skill-icon" src={data.icon} alt={data.skill} /> 
                                <span className="skill-text">{data.skill}</span>
                            </div>
                            <span>{data.progress} %</span>
                            
                        </div>

                        <ProgressBar percentage={data.progress} />
                    </div>
                )
            })}
        </div>
    );
}


export default SkillsBar;
*/