import React from 'react';

const BackEnd = () => {

    const faceStyle = {
        transformStyle: 'preserve-3d',
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        transform: 'rotateY(180deg) translateZ(90px)'
    };

    const contentTextStyle = {
        textShadow: '0 0 3px black',
        textAlign: 'center',
        color: '#fff',
        backfaceVisibility: 'hidden',
    };

    // Definición de estilos en línea
    const styles = {
        container: {
            padding: '20px',
            maxWidth: '80%',
            margin: 'auto',
            backgroundColor: '#f5f5f5',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          
        },
        title: {
            color: '#333',
            marginBottom: '10px',
        },
        subtitle: {
            color: '#333',
            marginBottom: '10px',
        },
        paragraph: {
            color: '#555',
            lineHeight: '1.6',
            marginBottom: '20px',
        },
        list: {
            listStyleType: 'disc',
            paddingLeft: '20px',
        },
        listItem: {
            marginBottom: '10px',
        },
        code: {
            backgroundColor: '#e0e0e0',
            padding: '2px 4px',
            borderRadius: '4px',
            fontFamily: 'monospace',
        }
    };

    return (
        <div className='back-container' style={faceStyle}>
            <h2 style={{ ...contentTextStyle, fontSize: '3em', letterSpacing: '1px',  }}>Back-End</h2>
            <p style={{ ...contentTextStyle, fontSize: '1em', lineHeight: '1.6em' }}>Habilidades en Desarrollo Backend</p>

            <div style={styles.container} >

            <h3 style={styles.subtitle}>Node.js & Express</h3>
      <p style={styles.paragraph}>
        He desarrollado aplicaciones backend utilizando <strong>Node.js</strong>, aprovechando su naturaleza asíncrona y orientada a eventos para construir aplicaciones altamente eficientes. Con <strong>Express</strong>, he diseñado y desarrollado APIs RESTful escalables, gestionando middleware, rutas, y configuraciones de seguridad, como autenticación y autorización.
      </p>

      <h3 style={styles.subtitle}>Spring Boot</h3>
      <p style={styles.paragraph}>
        Tengo experiencia con <strong>Spring Boot</strong>, un framework que facilita la creación de microservicios en Java. Con Spring Boot, he construido aplicaciones empresariales robustas, aprovechando características como Spring Data, Spring Security, y la integración con bases de datos relacionales y no relacionales.
      </p>

      <h3 style={styles.subtitle}>Bases de Datos: MongoDB, MariaDB & MySQL</h3>
      <p style={styles.paragraph}>
        Estoy familiarizado con la gestión y administración de bases de datos tanto relacionales como no relacionales:
      </p>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          <strong>MongoDB</strong>: He utilizado MongoDB en aplicaciones que requieren almacenamiento de datos no estructurados, aprovechando su flexibilidad y escalabilidad. También he trabajado con Mongoose para la modelización de datos y validación de esquemas en Node.js.
        </li>
        <li style={styles.listItem}>
          <strong>MariaDB & MySQL</strong>: Tengo experiencia con bases de datos relacionales, diseñando esquemas eficientes, normalizando datos, y realizando consultas complejas. He trabajado con MariaDB y MySQL en varios proyectos, implementando procedimientos almacenados, triggers, y optimización de consultas.
        </li>
      </ul>
            </div>

        </div>
    );
};

export default BackEnd;
