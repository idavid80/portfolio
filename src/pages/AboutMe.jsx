import React from 'react';
import './AboutMe.css'
import SkillsBar from './components/aboutMe/SkillsBar';
import { progreso } from '../repo/progress';
import InfoSkills from './components/aboutMe/InfoSkills';


const About = () => {

  const info = () => {
    return (
      
    <section id="about-section">


     
    <h2>Sobre mí</h2>
    <p>Soy un desarrollador de software junior apasionado por la tecnología
      y la resolución de problemas complejos a través del código.
       Durante mi formación profesional, he adquirido experiencia tanto en 
       frontend como en backend, utilizando una variedad de tecnologías modernas
        que me permiten abordar proyectos de manera integral y eficiente.

<h2>Tecnologías y Habilidades</h2>
<h3>Frontend:</h3>

<p>
Flutter: Desarrollo de aplicaciones móviles multiplataforma con una experiencia de usuario atractiva y consistente.</p>
<p>ReactJS: Creación de interfaces de usuario dinámicas y responsivas para aplicaciones web.
</p>

<h3>Backend:</h3>
<p>Node.js: Desarrollo de aplicaciones escalables y de alto rendimiento, con un enfoque en la creación de APIs RESTful.
</p>
<p>Django: Construcción de aplicaciones web robustas con un enfoque en la rapidez de desarrollo y la simplicidad.
</p>
<h3>Bases de Datos:</h3>
<p>MongoDB: Manejo de bases de datos NoSQL para aplicaciones que requieren flexibilidad y escalabilidad.
</p>
<p>SQL: Diseño y gestión de bases de datos relacionales para asegurar la integridad y eficiencia en el manejo de datos.
</p>
<h3>Otros Conocimientos:
</h3>
<p>Java: Utilización de este lenguaje en el contexto de la formación profesional, fortaleciendo mi comprensión de la programación orientada a objetos y las estructuras de datos.
</p>
<p>Go: Desarrollo de un middleware durante mis prácticas profesionales, aprovechando la eficiencia y la concurrencia que ofrece este lenguaje.
</p>
<p>Computer Vision: Implementación de proyectos utilizando OpenCV y YOLOv8, aplicando técnicas avanzadas de visión por computadora.
</p>
<h3>Experiencia
</h3>
<p>Durante mi formación y prácticas profesionales, he tenido la oportunidad de trabajar en proyectos diversos que me han permitido aplicar y expandir mis conocimientos:
</p>
Middleware en Go: Desarrollo de un middleware que mejoró la comunicación y el procesamiento de datos entre varios servicios, demostrando mi capacidad para trabajar con lenguajes de programación modernos y eficientes.
Computer Vision con OpenCV y YOLOv8: Implementación de soluciones para el reconocimiento y análisis de imágenes, utilizando bibliotecas y frameworks de vanguardia en el campo de la visión por computadora.
Proyectos Destacados
Aplicación Móvil con Flutter: Desarrollo de una aplicación móvil que proporciona una experiencia de usuario fluida y funcional, utilizando el framework Flutter.
Interfaz Web con ReactJS: Creación de una interfaz web interactiva y responsiva, mejorando la experiencia del usuario final y facilitando la interacción con los servicios backend.
API RESTful con Node.js y Django: Desarrollo de APIs que permiten una comunicación eficiente y segura entre el frontend y el backend, asegurando la integridad y disponibilidad de los datos.
Contacto
Estoy siempre en búsqueda de nuevas oportunidades y desafíos que me permitan seguir creciendo como desarrollador. Si tienes un proyecto interesante o una oferta laboral, no dudes en contactarme.

Correo Electrónico: tuemail@example.com
LinkedIn: linkedin.com/in/tuperfil
GitHub: github.com/tuusuario</p>
  </section>
    )
  }

  return (
    <div id='about'>
      
    <div className='about-cards'>
    <SkillsBar title={'Language'} skills={progreso.language} />

    <SkillsBar title={'Frameworks'}  skills={progreso.frameworks} />
    </div>
    </div>
  );
};

export default About;
