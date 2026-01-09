import React from "react";
import { motion } from "framer-motion";
import { itemVariants } from "../../utils/motion";
import "./styles/GlassCard.css"; // CSS compartido

export default function GlassCard({ 
  children,       // El contenido específico (título, texto, botones)
  image,          // La URL de la imagen (opcional)
  imageAlt,       // Alt text
  imageOverlay,   // Para cosas como el Badge de fecha del Blog (opcional)
  className = "", // Para añadir clases extra si hace falta
  onClick,         // Por si quieres que toda la tarjeta sea clicable
  ...props
}) {
  return (
    <motion.div
      layout
      variants={itemVariants} // La animación de entrada viene de serie
      className={`glass-card ${className}`}
      onClick={onClick}
      {...props}
    >
      {/* Zona de Imagen (Maneja el Zoom automágicamente) */}
      {image && (
        <div className="glass-card-image-container">
          <img
            src={image}
            alt={imageAlt || "Card image"}
            className="glass-card-image"
            loading="lazy"
          />
          {/* Si pasamos un overlay (como la fecha del blog), se renderiza aquí */}
          {imageOverlay && (
            <div className="glass-card-overlay">
              {imageOverlay}
            </div>
          )}
        </div>
      )}

      {/* Zona de Contenido (Aquí va lo específico de cada sección) */}
      <div className="glass-card-content">
        {children}
      </div>
    </motion.div>
  );
}