import React, { useState, useEffect } from "react";
//import FlipCard from '../FlipCard'
import ProjectCard from "./components/project/ProjectCard";
import './Projects.css'
import { project } from "../repo/proyectos";
import idavid80 from '../assets/images/icons/idavid80.svg'
import Carrusell from "./components/project/Carrusell";


const Projects = () => {
  const [visit, setVisit] = useState(0);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 720);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 720);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const backgroundStyle = {
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${idavid80})`,
    backgroundPosition: 'center center',
    backgroundSize: 'contain',
        height: isMobile? '100vh': '100%',
    backgroundColor: 'gray',
    padding: '5%',
  };

  const userViews = () => {
    setVisit(visit + 1);
  };

 
  const proyectCard = () => <ProjectCard project={project}/>

  return (
    <div id='projects' className="projects-page" style={backgroundStyle}>

    <h2 className="project-title">Proyectos</h2>

    {isMobile ? 
        (<Carrusell className='project-mobile' data={project} Card={proyectCard}/>)
     : (
        <div className="list-project-card">
          {project.map((data) => (
            <div key={data.id}>
              <ProjectCard project={data} />
            </div>
          ))}
        </div>)}

      </div>
  );
};

export default Projects;
