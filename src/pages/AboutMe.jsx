import React from "react";
import "./AboutMe.css";
import SkillsBar from "./components/aboutMe/SkillsBar";
import { progreso } from "../repo/progress";

const About = ({theme}) => {
  return (
    <section id="about">
      <div className="about-cards">
        <SkillsBar title={"Language"} skills={progreso.language} theme={theme}/>
        <SkillsBar title={"Frameworks"} skills={progreso.frameworks} theme={theme}/>
      </div>
    </section>
  );
};

export default About;
