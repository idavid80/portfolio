import React from 'react';

const IconSvg = ({ href, ariaLabel, svgPath, className }) => {
    return (
      <a href={href} aria-label={ariaLabel} className={className}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d={svgPath} />
        </svg>
      </a>
    );
  };
  

  // Definir el objeto con rutas de los SVG
const iconPath = {
  presentation: "M2 3a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2v11a1 1 0 0 1-1 1h-4.613l1.562 4.684a1 1 0 0 1-1.898.632L13.28 16h-2.558L8.95 21.316a1 1 0 1 1-1.898-.632L8.613 16H4a1 1 0 0 1-1-1V4a1 1 0 0 1-1-1zm9.555 3.168A1 1 0 0 0 10 7v4a1 1 0 0 0 1.555.832l3-2a1 1 0 0 0 0-1.664l-3-2zM12.197 9 12 9.131V8.87l.197.131z",
  youtube: "M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z",
  github: "M7.976 0A7.977 7.977 0 000 7.976c0 3.522 2.3 6.507 5.431 7.584.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076-.343-.93-.881-1.175-.881-1.175-.734-.489.048-.489.048-.489.783.049 1.224.832 1.224.832.734 1.223 1.859.88 2.3.685.048-.538.293-.88.489-1.076-1.762-.196-3.621-.881-3.621-3.964 0-.88.293-1.566.832-2.153-.05-.147-.343-.978.098-2.055 0 0 .685-.196 2.201.832.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832.44 1.077.146 1.908.097 2.104a3.16 3.16 0 01.832 2.153c0 3.083-1.86 3.719-3.62 3.915.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.984 7.984 0 0016 7.976C15.951 3.572 12.38 0 7.976 0z"
  // Agrega más iconos si es necesario
};

const IconLinks = ({ project }) => {
  return (
    <div>
      {Object.keys(project).map((key) => {
        if (iconPath[key]) { // Verifica si existe un SVG para esta clave
          return (
            <IconSvg
              key={key}
              href={project[key]} // URL del enlace
              ariaLabel={key} // Descripción del enlace
              svgPath={iconPath[key]} // Ruta del SVG
              className="svg"
            />
          );
        }
        return null; // Si no hay SVG correspondiente, no renderizar nada
      })}
    </div>
  );
};

export default IconLinks;