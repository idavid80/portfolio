import React, { useState } from "react";
import CreditCard from "../CreditCard";
//import FlipCard from '../FlipCard'
import ProyectCard from "../ProyectCard";
import './Projects.css'
import { proyect } from "../../repo/proyectos";


const Projects = () => {
  const [visit, setVisit] = useState(0);

  const userViews = () => {
    setVisit(visit + 1);
  };

  return (
    <div id="projects">
      <h2>Proyectos</h2>
        <div className="list-proyect-card">
          {proyect.map((data) => (
            <div key={data.length}>
              <ProyectCard proyect={data} />
            </div>
          ))}
        </div>
    </div>
  );
};

export default Projects;
