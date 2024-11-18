import React from "react";
import StackRotation from "./components/curriculum/StackRotation";


const Curriculum = ({ theme }) => {
  return (
    <section id="curriculum" className="curriculum" style={{margin: '5%'}}>
      <StackRotation theme={theme} />
    </section>
  );
};

export default Curriculum;
