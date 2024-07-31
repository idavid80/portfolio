import React from 'react';
import './FlipCard.css'

const FlipCard = ({title}) => {
  return (
<div class="flip-card">
    <div class="flip-card-inner">
        <div class="flip-card-front">
            <p class="title">{title}</p>
            <p>Hover Me</p>
        </div>
        <div class="flip-card-back">
            <p class="title">BACK</p>
            <p>Leave Me</p>
        </div>
    </div>
</div>
  );
};

export default FlipCard;