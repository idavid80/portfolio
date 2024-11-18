import React from "react";
import SocialCard from "./components/footer/SocilaCard";
import Loanding from "./components/footer/Loanding";
import ToolTips from "./components/footer/ToolTips";
import "./Footer.css";

const Footer = () => {
  return (
    <section id="footer">
      <SocialCard />
      <Loanding />
      <ToolTips />
      <div className="autor">
        <p>© 2023 David Domínguez Bueno.</p>
      </div>
    </section>
  );
};

export default Footer;
