import React, { useState } from 'react';
import BackOrFrontToggle from './BackOrFrontToggle';
import './StackRotation.css'
import Frontend from './FrontEnd';
import BackEnd from './BackEnd';

const StackRotation = () => {
  const [isChecked, setIsChecked] = useState(false);

  const stackStyle = {
    boxShadow: '0 0 10px rgba(128, 128, 128, 0.5)',
    width: '100%',
    height: '100vh',
    transformStyle: 'preserve-3d',
    transition: 'transform 3s ease',
    transform: isChecked ? 'rotateY(180deg)' : 'none',
    position: 'relative',
    backgroundImage: isChecked 
      ? 'linear-gradient(blue, violet)' 
      : 'linear-gradient(red, purple)',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };

  const faceStyle = {
    transformStyle: 'preserve-3d',
    backfaceVisibility: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  };

  const backStyle = {
    ...faceStyle,
    transform: 'rotateY(180deg)',
  };

  const contentTextStyle = {
    transform: 'translateZ(90px)',
    textShadow: '0 0 3px black',
    textAlign: 'center',
    color: '#fff',
  };

  const toggleStyle = {
    position: 'fixed', 
    top: '20px',
    left: '20px',
    zIndex: 1000,

  };

  return (
    <div className='stack' style={stackStyle}>
      <div className='stack-toggle' style={toggleStyle}>
        <BackOrFrontToggle isChecked={isChecked} setIsChecked={setIsChecked} />
      </div>

      <div className='stack-card' style={{ transformStyle: 'preserve-3d' }}>
        {isChecked ? (
          <div className='stack-front' style={faceStyle}>
<Frontend/>    
</div>
        ) : (
          <div className='stack-back' style={backStyle}>
<BackEnd/>
         </div>
        )}
      </div>
    </div>
  );
};

export default StackRotation;
