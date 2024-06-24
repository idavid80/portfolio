import React, { useState } from "react";
import CreditCard from "../CreditCard";
//import FlipCard from '../FlipCard'
import './Home.css'


const Home = () => {
  const [visit, setVisit] = useState(0);

  const userViews = () => {
    setVisit(visit + 1);
  };

  return (
    <div id="home">
      <h2>Proyectos</h2>


      <div>
        <h3>{visit}</h3>
        <p>Descripción del proyecto 1.</p>
      </div>
      <div>
        <h3>Proyecto 2</h3>
        <p>Descripción del proyecto 2.</p>

        <CreditCard />
      </div>
    </div>
  );
};

export default Home;
