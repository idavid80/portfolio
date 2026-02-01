// src/App.jsx
import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import './App.css';
import BlogMain from "./components/blog/BlogMain";
import Experience from "./pages/Experience";
import { SeoManager } from "./contexts/SeoManager";
import {ErrorBoundary} from "./components/ui/ErrorBoundary";
import LoadingScreen from "./components/ui/LoadingScreen";

// Componente que contiene todas las secciones principales desplazables
function OnePageSections() {
  return (
    <>
      {/* Cada componente recibe un ID único que usaremos para el scroll */}
      <Home id="home" />
      <About id="about" />
      <Projects id="projects" />
      <Experience id="experience" />
      <Blog id="blog" /> {/* ID para la sección de lista de blog */}
      <Contact id="contact" />
    </>
  );
}

export default function App() {

  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Si la ruta empieza con /blog, activamos el loading
    if (location.pathname.startsWith('/blog')) {
      setIsLoading(true);
      
      // Simulamos un tiempo de carga para que el spinner luzca 
      // o esperamos a que los datos del blog lleguen.
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1500); // 1.5 segundos de elegancia

      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  return (
    // Contenedor principal de la aplicación.
    <div className="app-container">
      
      {/* El Navbar se mantiene fuera de las rutas para que siempre esté visible. */}
      <Navbar />
      <SeoManager />

      {/* El elemento 'main' contiene el contenido que cambia con las rutas. */}
      
      <main className="main-content">
        <ErrorBoundary>
        <Routes>
          {/* Ruta principal que renderiza todas las secciones en una sola página */}
          <Route path="/" element={<OnePageSections />} />

          <Route path="/blog" element={ <BlogMain/> } />
          {/* Ruta para las publicaciones individuales del blog (sigue siendo una página separada) */}
          <Route path="/blog/:id" element={isLoading? <LoadingScreen />:<BlogPost />} />

          {/* Ruta para manejar páginas no encontradas (404) */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </ErrorBoundary>
      </main>

      {/*Footer. */}
    </div>
  );
}