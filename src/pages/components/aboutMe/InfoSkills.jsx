import React, { useState } from 'react';

const InfoSkills = ({info}) => {
  // Define el estado para manejar la visibilidad del texto adicional
  const [showInfo, setShowInfo] = useState(false);

  // Función para manejar el evento onClick
  const handleDivClick = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div>
      <div 
        onClick={handleDivClick} 
        style={{
          cursor: 'pointer', 
          padding: '20px', 
          backgroundColor: '#f0f0f0', 
          border: '1px solid #ccc'
        }}
      >
        Haz clic aquí para más información
      </div>
      {showInfo && (
        <div style={{ marginTop: '10px', padding: '10px', backgroundColor: '#e0e0e0' }}>
          {info}
        </div>
      )}
    </div>
  );
}

export default InfoSkills;