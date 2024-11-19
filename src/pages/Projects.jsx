import React, { useState } from "react";
import ProjectCard from "./components/project/ProjectCard";
import { project } from "../repo/proyectos";
import idavid80 from "../assets/images/icons/idavid80.svg";
import Carrusell from "./components/project/Carrusell";
import { useIsMobile } from "../hooks/useIsMobile";

const Projects = ({ theme }) => {
  const [visit, setVisit] = useState(0);
  const [isMobile] = useIsMobile();

  const userViews = () => {
    setVisit(visit + 1);
  };

  const styles = {
    container: {
      backgroundImage: `url("${idavid80}")`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      backgroundSize: "contain",
      height: isMobile ? "100vh" : "100%",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      
    },
    title: {
      marginTop: isMobile ? "0%" : "10%",
      fontSize: isMobile ? "2em" : "3em",
    },
    card: {
      marginTop: isMobile ? "0%" : "2%",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-evenly",
      width: "80%",
      rowGap: "30px",
      columnGap: "30px",
      marginBottom: isMobile ? "0%" : "3%",
    },
    svg: {
      fill: theme ? "#fff" : "#000",
    },
  };

  return (
    <div id="projects" style={styles.container}>
      <h2 className="project-title" style={styles.title}>
        Proyectos
      </h2>
      {isMobile ? (
        <Carrusell
          className="project-mobile"
          data={project}
          Card={(data) => <ProjectCard project={data} />}
        />
      ) : (
        <div className="list-project-card" style={styles.card}>
          {project.map((data, index) => (
            <div key={data.id || index}>
              <ProjectCard project={data} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
