import React from "react";
import "./FrameworkCard.css";

const ProgressBar = ({ percentage }) => {
  return (
    <div className="progress-bar">
      <div className="filler" style={{ width: `${percentage}%` }} />
    </div>
  );
};

const FrameworkCard = ({ frameworks }) => {
  return (
    <div className="card">
      <h2>Frameworks y Conocimiento</h2>
      <ul>
        {frameworks.map((framework, index) => (
          <li key={index} className="framework-item">
            <span>{framework.skill}</span>
            <ProgressBar percentage={framework.progress} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FrameworkCard;
