/* 1. Contenedor Maestro */
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Tiempo entre cada hijo
      delayChildren: 0.2,    // Pausa inicial antes de empezar
    },
  },
};

/* 2. Elemento Hijo (Standard) card, icons, etc.*/
export const itemVariants = {
  hidden: { y: 20, opacity: 0, scale: 0.9 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
};

/* 3. Títulos (Fade Down) h2 y h3. */
export const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* 4. Configuración del Viewport*/
export const viewportConfig = {
  once: true,  // Solo se anima una vez
  amount: 0.3, // Se activa cuando el 30% del elemento es visible
  margin: "0px 0px -50px 0px" // Un pequeño offset para que no se dispare muy abajo
};