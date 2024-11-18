import { useState } from "react";
import "./Nav.css";
import Logo from "../../../assets/images/icons/logo";
import SwitchMode from "../SwitchMode";

function Nav({ setDarkMode, darkMode }) {
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar si el menú está abierto o cerrado

  const handleMenuClick = () => {
    setMenuOpen(false); // Cierra el menú al hacer clic en un enlace
  };

  const handleHamburgerClick = () => {
    setMenuOpen(!menuOpen); // Cambia el estado del menú (abierto/cerrado)
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <input
          type="checkbox"
          name="menu"
          id="menu-toggle"
          checked={menuOpen} // El estado del checkbox depende de si el menú está abierto
          onChange={handleHamburgerClick} // Cambia el estado al hacer clic en el menú
        />
        <div className="hamburger-lines" onClick={handleHamburgerClick}>
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>

        <div className="menu-items">
          <a className="link link--1" href="#home" onClick={handleMenuClick}>
            Home
          </a>
          <a
            className="link link--2"
            href="#projects"
            onClick={handleMenuClick}
          >
            Project
          </a>
          <a
            className="link link--3"
            data="About"
            href="#about"
            onClick={handleMenuClick}
          >
            About
          </a>
          <a
            className="link link--4"
            data="CV"
            href="#curriculum"
            onClick={handleMenuClick}
          >
            CV
          </a>
          <a
            className="link link--5"
            data="Contact"
            href="#footer"
            onClick={handleMenuClick}
          >
            Contact
          </a>
          <div className="switch-mode">
            <SwitchMode setDarkMode={setDarkMode} darkMode={darkMode} />
          </div>
        </div>
      </div>

      <Logo className="idavid80" />
    </nav>
  );
}

export default Nav;
