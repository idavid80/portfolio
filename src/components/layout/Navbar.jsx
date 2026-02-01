

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from '../ui/ThemeToggle';
import logo from "../../assets/icons/logo.png";
import dark_logo from "../../assets/icons/dark_logo.png";
import './Navbar.css';
//import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { 
  IoHomeOutline, 
  IoPersonOutline, 
  IoCodeSlashOutline, 
  IoNewspaperOutline, 
  IoMailOutline ,
  IoBriefcaseOutline,
} from "react-icons/io5";
import useScrollToSection from '../../hooks/useScrollToSection';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  //const navigate = useNavigate();
  //const location = useLocation();
  const { theme } = useTheme();
  const scrollToSection = useScrollToSection();
  const switchLang = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = React.useMemo(() => [
    { id: 'home',
      text: t('nav.home'), 
      icon: <IoHomeOutline /> },
    { id: 'about',
      text: t('nav.about'),
      icon: <IoPersonOutline /> },    
    { id: 'projects',
      text: t('nav.projects'),
      icon: <IoCodeSlashOutline /> },
    { id: 'experience',
      text: t('nav.experience'),
      icon: <IoBriefcaseOutline /> },
    { id: 'blog',
      text: t('nav.blog'),
      icon: <IoNewspaperOutline /> },
    { id: 'contact',
      text: t('nav.contact'),
      icon: <IoMailOutline /> },
  ], [t]);

/*  const scrollToSection = (id) => {
    const performScroll = () => {
      const section = document.getElementById(id);
      if (!section) return;

      const navbar = document.querySelector('.navbar');
      const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 0;
      const top = section.offsetTop - navbarHeight;

      window.scrollTo({ top, behavior: 'smooth' });
    };

    // Si no estamos en la página principal, navegamos a "/" primero
    if (location.pathname !== '/') {
      navigate('/', { replace: false });
      setTimeout(() => performScroll(), 50); // espera que se rendericen secciones
    } else {
      performScroll();
    }

    if (isOpen) setIsOpen(false);
  };*/

useEffect(() => {
  const handleScroll = () => {
    // Si estamos en el blog, no queremos activar la lógica de secciones de la home
    if (location.pathname !== '/') return;

    const scrollPos = window.scrollY + window.innerHeight / 3; // Ajustado para detectar antes
    let current = 'home';

    navLinks.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section && section.offsetTop <= scrollPos) {
        current = link.id;
      }
    });

    if (current !== activeSection) {
      setActiveSection(current);
      // ESTA LÍNEA ES LA MAGIA: Actualiza el hash en la URL sin recargar ni saltar
      const newHash = current === 'home' ? '' : `#${current}`;
      window.history.replaceState(null, null, window.location.pathname + newHash);
      
      // Forzamos un evento de hashchange para que SeoManager se entere
      window.dispatchEvent(new HashChangeEvent('hashchange'));
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, [activeSection, navLinks]);

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-container">
        <div className="navbar-logo">
            <img
              src={theme === 'dark' ? dark_logo : logo}
              alt="Logo"
              width={50}
            />
        </div>

        <div className="navbar-links">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              role="menuitem"
              aria-current={activeSection === link.id ? 'page' : undefined}
              className={`nav-item ${activeSection === link.id ? 'active' : ''}`}
            >
              <span className="nav-icon">{link.icon}</span>
              {link.text}
            </button>
          ))}
        </div>

        <div className="navbar-controls">
          <button onClick={switchLang} className="lang-toggle">
            {i18n.language}
          </button>
          <ThemeToggle />
          <button
            onClick={toggleMenu}
            className="menu-toggle"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollToSection(link.id)}
            className={`mobile-nav-item ${activeSection === link.id ? 'active' : ''}`}
          >
            <span className="nav-icon">{link.icon}</span>
            {link.text}
          </button>
        ))}
      </div>

    </nav>
  );
}
