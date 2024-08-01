import React from 'react';

const Frontend = () => {

    const faceStyle = {
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    };

    const contentTextStyle = {
        transform: 'translateZ(90px)',
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
            transform: 'rotateY(180deg) translateZ(90px)'
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
        <div className='front-container' style={faceStyle}>
            <h2 style={{ ...contentTextStyle, fontSize: '3em', letterSpacing: '1px', transform: 'rotateY(180deg) translateZ(90px)' }}>Front-End</h2>
            <p style={{ ...contentTextStyle, fontSize: '1em', lineHeight: '1.6em', transform: 'rotateY(180deg) translateZ(90px)' }}>Habilidades en Desarrollo Frontend</p>

            <div style={styles.container} >

                <h3 style={styles.subtitle}>React</h3>
                <p style={styles.paragraph}>
                    He trabajado extensivamente con <strong>React</strong>,
                    una de las librerías más populares para el desarrollo de interfaces de usuario.
                    Mi experiencia incluye el diseño y la implementación de componentes reutilizables,
                    gestión de estado con Redux, React Context y hooks como
                    <code style={styles.code}>useState</code> y <code style={styles.code}>useEffect</code>
                    para manejar el ciclo de vida de los componentes. También tengo experiencia optimizando
                    el rendimiento de aplicaciones React para asegurar una experiencia de usuario fluida y responsiva.
                </p>

                <h3 style={styles.subtitle}>JavaScript (ES6+)</h3>
                <p style={styles.paragraph}>
                    Domino <strong>JavaScript</strong> moderno, incluyendo las últimas características de ECMAScript 6+ como promesas,
                    async/await, destructuración, módulos y funciones flecha. Mi enfoque en JavaScript es escribir código limpio,
                    mantenible y eficiente, siguiendo las mejores prácticas y principios de programación funcional.
                </p>

                <h3 style={styles.subtitle}>React Native</h3>
                <p style={styles.paragraph}>
                    He utilizado <strong>React Native</strong> para desarrollar aplicaciones móviles nativas
                    para iOS y Android a partir de un solo código base.
                    Mi trabajo incluye la integración con APIs nativas, manejo de navegación con React Navigation,
                    y el uso de componentes nativos para optimizar el rendimiento en dispositivos móviles.
                </p>

                <h3 style={styles.subtitle}>Flutter</h3>
                <p style={styles.paragraph}>
                    También tengo experiencia con <strong>Flutter</strong>, un framework de Google para crear aplicaciones multiplataforma.
                    Con Flutter, he desarrollado aplicaciones que se despliegan en Android, iOS y web, utilizando un único código base
                    escrito en Dart. Esto me ha permitido crear interfaces visualmente atractivas y de alto rendimiento que mantienen una
                    experiencia de usuario consistente en diferentes plataformas.
                </p>

            </div>

        </div>
    );
};

export default Frontend;
